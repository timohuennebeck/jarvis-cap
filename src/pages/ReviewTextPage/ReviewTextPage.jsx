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
            <p>{leadData.first_name} {leadData.last_name}</p>
            <p>{leadData.business_name}</p>
            <p>{leadData.street_name}</p>
            <p>{leadData.postcode}</p>
            <br />
            <p>Dear {leadData.first_name}</p>
            <br />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam.
                Interdum varius sit amet mattis. Mauris commodo quis imperdiet massa tincidunt nunc
                pulvinar sapien et. Ut faucibus pulvinar elementum integer enim neque. In nulla
                posuere sollicitudin aliquam ultrices sagittis. Lacus sed turpis tincidunt id
                aliquet risus feugiat...
            </p>
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
