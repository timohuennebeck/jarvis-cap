import ButtonElement from "../../components/ButtonElement/ButtonElement";
import "./EditorPage.scss";

function EditorPage() {
    return (
        <article className="editor">
            <div className="editor__sec">
                <div className="editor__sec-content">
                    <p>{`{{date}}`}</p>
                    <br />
                    <p>{`{{firstName}} {{lastName}}`}</p>
                    <p>{`{{businessName}}`}</p>
                    <p>{`{{streetAddress}}`}</p>
                    <p>{`{{postCode}}`}</p>
                    <br />
                    <p>{`Dear {{firstName}},`}</p>
                    <p>{`{{icebreaker}}`}</p>
                    <br />
                    <p>{`{{paragraphOne}}`}</p>
                    <br />
                    <p>{`{{paragraphOne}}`}</p>
                    <br />
                    <p>{`{{paragraphOne}}`}</p>
                    <br />
                    <p>{`{{paragraphOne}}`}</p>
                    <br />
                    <p>{`{{signOff}}`}</p>
                    <br />
                    <p>Best regards,</p>
                    <p>{`{{firstName}} {{lastName}}`}</p>
                </div>
                <div className="editor__sec-link">
                    <ButtonElement
                        content="SAVE"
                        link=""
                        fontColor="#FFFFFF"
                        backgroundColor="#000000"
                    />
                    <ButtonElement
                        content="REVIEW"
                        link=""
                        fontColor="#000000"
                        backgroundColor="#FFFFFF"
                    />
                </div>
            </div>
        </article>
    );
}

export default EditorPage;
