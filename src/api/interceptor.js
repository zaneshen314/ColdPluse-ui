import axios from "axios";
import { message } from "antd";

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:7002';

const instance = axios.create({ baseURL });


instance.interceptors.response.use(
    (response) => {
        if (response.data && response.data.code() === 401) {
            message.warning('Session Expired. Please log in again.').then(() => {window.location.href = "/login"});
        }
        return response;
    },
    (error) => {
        console.log("Error: ", error);
        return Promise.reject(error);
    }
);

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;