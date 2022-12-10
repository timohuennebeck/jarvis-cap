import { useState } from "react";
import { useEffect } from "react";
import { getContactsFunnel } from "../../utils/contactsFunnelBackend";
import { useOutletContext } from "react-router-dom";
import "./DropdownField.scss";

export default function DropdownField({ value, onChange }) {
    const [currentUser] = useOutletContext();
    const [contactsFunnel, setContactsFunnel] = useState([]);

    useEffect(() => {
        getContactsFunnel().then(({ data }) => {
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
