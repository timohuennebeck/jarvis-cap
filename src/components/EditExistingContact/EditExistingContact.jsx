import ButtonElement from "../ButtonElement/ButtonElement";
import InputFieldError from "../InputFieldError/InputFieldError";
import DropdownField from "../DropdownField/DropdownField";

import { getContactId, updateContact } from "../../utils/api";

import "./EditExistingContact.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import DeleteNotification from "../DeleteNotification/DeleteNotification";
import { deleteContact } from "../../utils/api";

export default function EditExistingContact() {
    const userValues = useRef();

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState([]);
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
        getContactId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
        });
    }, [id]);

    const uploadData = () => {
        const errors = [];

        if (!userValues.current.first_name.value) {
            errors.push("first_name");
        }

        if (!userValues.current.last_name.value) {
            errors.push("last_name");
        }

        if (!userValues.current.email.value) {
            errors.push("email");
        }

        setErrorMessage(errors);

        if (errors.length === 0) {
            updateContact({ id, userInput }).then(() => {
                setTimeout(() => navigate("/contacts"), 1500);
            });
        }
    };

    const handleDelete = (event) => {
        event.preventDefault();

        deleteContact({ id }).then(() => {
            openModal();
            setTimeout(() => navigate("/contacts"), 1500);
        });
    };

    if (!userInput) {
        return null;
    }

    return (
        <>
            <article className="edit-contacts">
                <div className="edit-contacts__links">
                    <ButtonElement
                        link="/contacts"
                        content="CANCEL..."
                        backgroundColor="#FFF"
                        fontColor="#000"
                    />
                    <div className="edit-contacts__links-spacing">
                        <ButtonElement onClick={uploadData} content="SAVE" backgroundColor="#000" />
                        <ButtonElement
                            onClick={handleDelete}
                            content="DELETE"
                            backgroundColor="#C71919"
                        />
                    </div>
                </div>
                <form className="edit-contacts__input" ref={userValues}>
                    <div className="edit-contacts__input-dropdown">
                        <DropdownField value={userInput.status} onChange={handleChange} />
                    </div>
                    <div className="edit-contacts__input-personal">
                        <InputFieldError
                            label="First Name"
                            placeholder="Insert First Name"
                            name="first_name"
                            value={userInput.first_name}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Last Name"
                            placeholder="Insert Last Name"
                            name="last_name"
                            value={userInput.last_name}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Position"
                            placeholder="Insert Position"
                            name="position"
                            value={userInput.position}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Email"
                            placeholder="Insert Email"
                            name="email"
                            value={userInput.email}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Phone"
                            placeholder="Insert Phone"
                            name="phone"
                            value={userInput.phone}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Image URL"
                            placeholder="Insert Image URL"
                            name="image_url"
                            value={userInput.image_url}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="LinkedIn"
                            placeholder="Insert LinkedIn URL"
                            name="linked_in_url"
                            value={userInput.linked_in}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                    </div>
                </form>
                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="edit-contacts__card-modal"
                    overlayClassName="edit-contacts__card-modal-background"
                >
                    <DeleteNotification selectedContact={userInput} />
                </ReactModal>
            </article>
        </>
    );
}
