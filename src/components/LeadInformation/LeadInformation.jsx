import "./LeadInformation.scss";
import Melanie from "../../assets/images/Untitled design.jpg";

function LeadInformation() {
    return (
        <div className="lead">
            <div className="lead-container__select">
                <div className="lead-container__select-active"></div>
            </div>

            <div className="lead-container__img">
                <img
                    className="lead-container__img-placeholder"
                    src={Melanie}
                    alt=""
                />
            </div>

            <div className="lead-container__information">
                <p>Melanie Perkins</p>
                <p>melanie@canva.com</p>
            </div>

            <div className="lead-container__more">
                <p>i</p>
            </div>

            <div className="lead-container__business">
                <p>Canva</p>
            </div>
        </div>
    );
}

export default LeadInformation;
