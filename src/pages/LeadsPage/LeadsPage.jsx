import "./LeadsPage.scss";

// components
import LeadInformation from "../../components/LeadInformation/LeadInformation";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import DropdownField from "../../components/DropdownField/DropdownField";

// axios call
import { getLeads, getUsers } from "../../utils/api";

// libraries
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import { addNewLead } from "../../utils/api";
import { useRef } from "react";

export default function LeadsPage() {
    const [leads, setLeads] = useState([]);
    const [parsedData, setParsedData] = useState([]);
    const [updateMessage, setUpdateMessage] = useState(false);
    const [updateStatus, setUpdateStatus] = useState([]);
    const [filteredLeads, setFilteredLeads] = useState([]);

    const userValues = useRef();

    useEffect(() => {
        getLeads().then((resp) => {
            setLeads(resp.data);
        });
    }, [updateMessage]);

    useEffect(() => {
        getUsers().then((resp) => {
            setUpdateStatus(resp.data[0]);
        });
    }, []);

    const handleChange = (e) => {
        setUpdateStatus({ ...updateStatus, [e.target.name]: e.target.value });
    };

    const newLeads = leads.filter((person) => person.status === updateStatus.status);

    useEffect(() => {
        setFilteredLeads(newLeads);
    }, [updateStatus, updateMessage]);

    const resetMessage = () => {
        setUpdateMessage(false);
    };

    const handleSubmit = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setParsedData(results.data);
            },
        });
    };

    const uploadFile = () => {
        parsedData.map((person) => {
            const addInputData = {
                status: person.status,
                first_name: person.first_name,
                last_name: person.last_name,
                position: person.position,
                email: person.email,
                phone: person.phone,
                image_url: person.image_url,
                linked_in: person.linked_in,
                company: person.company,
                street_name: person.street_name,
                city: person.city,
                state: person.state,
                postcode: person.postcode,
                country: person.country,
                icebreaker: person.icebreaker,
                paragraph_one: person.paragraph_one,
                paragraph_two: person.paragraph_two,
                paragraph_three: person.paragraph_three,
                call_to_action: person.call_to_action,
            };
            addNewLead({ addInputData });
            setUpdateMessage(true);
            setTimeout(resetMessage, 1250);
        });
    };

    return (
        <>
            <form className="leads" ref={userValues}>
                <div className="leads__links">
                    <ButtonElement
                        link="/leads/add-new"
                        content="ADD LEAD"
                        backgroundColor="#FFF"
                        fontColor="#000"
                    />
                    <ButtonElement
                        onClick={uploadFile}
                        content="UPLOAD CSV"
                        backgroundColor="#000"
                    />
                    <input type="file" name="file" accept=".csv" onChange={handleSubmit} />
                </div>
                <div className="leads__dropdown">
                    <DropdownField value={updateStatus.status} onChange={handleChange} />
                    <p className="leads__dropdown-amount">
                        You are viewing {filteredLeads.length} Leads
                    </p>
                </div>
                {updateMessage && <p className="leads__update">Leads are being processed...</p>}
                <div className="leads__indv">
                    {filteredLeads.map((lead) => {
                        return (
                            <Link
                                to={`/leads/${lead.id}`}
                                className="leads__indv-link"
                                key={lead.id}
                            >
                                <LeadInformation lead={lead} />
                            </Link>
                        );
                    })}
                </div>
            </form>
        </>
    );
}
