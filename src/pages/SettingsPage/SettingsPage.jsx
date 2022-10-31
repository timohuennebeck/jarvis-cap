import { useState } from "react";
import { useEffect } from "react";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import InputField from "../../components/InputField/InputField";

import { getUsers } from "../../utils/api";

import "./SettingsPage.scss";

function SettingsPage() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsers().then((resp) => {
            setUser(resp.data[0]);
        });
    });

    return (
        <article className="settings">
            <div className="settings__information">
                <h2 className="settings__information-header">Personal Information</h2>
                <p className="settings__information-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum
                    dolor sit amet...
                </p>
                <div className="settings__information-input">
                    <div className="settings__information-input-indv">
                        <InputField
                            label="First Name"
                            placeholder="First Name"
                            value={user.first_name}
                        />
                    </div>
                    <div className="settings__information-input-indv">
                        <InputField
                            label="Last Name"
                            placeholder="Last Name"
                            value={user.last_name}
                        />
                    </div>
                </div>
                <div className="settings__link">
                    <ButtonElement content="SAVE SETTINGS" backgroundColor="#000000" />
                </div>
            </div>
            <div className="settings__delete">
                <h2 className="settings__delete-header">Delete Personal Account</h2>
                <p className="settings__delete-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum
                    dolor sit amet...
                </p>
                <div className="settings__link">
                    <ButtonElement content="DELETE ACCOUNT" backgroundColor="#E43A07" />
                </div>
            </div>
        </article>
    );
}

export default SettingsPage;
