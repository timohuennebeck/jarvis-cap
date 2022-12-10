import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// contacts

export const getContactsFunnel = () => {
    return axios.get(`${API_URL}/contactsFunnel`);
};

export const addNewContactFunnel = ({ addInputData }) => {
    return axios.post(`${API_URL}/contactsFunnel`, addInputData);
};

// :id

export const getContactFunnelId = ({ id }) => {
    return axios.get(`${API_URL}/contactsFunnel/${id}`);
};

export const updateContactFunnel = ({ id, userInput }) => {
    return axios.put(`${API_URL}/contactsFunnel/${id}`, userInput);
};

export const deleteContactFunnel = ({ id }) => {
    return axios.delete(`${API_URL}/contactsFunnel/${id}`);
};
