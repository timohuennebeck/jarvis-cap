import "./Header.scss";
import InputField from "../InputField/InputField";
import MenuIcon from "../../assets/images/menu-icon.png";

function Header() {
    return (
        <article className="header">
            <div className="header__sec">
                <div className="menu">
                    <img className="menu__img" src={MenuIcon} alt="" />
                </div>
                <InputField content="Search..." />
            </div>
        </article>
    );
}

export default Header;
