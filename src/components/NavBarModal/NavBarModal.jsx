import "./NavBarModal.scss";

import ButtonWithLink from "../ButtonWithLink/ButtonWithLink";

import leadsImg from "../../assets/icons/users.svg"

export default function NavBarModal({closeModal}) {
    return <div className="nav-modal">
        <p onClick={closeModal}>Close</p>
        <ButtonWithLink name="Leads" img={leadsImg}/>
    </div>;
}
