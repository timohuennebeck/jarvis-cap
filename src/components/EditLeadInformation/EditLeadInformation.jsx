import ButtonElement from "../ButtonElement/ButtonElement";
import InputField from "../InputField/InputField";
import "./EditLeadInformation.scss";

export default function EditLeadInformation() {
    return (
        <>
            <article className="edit-leads">
                <div className="edit-leads__links">
                    <ButtonElement content="CANCEL..." backgroundColor="#FFF" fontColor="#000" />
                    <div className="edit-leads__links-spacing">
                        <ButtonElement content="SAVE" backgroundColor="#000" />
                        <ButtonElement content="DELETE" backgroundColor="#E43A07" />
                    </div>
                </div>
                <div className="edit-leads__input">
                    <div className="edit_leads__input-personal">
                        <InputField placeholder="First Name" />
                        <InputField placeholder="Last Name" />
                        <InputField placeholder="Position" />
                        <InputField placeholder="Email" />
                        <InputField placeholder="Phone" />
                        <InputField placeholder="Image URL" />
                        <InputField placeholder="LinkedIn" />
                    </div>
                    <div className="edit_leads__input-business">
                        <InputField placeholder="Business Name" />
                        <InputField placeholder="Street" />
                        <InputField placeholder="Postcode" />
                        <InputField placeholder="Icebreaker" />
                        <InputField placeholder="Paragraph 1" />
                        <InputField placeholder="Paragraph 2" />
                        <InputField placeholder="Paragraph 3" />
                        <InputField placeholder="Call To Action" />
                    </div>
                </div>
            </article>
        </>
    );
}
