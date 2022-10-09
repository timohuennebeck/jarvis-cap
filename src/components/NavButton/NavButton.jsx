import { Link } from "react-router-dom";
import "./NavButton.scss";

function NavButton({ content, link }) {
    return (
        <Link to={`${link}`}>
            <button className="nav-button">{content}</button>
        </Link>
    );
}

export default NavButton;
