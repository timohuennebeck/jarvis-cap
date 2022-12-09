import "./AddNotification.scss";
import addImg from "../../assets/icons/plus-circle.svg";

export default function AddNotification({ selectedContact, selectedCompany }) {
    return (
        <div className="add">
            {<img src={addImg} alt="" />}
            {selectedContact ? (
                <>
                    {selectedContact.first_name} {selectedContact.last_name} has been added.
                </>
            ) : (
                <>{selectedCompany.name} has been added.</>
            )}
        </div>
    );
}
