import LoginField from "../../components/LoginField/LoginField";
import "./RegisterPage.scss";
import UserImg from "../../assets/icons/user.png";
import PasswordImg from "../../assets/icons/password.png";
import EmailImg from "../../assets/icons/mail.png";
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

        if (!userValues.current.first_name.value) {
            errors.push("first_name");
        }

        if (!userValues.current.last_name.value) {
            errors.push("last_name");
        }

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
            <form className="register__input" ref={userValues}>
                <div className="register__input-ctn">
                    <span className="register__input-ctn-register">Register</span>
                    <div className="register__input-ctn-names">
                        <div className="register__input-ctn-names-indv">
                            <LoginField
                                img={UserImg}
                                placeholder="First Name"
                                name="first_name"
                                errorMessage={errorMessage}
                            />
                        </div>
                        <div className="register__input-ctn-names-indv">
                            <LoginField
                                img={UserImg}
                                placeholder="Last Name"
                                name="last_name"
                                errorMessage={errorMessage}
                            />
                        </div>
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
                    <p className="register__input-ctn-forgot">Forgot Password?</p>
                    <div className="register__input-ctn-user">
                        <button className="register__input-ctn-user-link" onClick={handleSubmit}>
                            Register
                        </button>
                        <p className="register__input-ctn-user-existing-user">
                            Already have an account?{" "}
                            <Link to="/login" className="register__input-ctn-user-existing-user-link">
                                Login here.
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            <div className="register__right"></div>
        </div>
    );
}
