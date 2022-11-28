import "./SBNavigation.scss";
import { getUsers } from "../../utils/api";

// components
import { useEffect } from "react";
import { useState } from "react";
import ButtonWithLink from "../ButtonWithLink/ButtonWithLink";

import dashhboardImg from "../../assets/icons/collapse-alt.svg";
import trackerImg from "../../assets/icons/tasksvg.svg";
import leadsImg from "../../assets/icons/users.svg";
import companiesImg from "../../assets/icons/briefcase.svg";
import reviewImg from "../../assets/icons/eye.svg";
import helpCenterImg from "../../assets/icons/bell.svg";
import settingsImg from "../../assets/icons/cog.svg";
import logOutImg from "../../assets/icons/lock-alt.svg";
import profileImg from "../../assets/images/portrait.jpg";

function NavList() {
    const [userData, setUserData] = useState();

    useEffect(() => {
        getUsers().then((resp) => {
            setUserData(resp.data[0]);
        });
    }, []);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="nav-list">
            <div className="nav-list__ctn">
                <div className="nav-list__ctn-user">
                    <img className="nav-list__ctn-user-img" src={profileImg} alt="" />
                    <p className="nav-list__ctn-user-text">Hello, Timo!</p>
                </div>
                <div className="nav-list__ctn-main">
                    <ButtonWithLink link="/dashboard" name="Dashboard" img={dashhboardImg} />
                    <ButtonWithLink link="/tracker" name="Tracker" img={trackerImg} />
                    <ButtonWithLink link="/leads" name="Leads" img={leadsImg} />
                    <ButtonWithLink link="/companies" name="Companies" img={companiesImg} />
                    <ButtonWithLink link="/review/1" name="Review" img={reviewImg} />
                </div>
            </div>

            <div className="nav-list__settings">
                <ButtonWithLink link="/help" name="Help Center" img={helpCenterImg} />
                <ButtonWithLink link="/settings" name="Settings" img={settingsImg} />
                <ButtonWithLink link="/log-out" name="Log out" img={logOutImg} />
            </div>
        </div>
    );
}

export default NavList;
