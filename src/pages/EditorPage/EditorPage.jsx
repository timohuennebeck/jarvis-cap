import Button from "../../components/Button/Button";
import "./EditorPage.scss";

function EditorPage() {
    return (
        <article className="editor">
            <div className="editor__sec">
                <div className="editor__sec-content">
                    <p>{`{{fullName}}`}</p>
                    <p>{`{{address}}`}</p>
                    <p>{`{{businessName}}`}</p>
                    <br />
                    <p>I'm looking forward to receiving a positive response.</p>
                    <br />
                    <p>Timo Huennebeck</p>
                </div>
                <div className="editor__sec-btn">
                    <Button
                        content="VARIABLES"
                        backgroundColor="#FAF6F1"
                        fontColor="black"
                    />
                    <Button content="REVIEW" backgroundColor="#1C3F32" />
                </div>
            </div>
        </article>
    );
}

export default EditorPage;
