import "./GenderDropdownField.scss";

export default function GenderDropdownField({ value, onChange }) {
    return (
        <div className="dropdown">
            <select className="dropdown-select" name="his_or_her" value={value} onChange={onChange}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
        </div>
    );
}
