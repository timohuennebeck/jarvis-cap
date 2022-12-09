import "./DeleteNotification.scss";
import deleteImg from "../../assets/icons/x-circle.svg";

export default function DeleteNotification({ selectedContact, selectedCompany }) {
    return (
        <div className="delete">
            {<img src={deleteImg} alt="" />}
            {selectedContact ? (
                <>
                    {selectedContact.first_name} {selectedContact.last_name} has been deleted.
                </>
            ) : (
                <>{selectedCompany.name} has been deleted.</>
            )}
        </div>
    );
}
