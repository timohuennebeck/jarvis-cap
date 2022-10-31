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

export default function LeadsPage() {
    const [leads, setLeads] = useState([]);

    const [modelIsOpen, setIsOpen] = useState(false);

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
                    <ButtonElement content="IMPORT LEADS" backgroundColor="#000000" />
                    <ButtonElement content="DELETE" backgroundColor="#E43A07" onClick={openModal} />
                </div>
                <div className="leads__indv">
                    {leads.map((lead) => {
                        return <LeadInformation lead={lead} />;
                    })}
                </div>
                <ReactModal isOpen={modelIsOpen} onRequestClose={closeModal}>
                    <DeleteNotification closeModal={closeModal} />
                </ReactModal>
            </article>
        </>
    );
}
