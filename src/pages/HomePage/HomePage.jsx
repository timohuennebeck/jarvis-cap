import "./HomePage.scss";

import LeadInformation from "../../components/LeadInformation/LeadInformation";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

function HomePage() {
    return (
        <>
            <article className="homepage">
                <div className="homepage__sec">
                    <InputField content="Search Leads..." />
                    <div className="homepage__sec-btn">
                        <Button
                            content="IMPORT LEADS"
                            backgroundColor="#1C3F32"
                        />
                        <Button content="DELETE" backgroundColor="#E43A07" />
                    </div>
                    <div className="homepage__sec-leads">
                        <LeadInformation />
                    </div>
                </div>
            </article>
        </>
    );
}

export default HomePage;
