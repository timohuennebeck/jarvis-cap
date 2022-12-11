import "./ToDoElement.scss";
import minusImg from "../../assets/icons/minus.svg";
import { deleteToDo } from "../../utils/toDosBackend";

export default function ToDoElement({ id, name, value, onChange, updateList, setUpdateList }) {
    const deleteToDoElement = async () => {
        deleteToDo({ id }).then(() => {
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
                <div className="input-funnel__delete" onClick={deleteToDoElement}>
                    <img src={minusImg} alt="" />
                </div>
            </div>
        </>
    );
}
