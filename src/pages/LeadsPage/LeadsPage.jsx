import "./LeadsPage.scss";

import LeadInformation from "../../components/LeadInformation/LeadInformation";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

function LeadsPage() {
    return (
        <>
            <article className="leads">
                <div className="leads__sec">
                    <InputField content="Search Leads..." />
                    <div className="leads__sec-btn">
                        <Button content="IMPORT LEADS" backgroundColor="#1C3F32" />
                        <Button content="DELETE" backgroundColor="#E43A07" />
                    </div>
                    <div className="leads__sec-indv">
                        <LeadInformation />
                    </div>
                </div>
            </article>
        </>
    );
}

export default LeadsPage;
