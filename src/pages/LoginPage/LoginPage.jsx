import LoginField from "../../components/LoginField/LoginField";
import "./LoginPage.scss";
import UserImg from "../../assets/icons/user.png";
import PasswordImg from "../../assets/icons/password.png";
import LogoImg from "../../assets/images/jarvis-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

export default function LoginPage() {
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

        setErrorMessage(errors);

        if (errors.length === 0) {
            navigate("/loading");
        }
    };

    return (
        <div className="log-in">
            <form className="log-in__input" ref={userValues}>
                <div className="log-in__input-ctn">
                    <span className="log-in__inputctn--log-in">Log In</span>
                    <LoginField
                        img={UserImg}
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
                    <p className="log-in__input-ctn-forgot">Forgot Password?</p>
                    <div className="log-in__input-ctn-user">
                        <button className="log-in__input-ctn-user-link" onClick={handleSubmit}>
                            Log In
                        </button>
                        <p className="log-in__input-ctn-user-existing-user">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="log-in__input-ctn-user-existing-user-link"
                            >
                                Register here.
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            <div className="log-in__right"></div>
        </div>
    );
}
