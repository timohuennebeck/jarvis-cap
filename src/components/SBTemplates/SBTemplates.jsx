import "./SBTemplates.scss";

// components
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import ExternalButton from "../ExternalButton/ExternalButton";

export default function SBTemplates() {
    return (
        <div className="nav-list">
            <div className="nav-list__link">
                <ExternalButton link="" name="TEMPLATE #1" />
            </div>
            <div className="nav-list__link">
                <ExternalButton link="" name="TEMPLATE #2" />
            </div>
            <div className="nav-list__link">
                <ExternalButton link="" name="TEMPLATE #3" />
            </div>
        </div>
    );
}
