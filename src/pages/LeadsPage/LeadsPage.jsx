import "./LeadsPage.scss";

import UploadImg from "../../assets/images/upload.svg";

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
                    <ButtonElement
                        link="/leads/add-new"
                        content="ADD LEAD"
                        backgroundColor="#FFF"
                        fontColor="#000"
                    />
                    <ButtonElement content="DELETE" backgroundColor="#E43A07" onClick={openModal} />
                    <form className="leads__links-upload">
                        <input type="file" name="import-csv" accept="csv" />
                        <input type="submit" value="Import Leads" />
                    </form>
                </div>
                <div className="leads__indv">
                    {leads.map((lead) => {
                        return (
                            <Link to={`/leads/${lead.id}`} className="leads__indv-link">
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
