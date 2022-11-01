import ButtonElement from "../ButtonElement/ButtonElement";
import InputField from "../InputField/InputField";
import DropdownField from "../DropdownField/DropdownField";

import { getLeadId, updateLead, deleteLead } from "../../utils/api";

import "./EditExistingLead.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditExistingLead() {
    const [userInput, setUserInput] = useState(null);
    const [saveNotification, setSaveNotification] = useState(false);
    const [deleteNotification, setDeleteNotification] = useState(false);

    console.log(userInput);

    const navigate = useNavigate();

    const { id } = useParams();

    // updating the data inside an input field

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    // making api calls

    useEffect(() => {
        getLeadId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
        });
    }, []);

    const redirectUser = () => {
        navigate("/leads");
    };

    const uploadData = () => {
        updateLead({ id, userInput }).then(() => {
            setSaveNotification(true);
            setTimeout(redirectUser, 2000);
        });
    };

    const deleteData = () => {
        deleteLead({ id }).then(() => {
            setDeleteNotification(true);
            setTimeout(redirectUser, 2000);
        });
    };

    if (!userInput) {
        return <p>Loading...</p>;
    }

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
                        <ButtonElement onClick={uploadData} content="SAVE" backgroundColor="#000" />
                        <ButtonElement
                            onClick={deleteData}
                            content="DELETE"
                            backgroundColor="#E43A07"
                        />
                    </div>
                </div>
                {saveNotification && (
                    <p className="save-data-leads">Lead has been saved! Redirecting in 2s...</p>
                )}
                {deleteNotification && (
                    <p className="save-data-leads">Lead has been deleted! Redirecting in 2s...</p>
                )}
                <form className="edit-leads__input">
                    <DropdownField value={userInput.status} onChange={handleChange} />
                    <div className="edit-leads__input-personal">
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
                        <InputField
                            label="Position"
                            placeholder="Position"
                            name="position"
                            value={userInput.position}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email"
                            placeholder="Email"
                            name="email"
                            value={userInput.email}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Phone"
                            placeholder="Phone"
                            name="phone"
                            value={userInput.phone}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Image URL"
                            placeholder="Image URL"
                            name="image_url"
                            value={userInput.image_url}
                            onChange={handleChange}
                        />
                        <InputField
                            label="LinkedIn"
                            placeholder="LinkedIn"
                            name="linked_in"
                            value={userInput.linked_in}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="edit-leads__input-business">
                        <InputField
                            label="Business Name"
                            placeholder="Business Name"
                            name="business_name"
                            value={userInput.business_name}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Street"
                            placeholder="Street"
                            name="street_name"
                            value={userInput.street_name}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Postcode"
                            placeholder="Postcode"
                            name="postcode"
                            value={userInput.postcode}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Icebreaker"
                            placeholder="Icebreaker"
                            name="icebreaker"
                            value={userInput.icebreaker}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Paragraph 1"
                            placeholder="Paragraph 1"
                            name="paragraph_one"
                            value={userInput.paragraph_one}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Paragraph 2"
                            placeholder="Paragraph 2"
                            name="paragraph_two"
                            value={userInput.paragraph_two}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Paragraph 3"
                            placeholder="Paragraph 3"
                            name="paragraph_three"
                            value={userInput.paragraph_three}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Call To Action"
                            placeholder="Call To Action"
                            name="call_to_action"
                            value={userInput.call_to_action}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </article>
        </>
    );
}
