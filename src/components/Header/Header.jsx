import "./Header.scss";

import { useState } from "react";
import { useEffect } from "react";
import { getUsers } from "../../utils/api";

import Menu from "../../assets/images/menu-icon.png";
import NavBarModal from "../NavBarModal/NavBarModal";

import ReactModal from "react-modal";

export default function Header() {
    const [userData, setUserData] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        getUsers().then((resp) => {
            setUserData(resp.data[0]);
        });
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <article className="nav">
                <div className="nav__sec">
                    <div className="nav__menu-toggle" onClick={openModal}>
                        <img className="nav__menu-toggle-img" src={Menu} alt="" />
                    </div>
                </div>
                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="nav__card-modal"
                    overlayClassName="nav__card-modal-background"
                >
                    <NavBarModal closeModal={closeModal} />
                </ReactModal>
            </article>
        </>
    );
}
