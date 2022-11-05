import "./LoadingPage.scss";
import Logo from "../../assets/images/jarvis-logo.png";
import Loading from "../../assets/images/loading.png";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
    const navigate = useNavigate();

    // setTimeout(function () {
    //     window.onload = navigate("/");
    // }, 6250);

    return (
        <>
            <div className="loading">
                <div className="loading__header">
                    <img className="loading__header-logo" src={Logo} alt="logo" />
                    <div class="loading__header-container">
                        <ul class="loading__header-container-list">
                            <li class="loading__header-container-list-item">welcome</li>
                            <li class="loading__header-container-list-item">to the</li>
                            <li class="loading__header-container-list-item">world</li>
                            <li class="loading__header-container-list-item">of jarvis!</li>
                        </ul>
                    </div>
                </div>
                <img className="loading__header-img" src={Loading} alt="" />
                <p className="loading__paragraph">
                    Sit back and relax while we are preparing the workspace for you...
                </p>
            </div>
        </>
    );
}
