import NavButton from "../NavButton/NavButton";
import "./NavList.scss";

function NavList() {
    return (
        <div className="nav-list">
            <NavButton content="LEADS" link="/" />
            <NavButton content="EDITOR" link="/editor" />
            <NavButton content="TEMPLATES" link="/templates" />
            <NavButton content="REVIEW" link="/review" />
            <NavButton content="SETTINGS" link="/settings" />
        </div>
    );
}

export default NavList;
