import ButtonElement from "../ButtonElement/ButtonElement";
import InputFieldError from "../InputFieldError/InputFieldError";
import DropdownField from "../DropdownField/DropdownField";
import { useRef, useState } from "react";
import { addNewContact } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import GenderDropdownField from "../GenderDropdownField/GenderDropdownField";
import { useOutletContext } from "react-router-dom";
import DropdownRelationship from "../DropdownRelationship/DropdownRelationship";
import DropdownTarget from "../DropdownTarget/DropdownTarget";

export default function AddNewContact() {
    const userValues = useRef();

    const [currentUser] = useOutletContext();
    const [notification, setNotification] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);

    const navigate = useNavigate();

    const redirectUser = () => {
        navigate("/contacts");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const status = userValues.current.status.value;
        const relationship = userValues.current.relationship.value;
        const target = userValues.current.target.value;
        const first_name = userValues.current.first_name.value;
        const last_name = userValues.current.last_name.value;
        const position = userValues.current.position.value;
        const email = userValues.current.email.value;
        const phone = userValues.current.phone.value;
        const linked_in = userValues.current.linked_in.value;
        const company = userValues.current.company.value;
        const street_name = userValues.current.street_name.value;
        const city = userValues.current.city.value;
        const state = userValues.current.state.value;
        const postcode = userValues.current.postcode.value;
        const country = userValues.current.country.value;
        const icebreaker = userValues.current.icebreaker.value;
        const paragraph_one = userValues.current.paragraph_one.value;
        const paragraph_two = userValues.current.paragraph_two.value;
        const paragraph_three = userValues.current.paragraph_three.value;
        const call_to_action = userValues.current.call_to_action.value;

        const addInputData = {
            users_id: currentUser.id,
            status,
            relationship,
            target,
            first_name,
            last_name,
            position,
            email,
            phone,
            linked_in,
            company,
            street_name,
            city,
            state,
            postcode,
            country,
            icebreaker,
            paragraph_one,
            paragraph_two,
            paragraph_three,
            call_to_action,
        };

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
                setNotification(true);
                setTimeout(redirectUser, 1000);
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
                {notification && (
                    <p className="save-data-contacts">
                        Contact has been added! Redirecting in 1s...
                    </p>
                )}
                <form className="edit-contacts__input" ref={userValues}>
                    <div className="edit-contacts__input-dropdown">
                        <DropdownField />
                        <DropdownRelationship />
                        <DropdownTarget />
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
        </>
    );
}
