import "./DropdownField.scss";

export default function DropdownField({ value, onChange }) {
    return (
        <div className="dropdown">
            <select className="dropdown-select" name="status" value={value} onChange={onChange}>
                <option value="To Be Contacted">To Be Contacted</option>
                <option value="LinkedIn CR Accepted">LinkedIn CR Accepted</option>
                <option value="Awaiting Response">Awaiting Response</option>
                <option value="Followed Up [Pre-Conversation]">Followed Up [Pre-Conversation]</option>
                <option value="Coffee Conversation Scheduled">Coffee Conversation Scheduled</option>
                <option value="Followed Up [Post-Conversation]">Followed Up [Post-Conversation]</option>
            </select>
        </div>
    );
}
