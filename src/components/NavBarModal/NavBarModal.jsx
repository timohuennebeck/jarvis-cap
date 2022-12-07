import "./NavBarModal.scss";

import dashhboardImg from "../../assets/icons/collapse-alt.svg";
import trackerImg from "../../assets/icons/tasksvg.svg";
import contactsImg from "../../assets/icons/users.svg";
import companiesImg from "../../assets/icons/briefcase.svg";
import reviewImg from "../../assets/icons/eye.svg";

import ButtonWithLink from "../ButtonWithLink/ButtonWithLink";

export default function NavBarModal({ closeModal }) {
    return (
        <div className="nav-modal">
            <div className="nav-modal__links" onClick={closeModal}>
                <ButtonWithLink link="/construction" name="Dashboard" img={dashhboardImg} />
                <ButtonWithLink link="/tracker" name="Tracker" img={trackerImg} />
                <ButtonWithLink link="/contacts" name="Contacts" img={contactsImg} />
                <ButtonWithLink link="/construction" name="Companies" img={companiesImg} />
                <ButtonWithLink link="/review/1" name="Review" img={reviewImg} />
            </div>
        </div>
    );
}
