import "./ReviewTextPage.scss";

import ButtonElement from "../../components/ButtonElement/ButtonElement";
import { getLeadId } from "../../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ReviewTextPage() {
    const [leadData, setLeadData] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getLeadId({ id }).then((resp) => {
            setLeadData(resp.data[0]);
        });
    }, [id]);

    if (!leadData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="review-container">
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
            <div className="review-container__links">
                <ButtonElement content="APPROVE" backgroundColor="#000000" />
                <ButtonElement content="DECLINE" backgroundColor="#E43A07" />
                <ButtonElement
                    content="APPROVE ALL"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
        </div>
    );
}
