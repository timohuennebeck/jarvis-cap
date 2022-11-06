import "./SBTemplates.scss";

// components
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import ExternalButton from "../ExternalButton/ExternalButton";

export default function SBTemplates() {
    return (
        <div className="nav-list">
            <div className="nav-list__link">
                <ExternalButton
                    link="https://docs.google.com/document/d/1pg3id6wxlmV65hVNb3uzYMbYVaPki1c8593KcpNIKcw"
                    name="TEMPLATE #1"
                />
            </div>
            <div className="nav-list__link">
                <ExternalButton
                    link="https://docs.google.com/document/d/1J3TK7yN2TntBzd9oUfXsTq1V4IRsr1713nh-uvqHKTQ"
                    name="TEMPLATE #2"
                />
            </div>
        </div>
    );
}
