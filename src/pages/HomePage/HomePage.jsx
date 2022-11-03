import "./HomePage.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import img from "../../assets/images/Untitled design.jpg";
import { useEffect } from "react";
import { getLeadsInProgress } from "../../utils/api";

export default function HomePage() {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        getLeadsInProgress().then((resp) => {
            setLeads(resp.data);
        });
    }, []);

    const itemsFromBackend = [
        {
            id: uuid(),
            business_name: "Canva",
            first_name: "Melanie",
            last_name: "Perkins",
            created_at: "15th of Nov., 2022",
        },
        {
            id: uuid(),
            business_name: "Microsoft",
            first_name: "Bill",
            last_name: "Gates",
            created_at: "15th of Nov., 2022",
        },
    ];

    const columnsFromBackend = {
        [uuid()]: {
            name: "In Progress",
            items: itemsFromBackend,
        },
        [uuid()]: {
            name: "CL Finished",
            items: [],
        },
        [uuid()]: {
            name: "Awaiting Response",
            items: [],
        },
        [uuid()]: {
            name: "Interview Scheduled",
            items: [],
        },
        [uuid()]: {
            name: "Accepted",
            items: [],
        },
        [uuid()]: {
            name: "Rejected",
            items: [],
        },
    };

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

    const [columns, setColumns] = useState(columnsFromBackend);

    return (
        <div className="home">
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([id, columnn]) => {
                    return (
                        <div className="home__kanban">
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
                                                    console.log("Fuck");
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
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
                                                                                {item.business_name}
                                                                            </p>
                                                                            <p className="home__kanban-container-content-indv-name-manager">
                                                                                {item.first_name}{" "}
                                                                                {item.last_name}
                                                                            </p>
                                                                        </div>
                                                                        <div className="home__kanban-container-content-indv-information">
                                                                            <img
                                                                                className="home__kanban-container-content-indv-information-img"
                                                                                src={img}
                                                                            />
                                                                            <p className="home__kanban-container-content-indv-information-paragraph">
                                                                                {item.created_at}
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
