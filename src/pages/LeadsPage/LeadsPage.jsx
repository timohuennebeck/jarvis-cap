import "./LeadsPage.scss";

// components
import LeadInformation from "../../components/LeadInformation/LeadInformation";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import DeleteNotification from "../../components/DeleteNotification/DeleteNotification";

// libraries
import ReactModal from "react-modal";
import { useState } from "react";

export default function LeadsPage() {
    const [modelIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <article className="leads">
                <div className="leads__links">
                    <ButtonElement content="IMPORT LEADS" backgroundColor="#000000" />
                    <ButtonElement content="DELETE" backgroundColor="#E43A07" onClick={openModal} />
                </div>
                <div className="leads__indv">
                    <LeadInformation />
                    <LeadInformation />
                    <LeadInformation />
                    <LeadInformation />
                    <LeadInformation />
                    <LeadInformation />
                    <LeadInformation />
                    <LeadInformation />
                </div>
                <ReactModal isOpen={modelIsOpen} onRequestClose={closeModal}>
                    <DeleteNotification closeModal={closeModal} />
                </ReactModal>
            </article>
        </>
    );
}
