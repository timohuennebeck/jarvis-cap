import LeadsPage from "../../pages/LeadsPage/LeadsPage";
import ButtonElement from "../ButtonElement/ButtonElement";
import InputField from "../InputField/InputField";

import { getLeadId } from "../../utils/api";

import "./EditLeadInformation.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EditLeadInformation() {
    const [userInput, setUserInput] = useState(null);

    const { id } = useParams();

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getLeadId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
        });
    }, []);

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
                        <ButtonElement content="SAVE" backgroundColor="#000" />
                        <ButtonElement content="DELETE" backgroundColor="#E43A07" />
                    </div>
                </div>
                <div className="edit-leads__input">
                    <div className="edit-leads__input-personal">
                        <InputField
                            label="First Name"
                            placeholder="First Name"
                            value={userInput.first_name}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Last Name"
                            placeholder="Last Name"
                            value={userInput.last_name}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Position"
                            placeholder="Position"
                            value={userInput.position}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email"
                            placeholder="Email"
                            value={userInput.email}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Phone"
                            placeholder="Phone"
                            value={userInput.phone}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Image URL"
                            placeholder="Image URL"
                            value={userInput.image_url}
                            onChange={handleChange}
                        />
                        <InputField
                            label="LinkedIn"
                            placeholder="LinkedIn"
                            value={userInput.linked_in}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="edit-leads__input-business">
                        <InputField
                            label="Business Name"
                            placeholder="Business Name"
                            value={userInput.business_name}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Street"
                            placeholder="Street"
                            value={userInput.street}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Postcode"
                            placeholder="Postcode"
                            value={userInput.postcode}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Icebreaker"
                            placeholder="Icebreaker"
                            value={userInput.icebreaker}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Paragraph 1"
                            placeholder="Paragraph 1"
                            value={userInput.paragraph_one}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Paragraph 2"
                            placeholder="Paragraph 2"
                            value={userInput.paragraph_two}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Paragraph 3"
                            placeholder="Paragraph 3"
                            value={userInput.paragraph_three}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Call To Action"
                            placeholder="Call To Action"
                            value={userInput.call_to_action}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </article>
        </>
    );
}
