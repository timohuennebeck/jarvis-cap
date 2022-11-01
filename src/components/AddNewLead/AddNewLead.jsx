import ButtonElement from "../ButtonElement/ButtonElement";
import InputField from "../InputField/InputField";
import { useRef, useState } from "react";
import { addNewLead } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function AddNewLead() {
    const [notification, setNotification] = useState(false);

    const navigate = useNavigate();

    const redirectUser = () => {
        navigate("/leads");
    };

    const userValues = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const first_name = userValues.current.first_name.value;
        const last_name = userValues.current.last_name.value;
        const position = userValues.current.position.value;
        const email = userValues.current.email.value;
        const phone = userValues.current.phone.value;
        const image_url = userValues.current.image_url.value;
        const linked_in = userValues.current.linked_in.value;
        const business_name = userValues.current.business_name.value;
        const postcode = userValues.current.postcode.value;
        const icebreaker = userValues.current.icebreaker.value;
        const paragraph_one = userValues.current.paragraph_one.value;
        const paragraph_two = userValues.current.paragraph_two.value;
        const paragraph_three = userValues.current.paragraph_three.value;
        const call_to_action = userValues.current.call_to_action.value;

        const addInputData = {
            first_name,
            last_name,
            position,
            email,
            phone,
            image_url,
            linked_in,
            business_name,
            postcode,
            icebreaker,
            paragraph_one,
            paragraph_two,
            paragraph_three,
            call_to_action,
        };

        addNewLead({ addInputData }).then(() => {
            setNotification(true);
            setTimeout(redirectUser, 2000);
        });
    };

    return (
        <>
            <article className="edit-leads">
                <div className="edit-leads__links">
                    <ButtonElement
                        link="/leads"
                        content="CANCEL..."
                        backgroundColor="#FFF"
                        fontColor="#000"
                    />
                    <div className="edit-leads__links-spacing">
                        <ButtonElement
                            content="SAVE"
                            backgroundColor="#000"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
                {notification && (
                    <p className="save-data-leads">Lead has been added! Redirecting in 2s...</p>
                )}
                <form className="edit-leads__input" ref={userValues}>
                    <div className="edit-leads__input-personal">
                        <InputField label="First Name" placeholder="First Name" name="first_name" />
                        <InputField label="Last Name" placeholder="Last Name" name="last_name" />
                        <InputField label="Position" placeholder="Position" name="position" />
                        <InputField label="Email" placeholder="Email" name="email" />
                        <InputField label="Phone" placeholder="Phone" name="phone" />
                        <InputField label="Image URL" placeholder="Image URL" name="image_url" />
                        <InputField label="LinkedIn" placeholder="LinkedIn" name="linked_in" />
                    </div>
                    <div className="edit-leads__input-business">
                        <InputField
                            label="Business Name"
                            placeholder="Business Name"
                            name="business_name"
                        />
                        <InputField label="Street" placeholder="Street" name="street_name" />
                        <InputField label="Postcode" placeholder="Postcode" name="postcode" />
                        <InputField label="Icebreaker" placeholder="Icebreaker" name="icebreaker" />
                        <InputField
                            label="Paragraph 1"
                            placeholder="Paragraph 1"
                            name="paragraph_one"
                        />
                        <InputField
                            label="Paragraph 2"
                            placeholder="Paragraph 2"
                            name="paragraph_two"
                        />
                        <InputField
                            label="Paragraph 3"
                            placeholder="Paragraph 3"
                            name="paragraph_three"
                        />
                        <InputField
                            label="Call To Action"
                            placeholder="Call To Action"
                            name="call_to_action"
                        />
                    </div>
                </form>
            </article>
        </>
    );
}
