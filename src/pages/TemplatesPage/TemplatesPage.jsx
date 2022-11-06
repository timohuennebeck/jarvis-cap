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
                        <ButtonElement
                            content="OPEN FILE"
                            backgroundColor="#FFF"
                            fontColor="#000"
                        />
                    </div>
                </div>
            </form>
            <TemplatePreview />
            <TemplatePreview />
            <TemplatePreview />
        </article>
    );
}

export default TemplatesPage;
