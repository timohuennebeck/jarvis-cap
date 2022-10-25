import "./SBTemplates.scss";

// components
import ButtonElement from "../../components/ButtonElement/ButtonElement";

export default function SBTemplates() {
    return (
        <div className="nav-list">
            <div className="nav-list__link">
                <ButtonElement
                    content="TEMPLATE #1"
                    link="/leads"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="TEMPLATE #1"
                    link="/editor"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="TEMPLATE #1"
                    link="/templates"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="TEMPLATE #1"
                    link="/review"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="TEMPLATE #1"
                    link="/settings"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
        </div>
    );
}
