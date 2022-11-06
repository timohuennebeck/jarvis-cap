import "./Header.scss";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../../utils/api";

import Menu from "../../assets/images/menu-icon.png";
import ButtonElement from "../ButtonElement/ButtonElement";
import ProfileImg from "../../assets/images/portrait.jpg";

export default function Header() {
    const [userData, setUserData] = useState();
    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        getUsers().then((resp) => {
            setUserData(resp.data[0]);
        });
    }, []);

    if (!userData) {
        return <p>Loading...</p>;
    }

    const showSideBar = () => setSidebar(!sidebar);

    return (
        <>
            <article className="nav">
                <div className="nav__sec">
                    <div className="nav__menu-toggle">
                        <img
                            className="nav__menu-toggle-img"
                            src={Menu}
                            onClick={setSidebar}
                            alt=""
                        />
                    </div>

                    <div className="nav__desktop">
                        <ButtonElement
                            content="HOME"
                            link="/"
                            backgroundColor="#FFFFFF"
                            fontColor="#000000"
                        />
                        <div className="nav__desktop-profile">
                            <p>Hello, Timo</p>
                            <Link to="/settings/1">
                                <img
                                    className="nav__desktop-profile-img"
                                    src={ProfileImg}
                                    alt="profile"
                                />
                            </Link>
                            <ButtonElement link="/login" content="Logout" backgroundColor="#000"/>
                        </div>
                    </div>

                    <div className={sidebar ? "nav__menu-bar active" : "nav__menu-bar"}>
                        <div className="nav__menu-bar-items" onClick={showSideBar}>
                            <div className="nav__menu-bar-buttons">
                                <ButtonElement content="CANCEL" backgroundColor="#E43A07" />
                                <ButtonElement link="/" content="HOME" backgroundColor="#000000" />
                            </div>
                            <div className="nav__menu-links">
                                <Link className="nav__menu-links-indv" to="/leads">
                                    Leads
                                </Link>
                                <Link className="nav__menu-links-indv" to="/editor">
                                    Editor
                                </Link>
                                <Link className="nav__menu-links-indv" to="/templates">
                                    Templates
                                </Link>
                                <Link
                                    className="nav__menu-links-indv"
                                    to={`/review/${userData.id}`}
                                >
                                    Review
                                </Link>
                                <Link
                                    className="nav__menu-links-indv"
                                    to={`/settings/${userData.id}`}
                                >
                                    Settings
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
