import "./ReviewTextPage.scss";

import ButtonElement from "../../components/ButtonElement/ButtonElement";

export default function ReviewTextPage() {
    return (
        <div className="review-container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam.
                Interdum varius sit amet mattis. Mauris commodo quis imperdiet massa tincidunt nunc
                pulvinar sapien et. Ut faucibus pulvinar elementum integer enim neque. In nulla
                posuere sollicitudin aliquam ultrices sagittis. Lacus sed turpis tincidunt id
                aliquet risus feugiat...
            </p>
            <div className="review-container__links">
                <ButtonElement content="APPROVE" backgroundColor="#000000" />
                <ButtonElement content="APPROVE" backgroundColor="#E43A07" />
                <ButtonElement content="APPROVE" backgroundColor="#FFFFFF" fontColor="#000000" />
            </div>
        </div>
    );
}
