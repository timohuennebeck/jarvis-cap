import "./LeadInformationMinimized.scss";
import Melanie from "../../assets/images/Untitled design.jpg";

export default function LeadInformationMinimized({ lead }) {
    return (
        <div className="lead-minimized">
            <img className="lead-minimized__img" src={Melanie} alt="lead-icon" />

            <div className="lead-minimized__information">
                <p>
                    {lead.first_name} {lead.last_name}
                </p>
                <p>{lead.email}</p>
            </div>

            <div className="lead-minimized__more">
                <p>i</p>
            </div>
        </div>
    );
}
