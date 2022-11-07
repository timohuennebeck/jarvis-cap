import "./TemplatePreview.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import ExternalButton from "../ExternalButton/ExternalButton";

export default function TemplatePreview({ link, name }) {
    return (
        <div className="template-preview">
            <h2 className="template-preview__header">{name}</h2>
            <p className="template-preview__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco...
            </p>
            <div className="template-preview__button">
                <div className="template-preview__button-open-file">
                    <ExternalButton link={link} name="OPEN FILE" />
                </div>
            </div>
        </div>
    );
}
