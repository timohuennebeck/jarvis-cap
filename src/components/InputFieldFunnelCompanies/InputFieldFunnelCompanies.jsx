import "./InputFieldFunnelCompanies.scss";
import minusImg from "../../assets/icons/minus.svg";
import { deleteCompanyFunnel } from "../../utils/companiesFunnelBackend";

export default function InputFieldFunnelCompanies({
    id,
    name,
    value,
    onChange,
    updateList,
    setUpdateList,
}) {
    const deleteFunnel = async () => {
        console.log(id);
        deleteCompanyFunnel({ id }).then(() => {
            setUpdateList(!updateList);
        });
    };

    return (
        <>
            <div className="input-funnel">
                <div className="input-funnel__input">
                    <input
                        className="input-funnel__input-name"
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </div>
                <div className="input-funnel__delete" onClick={deleteFunnel}>
                    <img src={minusImg} alt="" />
                </div>
            </div>
        </>
    );
}
