import axios from "axios";

const baseURL = 'https://wordle.votee.dev:8000'

const service = axios.create({
    baseURL: baseURL,
    timeout: 20000,
});

service.interceptors.request.use(async config => {
    return config;
});

service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response && error.response.data) {
            return Promise.reject(error.response?.data);
        }
        return Promise.reject(error);
    }
);

export default service;