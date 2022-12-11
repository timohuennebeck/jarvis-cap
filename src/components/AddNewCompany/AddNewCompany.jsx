import ButtonElement from "../ButtonElement/ButtonElement";
import InputFieldError from "../InputFieldError/InputFieldError";
import DropdownFieldCompanies from "../DropdownFieldCompanies/DropdownFieldCompanies";
import { useRef, useState } from "react";
import { addNewCompany } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ReactModal from "react-modal";
import AddNotification from "../AddNotification/AddNotification";

export default function AddNewCompany() {
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

        const status = userValues.current.status.value;
        const name = userValues.current.name.value;
        const position_to_fill = userValues.current.position_to_fill.value;
        const posting_url = userValues.current.posting_url.value;
        const location = userValues.current.location.value;
        const postcode = userValues.current.postcode.value;
        const street_name = userValues.current.street_name.value;
        const state = userValues.current.state.value;

        const addInputData = {
            users_id: currentUser.id,
            status,
            name,
            position_to_fill,
            posting_url,
            location,
            postcode,
            street_name,
            state,
        };

        setUserInput(addInputData);

        const errors = [];

        if (!userValues.current.name.value) {
            errors.push("name");
        }

        if (!userValues.current.posting_url.value) {
            errors.push("posting_url");
        }

        setErrorMessage(errors);

        if (errors.length === 0) {
            addNewCompany({ addInputData }).then(() => {
                openModal();
                setTimeout(() => navigate("/companies"), 1500);
            });
        }
    };

    return (
        <>
            <article className="edit-contacts">
                <div className="edit-contacts__links">
                    <ButtonElement
                        link="/companies"
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
                        <DropdownFieldCompanies />
                    </div>
                    <div className="edit-contacts__input-personal">
                        <InputFieldError
                            label="Name"
                            placeholder="Insert Name"
                            name="name"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Position To Fill"
                            placeholder="Insert Position To Fill"
                            name="position_to_fill"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Posting URL"
                            placeholder="Insert Posting URL"
                            name="posting_url"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Location"
                            placeholder="Insert Location"
                            name="location"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Postcode"
                            placeholder="Insert Postcode"
                            name="postcode"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Street Name"
                            placeholder="Insert Street Name"
                            name="street_name"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="State"
                            placeholder="Insert State"
                            name="state"
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
                <AddNotification selectedCompany={userInput} />
            </ReactModal>
        </>
    );
}
