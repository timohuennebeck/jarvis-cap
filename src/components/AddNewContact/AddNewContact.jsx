import ButtonElement from "../ButtonElement/ButtonElement";
import InputFieldError from "../InputFieldError/InputFieldError";
import DropdownField from "../DropdownField/DropdownField";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ReactModal from "react-modal";
import AddNotification from "../AddNotification/AddNotification";
import { addNewContact } from "../../utils/api";

export default function AddNewContact() {
    const userValues = useRef();

    const [currentUser] = useOutletContext();
    const [userInput, setUserInput] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const addInputData = {
            users_id: currentUser.id,
            status: userValues.current.status.value,
            first_name: userValues.current.first_name.value,
            last_name: userValues.current.last_name.value,
            position: userValues.current.position.value,
            email: userValues.current.email.value,
            phone: userValues.current.phone.value,
            linked_in_url: userValues.current.linked_in_url.value,
        };

        setUserInput(addInputData);

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
            addNewContact({ addInputData }).then(() => {
                openModal();
                setTimeout(() => navigate("/contacts"), 1500);
            });
        }
    };

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
                        <ButtonElement
                            content="SAVE"
                            backgroundColor="#000"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
                <form className="edit-contacts__input" ref={userValues}>
                    <div className="edit-contacts__input-dropdown">
                        <DropdownField />
                    </div>
                    <div className="edit-contacts__input-personal">
                        <InputFieldError
                            label="First Name"
                            placeholder="Insert First Name"
                            name="first_name"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Last Name"
                            placeholder="Insert Last Name"
                            name="last_name"
                            errorMessage={errorMessage}
                        />

                        <InputFieldError
                            label="Position"
                            placeholder="Insert Position"
                            name="position"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Email"
                            placeholder="Insert Email"
                            name="email"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Phone"
                            placeholder="Insert Phone"
                            name="phone"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Image URL"
                            placeholder="Insert Image URL"
                            name="image_url"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="LinkedIn"
                            placeholder="Insert LinkedIn"
                            name="linked_in_url"
                            errorMessage={errorMessage}
                        />
                    </div>
                </form>
            </article>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="edit-company__card-modal"
                overlayClassName="edit-company__card-modal-background"
            >
                <AddNotification selectedContact={userInput} />
            </ReactModal>
        </>
    );
}
