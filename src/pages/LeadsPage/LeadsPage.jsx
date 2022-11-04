import "./LeadsPage.scss";

// components
import LeadInformation from "../../components/LeadInformation/LeadInformation";
import ButtonElement from "../../components/ButtonElement/ButtonElement";

// axios call
import { getLeads } from "../../utils/api";

// libraries
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import { addNewLead } from "../../utils/api";

export default function LeadsPage() {
    const [leads, setLeads] = useState([]);
    const [parsedData, setParsedData] = useState([]);
    const [updateLeads, setUpdateLeads] = useState(false);

    const resetMessage = () => {
        setUpdateLeads(false);
    };

    useEffect(() => {
        getLeads().then((resp) => {
            setLeads(resp.data);
        });
    }, [updateLeads]);

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
            setUpdateLeads(true);
            setTimeout(resetMessage, 2500);
        });
    };

    return (
        <>
            <article className="leads">
                <div className="leads__links">
                    <ButtonElement
                        link="/leads/add-new"
                        content="ADD LEAD"
                        backgroundColor="#FFF"
                        fontColor="#000"
                    />
                    <ButtonElement
                        onClick={uploadFile}
                        content="Upload CSV"
                        backgroundColor="#000"
                    />
                    <input type="file" name="file" accept=".csv" onChange={handleSubmit} />
                </div>
                {updateLeads && <p className="leads__update">Leads have been uploaded!</p>}
                <div className="leads__indv">
                    {leads.map((lead) => {
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
            </article>
        </>
    );
}
