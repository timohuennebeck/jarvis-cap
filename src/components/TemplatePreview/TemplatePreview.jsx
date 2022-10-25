import "./TemplatePreview.scss";

import ButtonElement from "../ButtonElement/ButtonElement";

export default function TemplatePreview() {
    return (
        <div className="template-preview">
            <h2 className="template-preview__header">Template #1</h2>
            <p className="template-preview__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco...
            </p>
            <div className="template-preview__button">
                <ButtonElement content="USE TEMPLATE" backgroundColor="#000000" />
            </div>
        </div>
    );
}
