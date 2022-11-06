import LoginField from "../../components/LoginField/LoginField";
import "./RegisterPage.scss";
import UserImg from "../../assets/icons/user.png";
import PasswordImg from "../../assets/icons/password.png";
import EmailImg from "../../assets/icons/mail.png";
import LogoImg from "../../assets/images/jarvis-logo.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const userValues = useRef();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = [];
        if (!userValues.current.email.value) {
            errors.push("email");
        }

        if (!userValues.current.password.value) {
            errors.push("password");
        }

        if (!userValues.current.confirm_password.value) {
            errors.push("confirm_password");
        }

        setErrorMessage(errors);

        if (errors.length === 0) {
            navigate("/loading");
        }
    };

    return (
        <div className="register">
            <div className="register__header">
                <img className="register__header-img" src={LogoImg} alt="logo" />
                <div className="register__header-content">
                    <div className="register__header-content-container">
                        <ul className="register__header-content-container-list">
                            <li className="register__header-content-container-list-item">
                                welcome
                            </li>
                            <li className="register__header-content-container-list-item">to the</li>
                            <li className="register__header-content-container-list-item">world</li>
                            <li className="register__header-content-container-list-item">
                                of jarvis!
                            </li>
                        </ul>
                    </div>
                    <p className="register__header-content-paragraph">
                        Please register an account to get started...
                    </p>
                </div>
            </div>

            <form className="register__input" ref={userValues}>
                <span className="register__input-register">Register</span>
                <div className="register__input-names">
                    <LoginField
                        img={UserImg}
                        placeholder="First Name"
                        name="first_name"
                        errorMessage={errorMessage}
                    />
                    <LoginField
                        img={UserImg}
                        placeholder="Last Name"
                        name="last_name"
                        errorMessage={errorMessage}
                    />
                </div>
                <LoginField
                    img={EmailImg}
                    placeholder="Email"
                    name="email"
                    errorMessage={errorMessage}
                />
                <LoginField
                    img={PasswordImg}
                    placeholder="Password"
                    name="password"
                    type="password"
                    errorMessage={errorMessage}
                />
                <LoginField
                    img={PasswordImg}
                    placeholder="Confirm Password"
                    name="confirm_password"
                    type="password"
                    errorMessage={errorMessage}
                />
                <p className="register__input-forgot">Forgot Password?</p>
                <div className="register__input-user">
                    <button className="register__input-user-link" onClick={handleSubmit}>
                        Register
                    </button>
                    <p className="register__input-user-existing-user">
                        Already have an account?{" "}
                        <Link to="/login" className="register__input-user-existing-user-link">
                            Login here.
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
