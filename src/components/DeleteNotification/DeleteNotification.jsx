import "./DeleteNotification.scss";

// components
import ButtonElement from "../ButtonElement/ButtonElement";

// libraries
import { Navigate, useNavigate } from "react-router-dom";

export default function DeleteNotification({ closeModal }) {
    const navigate = useNavigate();

    const handleDelete = (event) => {
        event.preventDefault();
        // do axios delete call here...
        navigate("/leads");
        closeModal();
    };

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
                <ButtonElement content="DELETE" backgroundColor="#E43A07" onClick={handleDelete} />
                <ButtonElement
                    content="CANCEL"
                    backgroundColor="#FFF"
                    fontColor="#000"
                    onClick={closeModal}
                />
            </div>
        </div>
    );
}
