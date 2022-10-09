import "./HomePage.scss"
import LeadInformation from "../../components/LeadInformation/LeadInformation";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import NavList from "../../components/NavList/NavList";

function HomePage() {
    return (
        <>
            <article className="border-o">
                <div className="border-i">
                    <Button content="IMPORT LEADS" backgroundColor="#1C3F32"/>
                    <Button content="DELETE" backgroundColor="#E43A07"/>
                    <LeadInformation />
                    <InputField content="Search..."/>
                    <NavList />
                </div>
            </article>
        </>
    );
}

export default HomePage;
