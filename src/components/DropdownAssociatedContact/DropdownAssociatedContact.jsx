import "./DropdownAssociatedContact.scss";

export default function DropdownAssociatedContact({ value, onChange }) {
    return (
        <div className="assiocated-contact">
            <select
                className="associated-contact__indv"
                name="status"
                value={value}
                onChange={onChange}
            ></select>
        </div>
    );
}
