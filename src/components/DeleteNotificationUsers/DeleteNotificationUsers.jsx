import "./DeleteNotificationUsers.scss";

// components
import ButtonElement from "../ButtonElement/ButtonElement";
import { deleteUser } from "../../utils/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// libraries

export default function DeleteNotification({ closeModal, selectedContact, setDeleteMessage }) {
    const { id } = useParams();

    const navigate = useNavigate();

    const redirectUser = () => {
        navigate("/register");
    };

    const handleDelete = (event) => {
        event.preventDefault();

        deleteUser({ id }).then(() => {
            setDeleteMessage(true);
            setTimeout(redirectUser, 1000);
        });
        closeModal();
    };

    return (
        <div className="delete">
            <div className="delete__content">
                <h1 className="delete__content-header">
                    Delete {selectedContact.first_name} {selectedContact.last_name}?
                </h1>
                <p className="delete__content-paragraph">
                    Please confirm that you’d like to delete {selectedContact.first_name}{" "}
                    {selectedContact.last_name} from the list. You won’t be able to undo this action.
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
