import "./LeadsPage.scss";

import LeadInformation from "../../components/LeadInformation/LeadInformation";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import InputField from "../../components/InputField/InputField";

export default function LeadsPage() {
    return (
        <>
            <article className="leads">
                <div className="leads__sec">
                    <div className="leads__sec-btn">
                        <ButtonElement content="IMPORT LEADS" backgroundColor="#000000" />
                        <ButtonElement content="DELETE" backgroundColor="#E43A07" />
                    </div>
                    <div className="leads__sec-indv">
                        <LeadInformation />
                        <LeadInformation />
                        <LeadInformation />
                        <LeadInformation />
                        <LeadInformation />
                        <LeadInformation />
                        <LeadInformation />
                        <LeadInformation />
                    </div>
                </div>
            </article>
        </>
    );
}
