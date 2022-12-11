import "./ToDoPage.scss";

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import plusImg from "../../assets/icons/plus.svg";
import ToDoElement from "../../components/ToDoElement/ToDoElement";
import ReactModal from "react-modal";
import { addNewToDo, getToDos } from "../../utils/toDosBackend";
import AddNotification from "../../components/AddNotification/AddNotification";

export default function ToDoPage() {
    const [currentUser] = useOutletContext();
    const [toDoData, setToDoData] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userInput, setUserInput] = useState([]);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const userValues = useRef();

    useEffect(() => {
        getToDos().then(({ data }) => {
            setToDoData(data.filter((item) => item.users_id === currentUser.id));
        });
    }, [currentUser, updateList]);

    const handleSubmit = async () => {
        if (userValues.current.name.value.trim() === "") {
            setErrorMessage(!errorMessage);
            return;
        }

        const addInputData = {
            users_id: currentUser.id,
            name: userValues.current.name.value,
        };

        setUserInput(addInputData);

        addNewToDo({ addInputData }).then(() => {
            setUpdateList(!updateList);
            openModal();
            setTimeout(() => closeModal(), 1500);
        });

        userValues.current.name.value = "";
    };

    return (
        <>
            <form className="upload-contacts" ref={userValues}>
                <div className="upload-contacts__upload">
                    <div className="upload-contacts__upload-input">
                        <label className="upload-contacts__upload-input-label">+ New Task</label>
                        <input
                            className="upload-contacts__upload-input-border"
                            label="+ New Task"
                            placeholder="Insert Task Name"
                            name="name"
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
                {toDoData.map((item) => {
                    return (
                        <ToDoElement
                            name={item.name}
                            value={item.name}
                            key={item.id}
                            id={item.id}
                            updateList={updateList}
                            setUpdateList={setUpdateList}
                        />
                    );
                })}
            </form>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="edit-company__card-modal"
                overlayClassName="edit-company__card-modal-background"
            >
                <AddNotification selectedToDo={userInput} />
            </ReactModal>
        </>
    );
}
