import "./LeadsPage.scss";

// components
import LeadInformation from "../../components/LeadInformation/LeadInformation";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import DeleteNotification from "../../components/DeleteNotification/DeleteNotification";

// axios call
import { getLeads } from "../../utils/api";

// libraries
import ReactModal from "react-modal";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import { addNewLead } from "../../utils/api";

export default function LeadsPage() {
    const [leads, setLeads] = useState([]);
    const [parsedData, setParsedData] = useState([]);

    const [modelIsOpen, setIsOpen] = useState(false);

    const handleSubmit = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setParsedData(results.data);
            },
        });
    };

    useEffect(() => {
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
                business_name: person.business_name,
                postcode: person.postcode,
                icebreaker: person.icebreaker,
                paragraph_one: person.paragraph_one,
                paragraph_two: person.paragraph_two,
                paragraph_three: person.paragraph_three,
                call_to_action: person.call_to_action,
            };
            addNewLead({ addInputData });
        });
    }, [parsedData]);

    // useEffect(() => {
    //     const addInputData = parsedData.map((person) => ({
    //         status: person.status,
    //         first_name: person.first_name,
    //         last_name: person.last_name,
    //         position: person.position,
    //         email: person.email,
    //         phone: person.phone,
    //         image_url: person.image_url,
    //         linked_in: person.linked_in,
    //         business_name: person.business_name,
    //         postcode: person.postcode,
    //         icebreaker: person.icebreaker,
    //         paragraph_one: person.paragraph_one,
    //         paragraph_two: person.paragraph_two,
    //         paragraph_three: person.paragraph_three,
    //         call_to_action: person.call_to_action,
    //     }));
    // }, [parsedData]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        getLeads().then((resp) => {
            setLeads(resp.data);
        });
    }, []);

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
                    <ButtonElement content="DELETE" backgroundColor="#E43A07" onClick={openModal} />
                    <input type="file" name="file" accept=".csv" onChange={handleSubmit} />
                </div>
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
                <ReactModal isOpen={modelIsOpen} onRequestClose={closeModal}>
                    <DeleteNotification closeModal={closeModal} />
                </ReactModal>
            </article>
        </>
    );
}
