import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// users

export const getUsers = () => {
    return axios.get(`${API_URL}/users`);
};

export const getUserId = ({ id }) => {
    return axios.get(`${API_URL}/users/${id}`);
};

export const addNewUser = () => {
    return axios.post(`${API_URL}/users`);
};

export const updateUser = ({ id, userInput }) => {
    return axios.put(`${API_URL}/users/${id}`, userInput);
};

export const deleteUser = ({ id }) => {
    return axios.delete(`${API_URL}/users/${id}`);
};

// leads

export const getLeads = () => {
    return axios.get(`${API_URL}/leads`);
};

export const getLeadId = ({ id }) => {
    return axios.get(`${API_URL}/leads/${id}`);
};

export const addNewLead = ({ addInputData }) => {
    return axios.post(`${API_URL}/leads`, addInputData);
};

export const updateLead = ({ id, userInput }) => {
    return axios.put(`${API_URL}/leads/${id}`, userInput);
};

export const deleteLead = ({ id }) => {
    return axios.delete(`${API_URL}/leads/${id}`);
};

