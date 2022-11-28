import "./LoadingPage.scss";
import Logo from "../../assets/images/jarvis-logo.png";
import Loading from "../../assets/images/loading.png";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
    const navigate = useNavigate();

    setTimeout(function () {
        window.onload = navigate("/");
    }, 4000);

    return (
        <>
            <div className="loading">
                <div className="loading__header">
                    <img className="loading__header-logo" src={Logo} alt="logo" />
                </div>
                <img className="loading__header-img" src={Loading} alt="" />
                <p className="loading__paragraph">
                    Please sit back and relax while we are preparing the workspace for you...
                </p>
            </div>
        </>
    );
}
