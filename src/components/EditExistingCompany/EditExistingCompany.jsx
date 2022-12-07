import ButtonElement from "../ButtonElement/ButtonElement";
import InputFieldError from "../InputFieldError/InputFieldError";
import DropdownFieldCompanies from "../DropdownFieldCompanies/DropdownFieldCompanies";

import { getCompanyId, getContacts, updateCompany } from "../../utils/api";

import "./EditExistingCompany.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import DeleteNotificationCompanies from "../DeleteNotificationCompanies/DeleteNotificationCompanies";
import DropdownAssociatedContact from "../DropdownAssociatedContact/DropdownAssociatedContact";

export default function EditExistingCompany() {
    const userValues = useRef();

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState([]);
    const [saveNotification, setSaveNotification] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const { id } = useParams();

    // updating the data inside an input field

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    // making api calls

    useEffect(() => {
        getCompanyId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
        });
    }, [id]);

    const uploadData = () => {
        const errors = [];

        if (!userValues.current.name.value) {
            errors.push("name");
        }

        if (!userValues.current.posting_url.value) {
            errors.push("posting_url");
        }

        setErrorMessage(errors);

        const redirectUser = () => {
            navigate("/companies");
        };

        if (errors.length === 0) {
            updateCompany({ id, userInput }).then(() => {
                setSaveNotification(true);
                setTimeout(redirectUser, 1000);
            });
        }
    };

    if (!userInput) {
        return null;
    }

    return (
        <>
            <article className="edit-company">
                <div className="edit-company__links">
                    <ButtonElement
                        link="/companies"
                        content="CANCEL..."
                        backgroundColor="#FFF"
                        fontColor="#000"
                    />
                    <div className="edit-company__links-spacing">
                        <ButtonElement onClick={uploadData} content="SAVE" backgroundColor="#000" />
                        <ButtonElement
                            onClick={openModal}
                            content="DELETE"
                            backgroundColor="#C71919"
                        />
                    </div>
                </div>
                {saveNotification && (
                    <p className="save-data-company">
                        Company has been saved! Redirecting in 1s...
                    </p>
                )}
                {deleteMessage && (
                    <p className="save-data-company">
                        Company has been deleted! Redirecting in 1s...
                    </p>
                )}
                <form className="edit-company__input" ref={userValues}>
                    <div className="edit-company__input-dropdown">
                        <DropdownFieldCompanies value={userInput.status} onChange={handleChange} />
                    </div>
                    <div className="edit-contacts__input-personal">
                        <InputFieldError
                            label="Name"
                            placeholder="Name"
                            name="name"
                            value={userInput.name}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Position To Fill"
                            placeholder="Position To Fill"
                            name="position_to_fill"
                            value={userInput.position_to_fill}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Posting URL"
                            placeholder="Posting URL"
                            name="posting_url"
                            value={userInput.posting_url}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Location"
                            placeholder="Location"
                            name="location"
                            value={userInput.location}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Postcode"
                            placeholder="Postcode"
                            name="postcode"
                            value={userInput.postcode}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Street Name"
                            placeholder="Street Name"
                            name="street_name"
                            value={userInput.street_name}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="State"
                            placeholder="State"
                            name="state"
                            value={userInput.state}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                    </div>
                </form>
                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="edit-company__card-modal"
                    overlayClassName="edit-company__card-modal-background"
                >
                    <DeleteNotificationCompanies
                        closeModal={closeModal}
                        selectedContact={userInput}
                        setDeleteMessage={setDeleteMessage}
                    />
                </ReactModal>
            </article>
        </>
    );
}
