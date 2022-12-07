import "./ContactInformationMinimized.scss";

export default function ContactInformationMinimized({ contacts }) {
    return (
        <div className="contact-minimized">
            <img className="contact-minimized__img" src={contacts.image_url} alt="contact-icon" />

            <div className="contact-minimized__information">
                <p>
                    {contacts.first_name} {contacts.last_name}
                </p>
                <p>{contacts.email}</p>
            </div>

            <div className="contact-minimized__more">
                <p>i</p>
            </div>
        </div>
    );
}
