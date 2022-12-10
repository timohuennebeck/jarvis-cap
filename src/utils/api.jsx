import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// users

export const getUsers = () => {
    return axios.get(`${API_URL}/users`);
};

export const getUserId = ({ id }) => {
    return axios.get(`${API_URL}/users/${id}`);
};

export const addNewUser = ({ addInputData }) => {
    return axios.post(`${API_URL}/users`, addInputData);
};

export const updateUser = ({ id, userInput }) => {
    return axios.put(`${API_URL}/users/${id}`, userInput);
};

export const deleteUser = ({ id }) => {
    return axios.delete(`${API_URL}/users/${id}`);
};

// contacts

export const getContacts = () => {
    return axios.get(`${API_URL}/contacts`);
};

export const getThisMonthContacts = () => {
    return axios.get(`${API_URL}/contacts/this-month`);
};

export const getLastMonthContacts = () => {
    return axios.get(`${API_URL}/contacts/last-month`);
};

export const getContactId = ({ id }) => {
    return axios.get(`${API_URL}/contacts/${id}`);
};

export const addNewContact = ({ addInputData }) => {
    return axios.post(`${API_URL}/contacts`, addInputData);
};

export const updateContact = ({ id, userInput }) => {
    return axios.put(`${API_URL}/contacts/${id}`, userInput);
};

export const deleteContact = ({ id }) => {
    return axios.delete(`${API_URL}/contacts/${id}`);
};



// companies

export const getCompanies = () => {
    return axios.get(`${API_URL}/companies`);
};

export const getThisMonthCompanies = () => {
    return axios.get(`${API_URL}/companies/this-month`);
};

export const getLastMonthCompanies = () => {
    return axios.get(`${API_URL}/companies/last-month`);
};

export const getCompanyId = ({ id }) => {
    return axios.get(`${API_URL}/companies/${id}`);
};

export const addNewCompany = ({ addInputData }) => {
    return axios.post(`${API_URL}/companies`, addInputData);
};

export const updateCompany = ({ id, userInput }) => {
    return axios.put(`${API_URL}/companies/${id}`, userInput);
};

export const deleteCompany = ({ id }) => {
    return axios.delete(`${API_URL}/companies/${id}`);
};

// faqs

export const getFaqs = () => {
    return axios.get(`${API_URL}/faqs`);
};
