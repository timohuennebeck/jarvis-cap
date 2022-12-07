import ButtonElement from "../ButtonElement/ButtonElement";
import InputFieldError from "../InputFieldError/InputFieldError";
import DropdownField from "../DropdownField/DropdownField";

import { getContactId, updateContact } from "../../utils/api";

import "./EditExistingContact.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenderDropdownField from "../GenderDropdownField/GenderDropdownField";
import ReactModal from "react-modal";
import DeleteNotificationContacts from "../DeleteNotificationContacts/DeleteNotificationContacts";
import DropdownRelationship from "../DropdownRelationship/DropdownRelationship";
import DropdownTarget from "../DropdownTarget/DropdownTarget";

export default function EditExistingContact() {
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

    console.log(userInput);

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

        const redirectUser = () => {
            navigate("/contacts");
        };

        if (errors.length === 0) {
            updateContact({ id, userInput }).then(() => {
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
                            onClick={openModal}
                            content="DELETE"
                            backgroundColor="#C71919"
                        />
                    </div>
                </div>
                {saveNotification && (
                    <p className="save-data-contacts">
                        Contact has been saved! Redirecting in 1s...
                    </p>
                )}
                {deleteMessage && (
                    <p className="save-data-contacts">
                        Contact has been deleted! Redirecting in 1s...
                    </p>
                )}
                <form className="edit-contacts__input" ref={userValues}>
                    <div className="edit-contacts__input-dropdown">
                        <DropdownField value={userInput.status} onChange={handleChange} />
                        <DropdownRelationship value={userInput.relationship} onChange={handleChange}/>
                        <DropdownTarget value={userInput.target} onChange={handleChange}/>
                    </div>
                    <div className="edit-contacts__input-personal">
                        <InputFieldError
                            label="First Name"
                            placeholder="First Name"
                            name="first_name"
                            value={userInput.first_name}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Last Name"
                            placeholder="Last Name"
                            name="last_name"
                            value={userInput.last_name}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Position"
                            placeholder="Position"
                            name="position"
                            value={userInput.position}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Email"
                            placeholder="Email"
                            name="email"
                            value={userInput.email}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Phone"
                            placeholder="Phone"
                            name="phone"
                            value={userInput.phone}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Image URL"
                            placeholder="Image URL"
                            name="image_url"
                            value={userInput.image_url}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="LinkedIn"
                            placeholder="LinkedIn"
                            name="linked_in"
                            value={userInput.linked_in}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                    </div>
                    <div className="edit-contacts__input-business">
                        <InputFieldError
                            label="Company"
                            placeholder="Company"
                            name="company"
                            value={userInput.company}
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
                            label="City"
                            placeholder="City"
                            name="city"
                            value={userInput.city}
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
                        <InputFieldError
                            label="Postcode"
                            placeholder="Postcode"
                            name="postcode"
                            value={userInput.postcode}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Country"
                            placeholder="Country"
                            name="country"
                            value={userInput.country}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Icebreaker"
                            placeholder="Icebreaker"
                            name="icebreaker"
                            value={userInput.icebreaker}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Paragraph 1"
                            placeholder="Paragraph 1"
                            name="paragraph_one"
                            value={userInput.paragraph_one}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Paragraph 2"
                            placeholder="Paragraph 2"
                            name="paragraph_two"
                            value={userInput.paragraph_two}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Paragraph 3"
                            placeholder="Paragraph 3"
                            name="paragraph_three"
                            value={userInput.paragraph_three}
                            onChange={handleChange}
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Call To Action"
                            placeholder="Call To Action"
                            name="call_to_action"
                            value={userInput.call_to_action}
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
                    <DeleteNotificationContacts
                        closeModal={closeModal}
                        selectedContact={userInput}
                        setDeleteMessage={setDeleteMessage}
                    />
                </ReactModal>
            </article>
        </>
    );
}
