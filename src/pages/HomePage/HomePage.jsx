import "./HomePage.scss"
import LeadInformation from "../../components/LeadInformation/LeadInformation";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

function HomePage() {
    return (
        <>
            <article className="border-o">
                <div className="border-i">
                    <Button name="IMPORT LEADS" backgroundColor="#1C3F32"/>
                    <Button name="DELETE" backgroundColor="#E43A07"/>
                    <LeadInformation />
                    <InputField content="Search..."/>
                </div>
            </article>
        </>
    );
}

export default HomePage;
