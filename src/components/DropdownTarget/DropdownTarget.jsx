import "./DropdownTarget.scss";

export default function DropdownTarget({ value, onChange }) {
    return (
        <div className="dropdown">
            <select
                className="dropdown-select"
                name="target"
                value={value}
                onChange={onChange}
            >
                <option value="Networking">Networking</option>
                <option value="Informational Interview">Informational Interview</option>
                <option value="Request Referral">Request Referral</option>
            </select>
        </div>
    );
}
