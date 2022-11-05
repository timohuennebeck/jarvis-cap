import LoginField from "../../components/LoginField/LoginField";
import "./LoginPage.scss";
import UserImg from "../../assets/icons/user.png";
import PasswordImg from "../../assets/icons/password.png";
import LogoImg from "../../assets/images/jarvis-logo.png";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="log-in">
            <div className="log-in__header">
                <img className="log-in__header-img" src={LogoImg} alt="logo" />
                <div className="log-in__header-content">
                    <div class="log-in__header-content-container">
                        <ul class="log-in__header-content-container-list">
                            <li class="log-in__header-content-container-list-item">welcome</li>
                            <li class="log-in__header-content-container-list-item">to the</li>
                            <li class="log-in__header-content-container-list-item">world</li>
                            <li class="log-in__header-content-container-list-item">of jarvis!</li>
                        </ul>
                    </div>
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
                <div className="log-in__input-user">
                    <Link to="/loading">
                        <button className="log-in__input-user-link">Log In</button>
                    </Link>
                    <p className="log-in__input-user-existing-user">
                        Don't have an account?{" "}
                        <Link to="/register" className="log-in__input-user-existing-user-link">
                            Register here.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
