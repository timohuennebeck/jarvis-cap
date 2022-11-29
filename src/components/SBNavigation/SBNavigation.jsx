import "./SBNavigation.scss";
import { getUsers } from "../../utils/api";

// components
import { useEffect } from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ButtonWithLink from "../ButtonWithLink/ButtonWithLink";
import dashhboardImg from "../../assets/icons/collapse-alt.svg";
import trackerImg from "../../assets/icons/tasksvg.svg";
import leadsImg from "../../assets/icons/users.svg";
import companiesImg from "../../assets/icons/briefcase.svg";
import reviewImg from "../../assets/icons/eye.svg";
import helpCenterImg from "../../assets/icons/bell.svg";
import settingsImg from "../../assets/icons/cog.svg";
import logOutImg from "../../assets/icons/lock-alt.svg";

function NavList() {
    const [userData, setUserData] = useState();
    const { user, isAuthenticated } = useAuth0();

    const { logout } = useAuth0();

    useEffect(() => {
        getUsers().then((resp) => {
            setUserData(resp.data[0]);
        });
    }, []);

    if (!userData) {
        return null;
    }

    return (
        isAuthenticated && (
            <div className="nav-list">
                <div className="nav-list__ctn">
                    <div className="nav-list__ctn-user">
                        <img className="nav-list__ctn-user-img" src={user.picture} alt="" />
                        <p className="nav-list__ctn-user-text">Hello, {user.given_name}!</p>
                    </div>
                    <div className="nav-list__ctn-main">
                        <ButtonWithLink link="/" name="Dashboard" img={dashhboardImg} />
                        <ButtonWithLink link="/tracker" name="Tracker" img={trackerImg} />
                        <ButtonWithLink link="/leads" name="Leads" img={leadsImg} />
                        <ButtonWithLink link="/construction" name="Companies" img={companiesImg} />
                        <ButtonWithLink link="/review/1" name="Review" img={reviewImg} />
                    </div>
                </div>

                <div className="nav-list__settings">
                    <ButtonWithLink link="/construction" name="Help Center" img={helpCenterImg} />
                    <ButtonWithLink link="/settings/1" name="Settings" img={settingsImg} />
                    <ButtonWithLink
                        onClick={() => logout({ returnTo: window.location.origin })}
                        name="Log out"
                        img={logOutImg}
                    />
                </div>
            </div>
        )
    );
}

export default NavList;
