import { useState } from "react";
import { useEffect } from "react";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import InputField from "../../components/InputField/InputField";

import { deleteUser, getUserId, updateUser } from "../../utils/api";
import { useParams } from "react-router-dom";

import "./SettingsPage.scss";

function SettingsPage() {
    const [userInput, setUserInput] = useState(null);
    const [notification, setNotification] = useState(false);

    const { id } = useParams();

    // updating the data inside an input field

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    // making api calls

    useEffect(() => {
        getUserId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
        });
    }, []);

    const uploadData = () => {
        updateUser({ id, userInput });
        setNotification(true);
    };

    const deleteData = () => {
        deleteUser({ id });
    };

    if (!userInput) {
        return <p>Loading...</p>;
    }

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
                            name="first_name"
                            value={userInput.first_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="settings__information-input-indv">
                        <InputField
                            label="Last Name"
                            placeholder="Last Name"
                            name="last_name"
                            value={userInput.last_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="settings__link">
                    <ButtonElement
                        content="SAVE SETTINGS"
                        backgroundColor="#000000"
                        onClick={uploadData}
                    />
                </div>
                {notification && <p className="save-data-settings">Data has been saved!</p>}
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
                    <ButtonElement
                        content="DELETE ACCOUNT"
                        backgroundColor="#E43A07"
                        onClick={deleteData}
                    />
                </div>
            </div>
        </article>
    );
}

export default SettingsPage;
