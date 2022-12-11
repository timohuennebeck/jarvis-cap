import "./UploadCompaniesFunnel.scss";

import { useEffect } from "react";
import { addNewCompanyFunnel, getCompaniesFunnel } from "../../utils/companiesFunnelBackend";
import { useRef } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import plusImg from "../../assets/icons/plus.svg";
import InputFieldFunnelCompanies from "../InputFieldFunnelCompanies/InputFieldFunnelCompanies";

export default function UploadCompaniesFunnel() {
    const [currentUser] = useOutletContext();
    const [funnelData, setFunnelData] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const [updateList, setUpdateList] = useState(false);

    const userValues = useRef();

    useEffect(() => {
        getCompaniesFunnel().then(({ data }) => {
            setFunnelData(data.filter((item) => item.users_id === currentUser.id));
        });
    }, [currentUser, updateList]);

    const handleSubmit = async () => {
        if (userValues.current.status.value.trim() === "") {
            setErrorMessage(!errorMessage);
            return;
        }

        const addInputData = {
            users_id: currentUser.id,
            status: userValues.current.status.value,
        };

        addNewCompanyFunnel({ addInputData }).then(() => {
            setUpdateList(!updateList);
        });

        userValues.current.status.value = "";
    };

    return (
        <form className="upload-contacts" ref={userValues}>
            <p className="upload-contacts__header">Funnel - Companies</p>
            <div className="upload-contacts__upload">
                <div className="upload-contacts__upload-input">
                    <label className="upload-contacts__upload-input-label">Funnel Name</label>
                    <input
                        className="upload-contacts__upload-input-border"
                        label="Funnel Name"
                        placeholder="Insert Your Funnel Name"
                        name="status"
                    />
                </div>
                <div className="upload-contacts__upload-button" onClick={handleSubmit}>
                    <img src={plusImg} alt="" />
                </div>
            </div>
            {!errorMessage && (
                <div className="error">
                    <p className="error__sign">!</p>
                    <p className="error__message">This field is required</p>
                </div>
            )}
            {funnelData.map((item) => {
                return (
                    <InputFieldFunnelCompanies
                        name={item.status}
                        value={item.status}
                        key={item.id}
                        id={item.id}
                        updateList={updateList}
                        setUpdateList={setUpdateList}
                    />
                );
            })}
        </form>
    );
}
