import "./KanbanCompaniesPage.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { useEffect } from "react";
import { getCompanies, updateCompany, updateContact } from "../../utils/api";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function KanbanCompaniesPage() {
    const [currentUser] = useOutletContext();
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        getCompanies().then(({ data }) => {
            const columnsFromBackend = [
                {
                    name: "Preparing",
                    items: data.filter(
                        (person) =>
                            person.status === "Preparing" && person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Messaged Recruiter",
                    items: data.filter(
                        (person) =>
                            person.status === "Messaged Recruiter" &&
                            person.users_id === currentUser.id
                    ),
                },
                {
                    name: "VC Conversation Scheduled",
                    items: data.filter(
                        (person) =>
                            person.status === "VC Conversation Scheduled" &&
                            person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Preparing Documents",
                    items: data.filter(
                        (person) =>
                            person.status === "Preparing Documents" &&
                            person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Followed Up [Pre-Interview]",
                    items: data.filter(
                        (person) =>
                            person.status === "Followed Up [Pre-Interview]" &&
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
                    name: "Interview Finished",
                    items: data.filter(
                        (person) =>
                            person.status === "Interview Finished" &&
                            person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Followed Up [Post-Interview]",
                    items: data.filter(
                        (person) =>
                            person.status === "Followed Up [Post-Interview]" &&
                            person.users_id === currentUser.id
                    ),
                },
                {
                    name: "Negotiating",
                    items: data.filter(
                        (person) =>
                            person.status === "Negotiating" && person.users_id === currentUser.id
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
            updateCompany({ id, userInput: { status: destColumn.name } });
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
        <div className="companies-board">
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([id, columnn]) => {
                    return (
                        <div className="companies-board__kanban" key={id}>
                            <div className="companies-board__kanban-header">
                                <p className="companies-board__kanban-header-indv">
                                    {columnn.name}
                                </p>
                            </div>
                            <div className="companies-board__kanban-container">
                                <Droppable droppableId={id} key={id}>
                                    {(provided) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                className="companies-board__kanban-container-content"
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
                                                                        className="companies-board__kanban-container-content-indv"
                                                                    >
                                                                        <Link
                                                                            to={`/companies/${item.id}`}
                                                                            className="companies-board__kanban-container-content-indv-name"
                                                                        >
                                                                            {item.name}
                                                                        </Link>
                                                                        <p className="companies-board__kanban-container-content-indv-posting-url">
                                                                            {item.posting_url}
                                                                        </p>
                                                                        <p className="companies-board__kanban-container-content-indv-information">
                                                                            {new Date(
                                                                                item.updated_at
                                                                            ).toDateString()}
                                                                        </p>
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
