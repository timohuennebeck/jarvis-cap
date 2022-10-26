import "./TemplatesPage.scss";

// components
import TemplatePreview from "../../components/TemplatePreview/TemplatePreview";
import InputField from "../../components/InputField/InputField";
import ButtonElement from "../../components/ButtonElement/ButtonElement";

function TemplatesPage() {
    return (
        <article className="templates">
            <div className="templates__sec">
                <div className="templates__sec-url">
                    <h2>Your Google Docs URL</h2>
                    <p>
                        Might this be the next big thing? We don't know, but here is where it all
                        starts from...
                    </p>
                    <InputField placeholder="Insert URL" />
                    <div className="templates__sec-url-links">
                        <ButtonElement content="SAVE" backgroundColor="#000" />
                        <ButtonElement
                            content="OPEN FILE"
                            backgroundColor="#FFF"
                            fontColor="#000"
                        />
                    </div>
                </div>
                <TemplatePreview />
                <TemplatePreview />
                <TemplatePreview />
            </div>
        </article>
    );
}

export default TemplatesPage;
