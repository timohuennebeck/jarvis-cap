import "./ReviewTextPage.scss";

import ButtonElement from "../../components/ButtonElement/ButtonElement";
import { getContactId, updateContact } from "../../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ReviewTextPage({ refreshContacts, currentUser }) {
    const [contactData, setContactData] = useState([]);
    const [userInput, setUserInput] = useState([]);

    console.log(currentUser);

    const { id } = useParams();

    useEffect(() => {
        getContactId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
            setContactData(resp.data[0]);
        });
    }, [id]);

    const approvedContact = () => {
        const contactApproved = (userInput.status = "CL Approved");
        setUserInput(contactApproved);
        printPDF();
        updateContact({ id, userInput }).then(() => {
            refreshContacts();
        });
    };

    const declineContact = () => {
        const contactDeclined = (userInput.status = "CL Declined");
        setUserInput(contactDeclined);
        updateContact({ id, userInput }).then(() => {
            refreshContacts();
        });
    };

    function printPDF() {
        const domElement = document.getElementById("print-pdf");
        html2canvas(domElement, {}).then((canvas) => {
            const imgData = canvas.toDataURL("image/jpeg", 1.0);
            const doc = new jsPDF();
            doc.addImage(imgData, "JPEG", 5, 5);
            doc.save(`${contactData.company}-Timo-Huennebeck-Cover-Letter`);
        });
    }

    if (!contactData) {
        return null;
    }

    return (
        <div className="review-ctr">
            <div className="review-ctr__content" id="print-pdf">
                <div className="review-ctr__content-user">
                    <p className="review-ctr__content-user-name">
                        {currentUser.first_name} {currentUser.last_name}
                    </p>
                    {/* <p className="review-ctr__content-user-position">{currentUser.email}</p> */}
                    <div className="review-ctr__content-user-line"></div>
                    <p className="review-ctr__content-user-street-name">{currentUser.email}</p>
                    {/* <p className="review-ctr__content-user-city">Huerth</p>
                    <p className="review-ctr__content-user-state-postcode-">NRW 50354</p> */}
                </div>
                <div className="review-ctr__content-contact">
                    <div className="review-ctr__content-contact-line"></div>
                    <div>
                        <p>{new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="review-ctr__content-contact-name">
                            {contactData.first_name} {contactData.last_name}
                        </p>
                        <p>{contactData.position}</p>
                        <p>{contactData.company}</p>
                        <p>{contactData.street_name}</p>
                        <p>{contactData.city}</p>
                        <p>
                            {contactData.state} {contactData.postcode}
                        </p>
                    </div>
                    <div>
                        <p>Dear {contactData.first_name},</p>
                    </div>
                    <div>
                        <p>{contactData.icebreaker}</p>
                    </div>
                    <div>
                        <p>{contactData.paragraph_one}</p>
                    </div>
                    <div>
                        <p>{contactData.paragraph_two}</p>
                    </div>
                    <div>
                        <p>{contactData.paragraph_three}</p>
                    </div>
                    <div>
                        <p>{contactData.call_to_action}</p>
                    </div>
                    <div>
                        <p>Best regards,</p>
                        <p className="review-ctr__content-contact-user-name">
                            {currentUser.first_name} {currentUser.last_name}
                        </p>
                    </div>
                </div>
            </div>
            <div className="review-ctr__links">
                <ButtonElement
                    onClick={approvedContact}
                    content="APPROVE AND PRINT PDF"
                    backgroundColor="#000"
                />
                <ButtonElement
                    onClick={declineContact}
                    content="DECLINE"
                    backgroundColor="#C71919"
                    fontColor="#FFF"
                />
            </div>
        </div>
    );
}
