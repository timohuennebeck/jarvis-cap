import "./CompanyInformation.scss";
import { useState } from "react";

export default function CompanyInformation({ company }) {
    const [hoverCircle, setHoverCircle] = useState(false);

    const showBlock = () => {
        setHoverCircle(true);
    };

    const hideBlock = () => {
        setHoverCircle(false);
    };

    return (
        <div className="company" onMouseOver={showBlock} onMouseLeave={hideBlock}>
            <div className="company__select">
                {hoverCircle && <div className="company__select-fill"></div>}
            </div>

            <div className="company__data">
                <div className="company__data-name">
                    <p>{company.name}</p>
                </div>
                <div className="company__data-location">
                    <p>{company.location}</p>
                </div>
                <div className="company__data-position">
                    <p>{company.position}</p>
                </div>
                <div className="company__data-status">
                    <p>{company.status}</p>
                </div>
                <div className="company__data-date_posted">
                    <p>{company.date_posted}</p>
                </div>
            </div>
        </div>
    );
}
