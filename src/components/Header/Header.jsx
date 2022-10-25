import "./Header.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../../assets/images/menu-icon.png";
import ButtonElement from "../ButtonElement/ButtonElement";

export default function Header() {
    const [sidebar, setSidebar] = useState(false);

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
                        <ButtonElement
                            content="CREATE A TEMPLATE"
                            link="/templates"
                            backgroundColor="#000000"
                            fontColor="#FFFFFF"
                        />
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
                                <Link className="nav__menu-links-indv" to="/review">
                                    Review
                                </Link>
                                <Link className="nav__menu-links-indv" to="/settings">
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
