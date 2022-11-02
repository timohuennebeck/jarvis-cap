import "./ReviewTextPage.scss";

import ButtonElement from "../../components/ButtonElement/ButtonElement";
import { getLeadId, updateLead } from "../../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ReviewTextPage() {
    const [leadData, setLeadData] = useState(null);
    const [userInput, setUserInput] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getLeadId({ id }).then((resp) => {
            setLeadData(resp.data[0]);
            setUserInput(resp.data[0]);
        });
    }, [id]);

    const approveLead = () => {
        const leadApproved = (userInput.status = "Approved");
        setUserInput(leadApproved);
        updateLead({ id, userInput });
    };

    const declineLead = () => {
        const leadDeclined = (userInput.status = "Declined");
        setUserInput(leadDeclined);
        updateLead({ id, userInput });
    };

    if (!leadData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="review-container">
            <div className="review-container__content">
                <p>{new Date().toLocaleDateString()}</p>
                <br />
                <p>
                    {leadData.first_name} {leadData.last_name}
                </p>
                <p>{leadData.business_name}</p>
                <p>{leadData.street_name}</p>
                <p>{leadData.postcode}</p>
                <br />
                <p>Dear {leadData.first_name}</p>
                <br />
                <p>{leadData.icebreaker}</p>
                <br />
                <p>{leadData.paragraph_one}</p>
                <br />
                <p>{leadData.paragraph_two}</p>
                <br />
                <p>{leadData.paragraph_three}</p>
                <br />
                <p>{leadData.call_to_action}</p>
                <br />
                <p>Best regards,</p>
                <p>Timo</p>
            </div>
            <div className="review-container__links">
                <ButtonElement onClick={approveLead} content="APPROVE" backgroundColor="#000000" />
                <ButtonElement onClick={declineLead} content="DECLINE" backgroundColor="#E43A07" />
            </div>
        </div>
    );
}
