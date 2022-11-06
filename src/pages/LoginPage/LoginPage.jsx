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

        if (!userValues.current.username.value) {
            errors.push("username");
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
            <div className="log-in__header">
                <img className="log-in__header-img" src={LogoImg} alt="logo" />
                <div className="log-in__header-content">
                    <div className="log-in__header-content-container">
                        <ul className="log-in__header-content-container-list">
                            <li className="log-in__header-content-container-list-item">welcome</li>
                            <li className="log-in__header-content-container-list-item">to the</li>
                            <li className="log-in__header-content-container-list-item">world</li>
                            <li className="log-in__header-content-container-list-item">
                                of jarvis!
                            </li>
                        </ul>
                    </div>
                    <p className="log-in__header-content-paragraph">
                        Please log in to get started...
                    </p>
                </div>
            </div>

            <form className="log-in__input" ref={userValues}>
                <span className="log-in__input-log-in">Log In</span>
                <LoginField
                    img={UserImg}
                    placeholder="Username"
                    name="username"
                    errorMessage={errorMessage}
                />
                <LoginField
                    img={PasswordImg}
                    placeholder="Password"
                    name="password"
                    type="password"
                    errorMessage={errorMessage}
                />
                <p className="log-in__input-forgot">Forgot Password?</p>
                <div className="log-in__input-user">
                    <button className="log-in__input-user-link" onClick={handleSubmit}>
                        Log In
                    </button>
                    <p className="log-in__input-user-existing-user">
                        Don't have an account?{" "}
                        <Link to="/register" className="log-in__input-user-existing-user-link">
                            Register here.
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
