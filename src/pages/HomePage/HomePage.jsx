import "./HomePage.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { useEffect } from "react";
import { getLeads, updateLead } from "../../utils/api";

export default function HomePage() {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        getLeads().then(({ data }) => {
            const columnsFromBackend = [
                {
                    name: "In Progress",
                    items: data.filter((person) => person.status === "In Progress"),
                },
                {
                    name: "CL Approved",
                    items: data.filter((person) => person.status === "CL Approved"),
                },
                {
                    name: "CL Declined",
                    items: data.filter((person) => person.status === "CL Declined"),
                },
                {
                    name: "Awaiting Response",
                    items: data.filter((person) => person.status === "Awaiting Response"),
                },
                {
                    name: "Interview Scheduled",
                    items: data.filter((person) => person.status === "Interview Scheduled"),
                },
                {
                    name: "Accepted",
                    items: data.filter((person) => person.status === "Accepted"),
                },
                {
                    name: "Rejected",
                    items: data.filter((person) => person.status === "Rejected"),
                },
            ];
            setColumns(columnsFromBackend);
        });
    }, []);

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
                                                                        <div className="home__kanban-container-content-indv-name">
                                                                            <p className="home__kanban-container-content-indv-name-business">
                                                                                {item.company}
                                                                            </p>
                                                                            <p className="home__kanban-container-content-indv-name-manager">
                                                                                {item.first_name}{" "}
                                                                                {item.last_name}
                                                                            </p>
                                                                        </div>
                                                                        <div className="home__kanban-container-content-indv-information">
                                                                            <img
                                                                                className="home__kanban-container-content-indv-information-img"
                                                                                src={item.image_url}
                                                                                alt="profile"
                                                                            />
                                                                            <p className="home__kanban-container-content-indv-information-paragraph">
                                                                                {new Date().toLocaleDateString()}
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
