import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// contacts

export const getToDos = () => {
    return axios.get(`${API_URL}/todos`);
};

export const addNewToDo = ({ addInputData }) => {
    return axios.post(`${API_URL}/todos`, addInputData);
};

// :id

export const getToDoId = ({ id }) => {
    return axios.get(`${API_URL}/todos/${id}`);
};

export const updateToDo = ({ id, userInput }) => {
    return axios.put(`${API_URL}/todos/${id}`, userInput);
};

export const deleteToDo = ({ id }) => {
    return axios.delete(`${API_URL}/todos/${id}`);
};
