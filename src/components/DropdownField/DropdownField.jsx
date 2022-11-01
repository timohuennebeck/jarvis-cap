import "./DropdownField.scss";

export default function DropdownField({ value, onChange }) {
    return (
        <div className="dropdown">
            <select className="dropdown-select" name="status" value={value} onChange={onChange}>
                <option value="In Progress">In Progress</option>
                <option value="Approved">Approved</option>
                <option value="Declined">Declined</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Done">Done</option>
            </select>
        </div>
    );
}
