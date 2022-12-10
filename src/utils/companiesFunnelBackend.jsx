import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// contacts

export const getCompaniesFunnel = () => {
    return axios.get(`${API_URL}/companiesFunnel`);
};

export const addNewCompanyFunnel = ({ addInputData }) => {
    return axios.post(`${API_URL}/companiesFunnel`, addInputData);
};

// :id

export const getCompanyFunnelId = ({ id }) => {
    return axios.get(`${API_URL}/companiesFunnel/${id}`);
};

export const updateCompanyFunnel = ({ id, userInput }) => {
    return axios.put(`${API_URL}/companiesFunnel/${id}`, userInput);
};

export const deleteCompanyFunnel = ({ id }) => {
    return axios.delete(`${API_URL}/companiesFunnel/${id}`);
};
