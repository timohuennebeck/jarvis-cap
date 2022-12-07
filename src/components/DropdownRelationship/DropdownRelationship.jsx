import "./DropdownRelationship.scss";

export default function DropdownRelationship({ value, onChange }) {
    return (
        <div className="dropdown">
            <select className="dropdown-select" name="relationship" value={value} onChange={onChange}>
                <option value="Friend">Friend</option>
                <option value="Co-Worker">Co-Worker</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Hiring Manager">Hiring Manager</option>
                <option value="Alumni">Alumni</option>
                <option value="Mentor">Mentor</option>
            </select>
        </div>
    );
}
