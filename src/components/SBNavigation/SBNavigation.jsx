import "./SBNavigation.scss";

// components
import { useAuth0 } from "@auth0/auth0-react";

import ButtonWithLink from "../ButtonWithLink/ButtonWithLink";
import dashhboardImg from "../../assets/icons/collapse-alt.svg";
import trackerImg from "../../assets/icons/tasksvg.svg";
import contactsImg from "../../assets/icons/users.svg";
import companiesImg from "../../assets/icons/briefcase.svg";
import reviewImg from "../../assets/icons/eye.svg";
import funnelsImg from "../../assets/icons/grid.svg";
import helpCenterImg from "../../assets/icons/bell.svg";
import settingsImg from "../../assets/icons/cog.svg";
import logOutImg from "../../assets/icons/lock-alt.svg";

export default function SBNavigation() {
    const { user } = useAuth0();

    const { logout } = useAuth0();

    return (
        <div className="nav-list">
            <div className="nav-list__ctn">
                <div className="nav-list__ctn-user">
                    <img className="nav-list__ctn-user-img" src={user.picture} alt="" />
                    <p className="nav-list__ctn-user-text">Hello, {user.given_name}!</p>
                </div>
                <div className="nav-list__ctn-main">
                    <ButtonWithLink link="/" name="Dashboard" img={dashhboardImg} />
                    <ButtonWithLink link="/todo" name="To-Do" img={trackerImg} />
                    <ButtonWithLink link="/contacts" name="Contacts" img={contactsImg} />
                    <ButtonWithLink link="/companies" name="Companies" img={companiesImg} />
                    {/* <ButtonWithLink link="/review/1" name="Review" img={reviewImg} /> */}
                    <ButtonWithLink link="/funnels" name="Funnels" img={funnelsImg} />
                </div>
            </div>

            <div className="nav-list__settings">
                <ButtonWithLink link="/help-center" name="Help Center" img={helpCenterImg} />
                <ButtonWithLink link="/settings" name="Settings" img={settingsImg} />
                <ButtonWithLink
                    onClick={() => logout({ returnTo: window.location.origin })}
                    name="Log out"
                    img={logOutImg}
                />
            </div>
        </div>
    );
}
