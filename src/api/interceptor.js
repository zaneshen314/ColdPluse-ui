import axios from "axios";

const baseURL = 'http://localhost:8080';

const instance = axios.create({baseURL});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error)=>{
        console.log("Error: ", error);
        if (error.response && error.status === 404){
            window.location.href = "/404";
        }
        else if (error.response && error.status === 500){
            window.location.href = "/500";
        }
        return Promise.reject(error);
}
);

export default instance;
