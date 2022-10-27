import "./DeleteNotification.scss";

import ButtonElement from "../ButtonElement/ButtonElement";

export default function DeleteNotification() {
    return (
        <div className="delete">
            <div className="delete__content">
                <h1 className="delete__content-header">Delete Melanie Perkins?</h1>
                <p className="delete__content-paragraph">
                    Please confirm that you’d like to delete Melanie Perkins from the list. You
                    won’t be able to undo this action.
                </p>
            </div>
            <div className="delete__links">
                <ButtonElement content="DELETE" backgroundColor="#E43A07" />
                <ButtonElement content="CANCEL" backgroundColor="#FFF" fontColor="#000" />
            </div>
        </div>
    );
}
