import "./LeadInformation.scss";
import Melanie from "../../assets/images/Untitled design.jpg";

export default function LeadInformation({ lead }) {
    return (
        <div className="lead">
            <div className="lead-container__select"></div>

            <img className="lead-container__img" src={Melanie} alt="lead-icon" />

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
