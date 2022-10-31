import LeadsPage from "../../pages/LeadsPage/LeadsPage";
import ButtonElement from "../ButtonElement/ButtonElement";
import InputField from "../InputField/InputField";
import "./EditLeadInformation.scss";

export default function EditLeadInformation() {
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
                        <InputField label="First Name" placeholder="First Name" />
                        <InputField label="Last Name" placeholder="Last Name" />
                        <InputField label="Position" placeholder="Position" />
                        <InputField label="Email" placeholder="Email" />
                        <InputField label="Phone" placeholder="Phone" />
                        <InputField label="Image URL" placeholder="Image URL" />
                        <InputField label="LinkedIn" placeholder="LinkedIn" />
                    </div>
                    <div className="edit-leads__input-business">
                        <InputField label="Business Name" placeholder="Business Name" />
                        <InputField label="Street" placeholder="Street" />
                        <InputField label="Postcode" placeholder="Postcode" />
                        <InputField label="Icebreaker" placeholder="Icebreaker" />
                        <InputField label="Paragraph 1" placeholder="Paragraph 1" />
                        <InputField label="Paragraph 2" placeholder="Paragraph 2" />
                        <InputField label="Paragraph 3" placeholder="Paragraph 3" />
                        <InputField label="Call To Action" placeholder="Call To Action" />
                    </div>
                </div>
            </article>
        </>
    );
}
