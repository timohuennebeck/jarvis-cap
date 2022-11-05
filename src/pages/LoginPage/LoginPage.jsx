import LoginField from "../../components/LoginField/LoginField";
import "./LoginPage.scss";
import UserImg from "../../assets/icons/user.png";
import PasswordImg from "../../assets/icons/password.png";
import LogoImg from "../../assets/images/jarvis-logo.png";
import ButtonElement from "../../components/ButtonElement/ButtonElement";

export default function LoginPage() {
    return (
        <div className="log-in">
            <div className="log-in__header">
                <img className="log-in__header-img" src={LogoImg} alt="logo" />
                <div className="log-in__header-content">
                    <span className="log-in__header-content-brand">jarvis</span>
                    <p className="log-in__header-content-paragraph">
                        Please log in to get started...
                    </p>
                </div>
            </div>

            <div className="log-in__input">
                <span className="log-in__input-log-in">Log In</span>
                <LoginField img={UserImg} placeholder="Username" />
                <LoginField img={PasswordImg} placeholder="Password" type="password" />
                <p className="log-in__input-forgot">Forgot Password?</p>
                <div className="log-in__input-btn">
                    <ButtonElement link="/loading" content="Log In" backgroundColor="#000" />
                </div>
            </div>
        </div>
    );
}
