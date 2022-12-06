import ButtonElement from "../ButtonElement/ButtonElement";
import InputFieldError from "../InputFieldError/InputFieldError";
import DropdownFieldCompanies from "../DropdownFieldCompanies/DropdownFieldCompanies";
import { useRef, useState } from "react";
import { addNewCompany } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function AddNewCompany() {
    const userValues = useRef();

    const [notification, setNotification] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);

    const navigate = useNavigate();

    const redirectUser = () => {
        navigate("/companies");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const status = userValues.current.status.value;
        const name = userValues.current.name.value;
        const location = userValues.current.location.value;
        const position = userValues.current.position.value;
        const posting_url = userValues.current.posting_url.value;
        const resume = userValues.current.resume.value;
        const cover_letter = userValues.current.cover_letter.value;

        const addInputData = {
            status,
            name,
            location,
            position,
            posting_url,
            resume,
            cover_letter,
        };

        const errors = [];

        if (!userValues.current.name.value) {
            errors.push("name");
        }

        setErrorMessage(errors);

        if (errors.length === 0) {
            addNewCompany({ addInputData }).then(() => {
                setNotification(true);
                setTimeout(redirectUser, 1000);
            });
        }
    };

    return (
        <>
            <article className="edit-leads">
                <div className="edit-leads__links">
                    <ButtonElement
                        link="/companies"
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
                    <p className="save-data-leads">Company has been added! Redirecting in 1s...</p>
                )}
                <form className="edit-leads__input" ref={userValues}>
                    <div className="edit-leads__input-dropdown">
                        <DropdownFieldCompanies />
                    </div>
                    <div className="edit-leads__input-personal">
                        <InputFieldError
                            label="Name"
                            placeholder="Name"
                            name="name"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Location"
                            placeholder="Location"
                            name="location"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Position"
                            placeholder="Position"
                            name="position"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Posting URL"
                            placeholder="Posting URL"
                            name="posting_url"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Resume"
                            placeholder="Resume"
                            name="resume"
                            errorMessage={errorMessage}
                        />
                        <InputFieldError
                            label="Cover Letter"
                            placeholder="Cover Letter"
                            name="cover_letter"
                            errorMessage={errorMessage}
                        />
                    </div>
                </form>
            </article>
        </>
    );
}
