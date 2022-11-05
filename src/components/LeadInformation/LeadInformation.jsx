import "./LeadInformation.scss";
import { useState } from "react";

export default function LeadInformation({ lead }) {
    const [hoverCircle, setHoverCircle] = useState(false);

    const showBlock = () => {
        setHoverCircle(true);
    };

    const hideBlock = () => {
        setHoverCircle(false);
    };

    return (
        <div className="lead" onMouseOver={showBlock} onMouseLeave={hideBlock}>
            <div className="lead-container__select">
                {hoverCircle && <div className="lead-container__select-fill"></div>}
            </div>

            <img className="lead-container__img" src={lead.image_url} alt="lead-icon" />

            <div className="lead-container__information">
                <p className="lead-container__information__name">
                    {lead.first_name} {lead.last_name}
                </p>
                <p className="lead-container__information__email">{lead.email}</p>
            </div>

            <div className="lead-container__more">
                <p>i</p>
            </div>

            <div className="lead-container__business">
                <p>{lead.business_name}</p>
            </div>
            <div className="lead-container__progress">
                <p>{lead.status}</p>
            </div>
        </div>
    );
}
