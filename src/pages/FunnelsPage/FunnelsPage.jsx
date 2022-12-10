import UploadCompaniesFunnel from "../../components/UploadCompaniesFunnel/UploadCompaniesFunnel";
import UploadContactsFunnel from "../../components/UploadContactsFunnel/UploadContactsFunnel";
import "./FunnelsPage.scss";

export default function FunnelsPage() {
    return (
        <div className="funnels">
            <UploadContactsFunnel />
            <UploadCompaniesFunnel />
        </div>
    );
}
