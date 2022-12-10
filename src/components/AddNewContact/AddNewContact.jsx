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
            linked_in: userValues.current.linked_in.value,
            company: userValues.current.company.value,
            street_name: userValues.current.street_name.value,
            city: userValues.current.city.value,
            state: userValues.current.state.value,
            postcode: userValues.current.postcode.value,
            country: userValues.current.country.value,
            icebreaker: userValues.current.icebreaker.value,
            paragraph_one: userValues.current.paragraph_one.value,
            paragraph_two: userValues.current.paragraph_two.value,
            paragraph_three: userValues.current.paragraph_three.value,
            call_to_action: userValues.current.call_to_action.value,
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
                            placeholder="First Name"
                            name="first_name"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Last Name"
                            placeholder="Last Name"
                            name="last_name"
                            errorMessage={errorMessage}
                        />

                        <InputFieldError
                            label="Position"
                            placeholder="Position"
                            name="position"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Email"
                            placeholder="Email"
                            name="email"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Phone"
                            placeholder="Phone"
                            name="phone"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Image URL"
                            placeholder="Image URL"
                            name="image_url"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="LinkedIn"
                            placeholder="LinkedIn"
                            name="linked_in"
                            errorMessage={errorMessage}
                        />
                    </div>
                    <div className="edit-contacts__input-business">
                        <InputFieldError
                            label="Company"
                            placeholder="Company"
                            name="company"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Street Name"
                            placeholder="Street Name"
                            name="street_name"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="City"
                            placeholder="City"
                            name="city"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="State"
                            placeholder="State"
                            name="state"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Postcode"
                            placeholder="Postcode"
                            name="postcode"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Country"
                            placeholder="Country"
                            name="country"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Icebreaker"
                            placeholder="Icebreaker"
                            name="icebreaker"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Paragraph 1"
                            placeholder="Paragraph 1"
                            name="paragraph_one"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Paragraph 2"
                            placeholder="Paragraph 2"
                            name="paragraph_two"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Paragraph 3"
                            placeholder="Paragraph 3"
                            name="paragraph_three"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Call To Action"
                            placeholder="Call To Action"
                            name="call_to_action"
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
