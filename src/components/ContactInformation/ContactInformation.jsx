import "./ContactInformation.scss";
import { useState } from "react";

export default function ContactInformation({ contact }) {
    const [hoverCircle, setHoverCircle] = useState(false);

    const showBlock = () => {
        setHoverCircle(true);
    };

    const hideBlock = () => {
        setHoverCircle(false);
    };

    return (
        <div className="contact" onMouseOver={showBlock} onMouseLeave={hideBlock}>
            <div className="contact-container__select">
                {hoverCircle && <div className="contact-container__select-fill"></div>}
            </div>

            <img className="contact-container__img" src={contact.image_url} alt="contact-icon" />

            <div className="contact-container__information">
                <p className="contact-container__information-name">
                    {contact.first_name} {contact.last_name}
                </p>
                <p className="contact-container__information-email">{contact.email}</p>
            </div>

            <div className="contact-container__more">
                <p>i</p>
            </div>

            <div className="contact-container__business">
                <p>{contact.company}</p>
            </div>
            <div className="contact-container__progress">
                <p>{contact.status}</p>
            </div>
        </div>
    );
}
