import { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./DropdownFieldCompanies.scss";
import { getCompaniesFunnel } from "../../utils/companiesFunnelBackend";

export default function DropdownFieldCompanies({ value, onChange }) {
    const [currentUser] = useOutletContext();
    const [contactsFunnel, setContactsFunnel] = useState([]);

    useEffect(() => {
        getCompaniesFunnel().then(({ data }) => {
            setContactsFunnel(data.filter((item) => item.users_id === currentUser.id));
        });
    }, [currentUser]);

    return (
        <div className="dropdown">
            <select className="dropdown-select" name="status" value={value} onChange={onChange}>
                {contactsFunnel.map((item) => {
                    return (
                        <option key={item.id} value={item.status}>
                            {item.status}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
