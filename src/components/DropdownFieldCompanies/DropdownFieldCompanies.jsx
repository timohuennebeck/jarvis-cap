import "./DropdownFieldCompanies.scss";

export default function DropdownFieldCompanies({ value, onChange }) {
    return (
        <div className="dropdown">
            <select className="dropdown-select" name="status" value={value} onChange={onChange}>
                <option value="Preparing">Preparing</option>
                <option value="Messaged Recruiter">Messaged Recruiter</option>
                <option value="VC Conversation Scheduled">VC Conversation Scheduled</option>
                <option value="Preparing Documents">Preparing Documents</option>
                <option value="Handed In Documents">Handed In Documents</option>
                <option value="Followed Up [Pre-Interview]">Followed Up [Pre-Interview]</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Interview Finished">Interview Finished</option>
                <option value="Followed Up [Post-Interview]">Followed Up [Post-Interview]</option>
                <option value="Negotiating">Negotiating</option>
                <option value="Rejected">Rejected</option>
            </select>
        </div>
    );
}
