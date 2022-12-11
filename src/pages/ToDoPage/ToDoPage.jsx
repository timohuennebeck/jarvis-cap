import "./ToDoPage.scss";

import { useEffect } from "react";
import { addNewCompanyFunnel, getCompaniesFunnel } from "../../utils/companiesFunnelBackend";
import { useRef } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import plusImg from "../../assets/icons/plus.svg";
import ToDoElement from "../../components/ToDoElement/ToDoElement";

export default function ToDoPage() {
    const [currentUser] = useOutletContext();
    const [toDoData, setToDoData] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const [updateList, setUpdateList] = useState(false);

    const userValues = useRef();

    useEffect(() => {
        getCompaniesFunnel().then(({ data }) => {
            setToDoData(data.filter((item) => item.users_id === currentUser.id));
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
            <div className="upload-contacts__upload">
                <div className="upload-contacts__upload-input">
                    <label className="upload-contacts__upload-input-label">+ New Task</label>
                    <input
                        className="upload-contacts__upload-input-border"
                        label="+ New Task"
                        placeholder="Insert Task Name"
                        name="status"
                    />
                </div>
                <div className="upload-contacts__upload-button" onClick={handleSubmit}>
                    <img src={plusImg} alt="" />
                </div>
            </div>
            {toDoData.map((item) => {
                return (
                    <ToDoElement
                        name={item.status}
                        value={item.status}
                        key={item.id}
                        id={item.id}
                        updateList={updateList}
                        setUpdateList={setUpdateList}
                    />
                );
            })}
            {!errorMessage && (
                <div className="error">
                    <p className="error__sign">!</p>
                    <p className="error__message">This field is required</p>
                </div>
            )}
        </form>
    );
}
