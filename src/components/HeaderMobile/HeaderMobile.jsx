import "./HeaderMobile.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import InputField from "../InputField/InputField";
import Menu from "../../assets/images/menu-icon.png";
import Button from "../Button/Button";

function HeaderMobile() {
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
                    <InputField content="Search..." />

                    <div className={sidebar ? "nav__menu-bar active" : "nav__menu-bar"}>
                        <div className="nav__menu-bar-items" onClick={showSideBar}>
                            <div className="nav__menu-bar-buttons">
                                <Button content="CANCEL" backgroundColor="#E43A07" />
                                <Button link="/" content="HOME" backgroundColor="#1C3F32" />
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

export default HeaderMobile;
