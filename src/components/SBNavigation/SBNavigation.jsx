import "./SBNavigation.scss";

// components
import ButtonElement from "../ButtonElement/ButtonElement";

function NavList() {
    return (
        <div className="nav-list">
            <div className="nav-list__link">
                <ButtonElement
                    content="LEADS"
                    link="/leads"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="EDITOR"
                    link="/editor"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="TEMPLATES"
                    link="/templates"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="REVIEW"
                    link="/review"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="SETTINGS"
                    link="/settings"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
        </div>
    );
}

export default NavList;
