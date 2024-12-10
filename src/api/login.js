import instance from "./interceptor";

export const login = async (email, password) => {
    const response = await instance.post('/login', {
        email,
        password,
    });

    if (!response.status === 200) {
        throw new Error('Login failed');
    }

    return response.data;
};