import "./ReviewTextPage.scss";

import ButtonElement from "../../components/ButtonElement/ButtonElement";
import { getLeadId, updateLead } from "../../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ReviewTextPage({ refreshLeads }) {
    const [leadData, setLeadData] = useState([]);
    const [userInput, setUserInput] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getLeadId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
            setLeadData(resp.data[0]);
        });
    }, [id]);

    const approveLead = () => {
        const leadApproved = (userInput.status = "CL Approved");
        setUserInput(leadApproved);
        printPDF();
        updateLead({ id, userInput }).then(() => {
            refreshLeads();
        });
    };

    const declineLead = () => {
        const leadDeclined = (userInput.status = "CL Declined");
        setUserInput(leadDeclined);
        updateLead({ id, userInput }).then(() => {
            refreshLeads();
        });
    };

    function printPDF() {
        const domElement = document.getElementById("print-pdf");
        html2canvas(domElement, {}).then((canvas) => {
            const imgData = canvas.toDataURL("image/jpeg", 1.0);
            const doc = new jsPDF();
            doc.addImage(imgData, "JPEG", 5, 5);
            doc.save(`${leadData.company}-Timo-Huennebeck-Cover-Letter`);
        });
    }

    if (!leadData) {
        return null;
    }

    return (
        <div className="review-ctr">
            <div className="review-ctr__content" id="print-pdf">
                <div className="review-ctr__content-user">
                    <p className="review-ctr__content-user-name">Timo Huennebeck</p>
                    <p className="review-ctr__content-user-position">Software Developer</p>
                    <div className="review-ctr__content-user-line"></div>
                    <p className="review-ctr__content-user-street-name">Rupert-Mayer-Str. 18</p>
                    <p className="review-ctr__content-user-city">Huerth</p>
                    <p className="review-ctr__content-user-state-postcode-">NRW 50354</p>
                </div>
                <div className="review-ctr__content-lead">
                    <div className="review-ctr__content-lead-line"></div>
                    <div>
                        <p>{new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="review-ctr__content-lead-name">
                            {leadData.first_name} {leadData.last_name}
                        </p>
                        <p>{leadData.position}</p>
                        <p>{leadData.company}</p>
                        <p>{leadData.street_name}</p>
                        <p>{leadData.city}</p>
                        <p>
                            {leadData.state} {leadData.postcode}
                        </p>
                    </div>
                    <div>
                        <p>Dear {leadData.first_name},</p>
                    </div>
                    <div>
                        <p>{leadData.icebreaker}</p>
                    </div>
                    <div>
                        <p>{leadData.paragraph_one}</p>
                    </div>
                    <div>
                        <p>{leadData.paragraph_two}</p>
                    </div>
                    <div>
                        <p>{leadData.paragraph_three}</p>
                    </div>
                    <div>
                        <p>{leadData.call_to_action}</p>
                    </div>
                    <div>
                        <p>Best regards,</p>
                        <p className="review-ctr__content-lead-user-name">Timo Huennebeck</p>
                    </div>
                </div>
            </div>
            <div className="review-ctr__links">
                <ButtonElement
                    onClick={approveLead}
                    content="APPROVE AND PRINT PDF"
                    backgroundColor="#000"
                />
                <ButtonElement
                    onClick={declineLead}
                    content="DECLINE"
                    backgroundColor="#C71919"
                    fontColor="#FFF"
                />
            </div>
        </div>
    );
}
