import axios from "axios";

const base_url = "http://localhost:4040";

// users

export const getUsers = () => {
    return axios.get(`${base_url}/users`);
};

export const getUserId = ({ id }) => {
    return axios.get(`${base_url}/users/${id}`);
};

export const addNewUser = () => {
    return axios.post(`${base_url}/users`);
};

export const updateUser = ({ id, userInput }) => {
    return axios.put(`${base_url}/users/${id}`, userInput);
};

export const deleteUser = ({ id }) => {
    return axios.delete(`${base_url}/users/${id}`);
};

// leads

export const getLeads = () => {
    return axios.get(`${base_url}/leads`);
};

export const getLeadId = ({ id }) => {
    return axios.get(`${base_url}/leads/${id}`);
};

export const addNewLead = ({ addInputData }) => {
    return axios.post(`${base_url}/leads`, addInputData);
};

export const updateLead = ({ id, userInput }) => {
    return axios.put(`${base_url}/leads/${id}`, userInput);
};

export const deleteLead = ({ id }) => {
    return axios.delete(`${base_url}/leads/${id}`);
};
