import "./LeadInformationMinimized.scss";
import Melanie from "../../assets/images/Untitled design.jpg";

export default function LeadInformationMinimized() {
    return (
        <div className="lead-minimized">
            <img className="lead-minimized__img" src={Melanie} alt="lead-icon" />

            <div className="lead-minimized__information">
                <p>Melanie Perkins</p>
                <p>melanie@canva.com</p>
            </div>

            <div className="lead-minimized__more">
                <p>i</p>
            </div>
        </div>
    );
}
