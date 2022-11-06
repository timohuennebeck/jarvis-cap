import "./TemplatesPage.scss";

// components
import TemplatePreview from "../../components/TemplatePreview/TemplatePreview";
import InputField from "../../components/InputField/InputField";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserId } from "../../utils/api";
import { useState } from "react";
import { useRef } from "react";
import { updateUser } from "../../utils/api";
import ExternalButton from "../../components/ExternalButton/ExternalButton";

function TemplatesPage() {
    const userValues = useRef();

    const [userInput, setUserInput] = useState([]);
    const [saveNotification, setSaveNotification] = useState(false);

    const { id } = useParams();

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getUserId({ id }).then((resp) => {
            setUserInput(resp.data[0]);
        });
    }, [id]);

    const uploadData = () => {
        updateUser({ id, userInput }).then(() => {
            setSaveNotification(true);
        });
    };

    return (
        <article className="templates">
            <form className="templates__url" ref={userValues}>
                <h2>Your Google Docs URL</h2>
                <p>
                    Might this be the next big thing? We don't know, but here is where it all starts
                    from...
                </p>
                <InputField
                    placeholder="Insert URL"
                    name="google_url"
                    value={userInput.google_url}
                    onChange={handleChange}
                />
                {saveNotification && <p>New URL has been saved!</p>}
                <div className="templates__url-links">
                    <ButtonElement content="SAVE" backgroundColor="#000" onClick={uploadData} />
                    <div className="templates__url-links-open-file">
                        <ExternalButton link={userInput.google_url} name="OPEN FILE" />
                    </div>
                </div>
            </form>
            <TemplatePreview
                link="https://docs.google.com/document/d/1pg3id6wxlmV65hVNb3uzYMbYVaPki1c8593KcpNIKcw"
                name="Template #1"
            />
            <TemplatePreview
                link="https://docs.google.com/document/d/1J3TK7yN2TntBzd9oUfXsTq1V4IRsr1713nh-uvqHKTQ"
                name="Template #2"
            />
        </article>
    );
}

export default TemplatesPage;
