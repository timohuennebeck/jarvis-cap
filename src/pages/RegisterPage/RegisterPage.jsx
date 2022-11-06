import LoginField from "../../components/LoginField/LoginField";
import "./RegisterPage.scss";
import UserImg from "../../assets/icons/user.png";
import PasswordImg from "../../assets/icons/password.png";
import EmailImg from "../../assets/icons/mail.png";
import LogoImg from "../../assets/images/jarvis-logo.png";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="register">
            <div className="register__header">
                <img className="register__header-img" src={LogoImg} alt="logo" />
                <div className="register__header-content">
                    <div class="register__header-content-container">
                        <ul class="register__header-content-container-list">
                            <li class="register__header-content-container-list-item">welcome</li>
                            <li class="register__header-content-container-list-item">to the</li>
                            <li class="register__header-content-container-list-item">world</li>
                            <li class="register__header-content-container-list-item">of jarvis!</li>
                        </ul>
                    </div>
                    <p className="register__header-content-paragraph">
                        Please register an account to get started...
                    </p>
                </div>
            </div>

            <div className="register__input">
                <span className="register__input-register">Register</span>
                <div className="register__input-names">
                    <LoginField img={UserImg} placeholder="First Name" />
                    <LoginField img={UserImg} placeholder="Last Name" />
                </div>
                <LoginField img={EmailImg} placeholder="Email" />
                <LoginField img={PasswordImg} placeholder="Password" type="password" />
                <LoginField img={PasswordImg} placeholder="Confirm Password" type="password" />
                <p className="register__input-forgot">Forgot Password?</p>
                <div className="register__input-user">
                    <Link to="/loading">
                        <button className="register__input-user-link">Register</button>
                    </Link>
                    <p className="register__input-user-existing-user">
                        Already have an account?{" "}
                        <Link to="/login" className="register__input-user-existing-user-link">
                            Login here.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
