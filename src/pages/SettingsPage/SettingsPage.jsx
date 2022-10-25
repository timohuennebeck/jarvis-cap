import ButtonElement from "../../components/ButtonElement/ButtonElement";
import InputField from "../../components/InputField/InputField";

import "./SettingsPage.scss";

function SettingsPage() {
    return (
        <article className="settings">
            <div className="settings__sec">
                <div className="settings__sec-information">
                    <h5>Personal Information</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        Lorem ipsum dolor sit amet...
                    </p>
                    <InputField content="Full Name" />
                    <InputField content="Last Name" />
                    <ButtonElement content="SAVE SETTINGS" backgroundColor="#000000" />
                </div>
                <div className="settings__sec-delete">
                    <h5>DELETE MY ACCOUNT</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        Lorem ipsum dolor sit amet...
                    </p>
                    <ButtonElement content="DELETE ACCOUNT" backgroundColor="#000000" />
                </div>
            </div>
        </article>
    );
}

export default SettingsPage;
