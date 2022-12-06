import "./SettingsPage.scss";

import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import InputField from "../../components/InputField/InputField";

function SettingsPage() {
    const [currentUser] = useOutletContext();

    return (
        <article className="settings">
            <div className="settings__information">
                <h2 className="settings__information-header">Personal Information</h2>
                <p className="settings__information-content">
                    Here we are rendering the data from your connected account - which is either
                    Google or Facebook. If you'd like change the name or email address, you'll have
                    to do that in your actual account that's connected and it will then
                    automatically change it here.
                </p>
                <img
                    className="settings__information-img"
                    src={currentUser.image_url}
                    alt="profile"
                />
                <div className="settings__information-user">
                    <InputField
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={currentUser.email}
                    />
                    <div className="settings__information-user-input">
                        <InputField
                            label="First Name"
                            placeholder="First Name"
                            name="first_name"
                            value={currentUser.first_name}
                        />
                        <InputField
                            label="Last Name"
                            placeholder="Last Name"
                            name="last_name"
                            value={currentUser.last_name}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default SettingsPage;
