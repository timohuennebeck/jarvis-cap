import { useState } from "react";
import { useEffect } from "react";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import InputField from "../../components/InputField/InputField";
import ReactModal from "react-modal";
import DeleteNotificationUsers from "../../components/DeleteNotificationUsers/DeleteNotificationUsers";

import { getUserId, updateUser } from "../../utils/api";
import { useParams } from "react-router-dom";

import "./SettingsPage.scss";

function SettingsPage() {
    const [userInput, setUserInput] = useState(null);
    const [notification, setNotification] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const { id } = useParams();

    // making api calls

    useEffect(() => {
        getUserId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
        });
    }, [id]);

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    const uploadData = () => {
        updateUser({ id, userInput });
        setNotification(true);
    };

    if (!userInput) {
        return <p>Loading...</p>;
    }

    return (
        <article className="settings">
            <div className="settings__information">
                <h2 className="settings__information-header">Personal Information</h2>
                <p className="settings__information-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum
                    dolor sit amet...
                </p>
                <img
                    className="settings__information-img"
                    src={userInput.image_url}
                    alt="profile"
                />
                <div className="settings__information-input">
                    <InputField
                        label="First Name"
                        placeholder="First Name"
                        name="first_name"
                        value={userInput.first_name}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Last Name"
                        placeholder="Last Name"
                        name="last_name"
                        value={userInput.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="settings__link">
                    <ButtonElement
                        content="SAVE SETTINGS"
                        backgroundColor="#000000"
                        onClick={uploadData}
                    />
                </div>
                {notification && <p className="save-data-settings">Data has been saved!</p>}
            </div>
            <div className="settings__information">
                <h2 className="settings__information-header">Address Information</h2>
                <p className="settings__information-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum
                    dolor sit amet...
                </p>
                <div className="settings__information-input">
                    <InputField
                        label="Street Name"
                        placeholder="Street Name"
                        name="street_name"
                        value={userInput.street_name}
                        onChange={handleChange}
                    />
                    <InputField
                        label="State"
                        placeholder="State"
                        name="state"
                        value={userInput.state}
                        onChange={handleChange}
                    />
                </div>
                <div className="settings__information-input">
                    <InputField
                        label="City"
                        placeholder="City"
                        name="city"
                        value={userInput.city}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Postcode"
                        placeholder="Postcode"
                        name="postcode"
                        value={userInput.postcode}
                        onChange={handleChange}
                    />
                </div>
                <div className="settings__link">
                    <ButtonElement
                        content="SAVE SETTINGS"
                        backgroundColor="#000000"
                        onClick={uploadData}
                    />
                </div>
                {notification && <p className="save-data-settings">Data has been saved!</p>}
            </div>
            <div className="settings__delete">
                <h2 className="settings__delete-header">Delete Personal Account</h2>
                <p className="settings__delete-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum
                    dolor sit amet...
                </p>
                <div className="settings__link">
                    <ButtonElement
                        content="DELETE ACCOUNT"
                        backgroundColor="#E43A07"
                        onClick={openModal}
                    />
                </div>
                {deleteMessage && (
                    <p className="save-data-settings">
                        User has been deleted! Redirecting in 1s...
                    </p>
                )}
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="edit-leads__card-modal"
                overlayClassName="edit-leads__card-modal-background"
            >
                <DeleteNotificationUsers
                    closeModal={closeModal}
                    selectedLead={userInput}
                    setDeleteMessage={setDeleteMessage}
                />
            </ReactModal>
        </article>
    );
}

export default SettingsPage;
