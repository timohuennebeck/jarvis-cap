import "./HomePage.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { useEffect } from "react";
import { getLeads, updateLead } from "../../utils/api";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
    const [currentUser] = useOutletContext();
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        getLeads().then(({ data }) => {
            const columnsFromBackend = [
                {
                    name: "In Progress",
                    items: data.filter(
                        (person) =>
                            person.status === "In Progress" && person.users_id === currentUser.id
                    ),
                },
                {
                    name: "CL Approved",
                    items: data.filter(
                        (person) =>
                            person.status === "CL Approved" && person.users_id === currentUser.id
                    ),
                },
                {
                    name: "CL Declined",
                    items: data.filter(
                        (person) =>
                            person.status === "CL Declined" && person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Awaiting Response",
                    items: data.filter(
                        (person) =>
                            person.status === "Awaiting Response" &&
                            person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Interview Scheduled",
                    items: data.filter(
                        (person) =>
                            person.status === "Interview Scheduled" &&
                            person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Accepted",
                    items: data.filter(
                        (person) =>
                            person.status === "Accepted" && person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Rejected",
                    items: data.filter(
                        (person) =>
                            person.status === "Rejected" && person.users_id === currentUser.id
                    ),
                },
            ];
            setColumns(columnsFromBackend);
        });
    }, [currentUser]);

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
            const id = result.draggableId;
            updateLead({ id, userInput: { status: destColumn.name } });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };

    return (
        <div className="home">
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([id, columnn]) => {
                    return (
                        <div className="home__kanban" key={id}>
                            <div className="home__kanban-header">
                                <p className="home__kanban-header-indv">{columnn.name}</p>
                            </div>
                            <div className="home__kanban-container">
                                <Droppable droppableId={id} key={id}>
                                    {(provided) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                className="home__kanban-container-content"
                                            >
                                                {columnn.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id.toString()}
                                                            index={index}
                                                        >
                                                            {(provided) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="home__kanban-container-content-indv"
                                                                    >
                                                                        <Link
                                                                            to={`/leads/${item.id}`}
                                                                            className="home__kanban-container-content-indv-name"
                                                                        >
                                                                            <p className="home__kanban-container-content-indv-name-business">
                                                                                {item.company}
                                                                            </p>
                                                                            <p className="home__kanban-container-content-indv-name-manager">
                                                                                {item.first_name}{" "}
                                                                                {item.last_name}
                                                                            </p>
                                                                        </Link>
                                                                        <div className="home__kanban-container-content-indv-information">
                                                                            <img
                                                                                className="home__kanban-container-content-indv-information-img"
                                                                                src={item.image_url}
                                                                                alt="profile"
                                                                            />
                                                                            <p className="home__kanban-container-content-indv-information-paragraph">
                                                                                {new Date(
                                                                                    item.updated_at
                                                                                ).toDateString()}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}
