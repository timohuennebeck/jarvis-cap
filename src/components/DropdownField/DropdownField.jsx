import "./DropdownField.scss";

export default function DropdownField({ value, onChange }) {
    return (
        <div className="dropdown">
            <select className="dropdown-select" name="status" value={value} onChange={onChange}>
                <option value="In Progress">In Progress</option>
                <option value="CL Approved">CL Approved</option>
                <option value="CL Declined">CL Declined</option>
                <option value="Awaiting Response">Awaiting Response</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
            </select>
        </div>
    );
}
