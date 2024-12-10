import instance from "./interceptor";

export const login = async (email, password) => {
    const response = await instance.post('/login', {
        email,
        password,
    });
    return response.data;
};

export const signup = async (email, name, password) => {
    const response = await instance.post('/register', {
        email,
        name,
        password,
    });
    return response.data;
};