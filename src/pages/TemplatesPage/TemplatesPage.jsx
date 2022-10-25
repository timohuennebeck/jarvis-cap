import TemplatePreview from "../../components/TemplatePreview/TemplatePreview";
import "./TemplatesPage.scss";

function TemplatesPage() {
    return (
        <article className="templates">
            <div className="templates__sec">
                <TemplatePreview />
                <TemplatePreview />
                <TemplatePreview />
            </div>
        </article>
    );
}

export default TemplatesPage;
