
import instance from "./interceptor";

const API_BASE_URL = "/concerts";

export const getEventData = async (concertId, scheduleId) => {
    try {
        const response = await instance.get(`${API_BASE_URL}/${concertId}/schedules/${scheduleId}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching event data:", error);
        throw error;
    }
};

export const getConcertTicketStrategyByClass = async (concertId) => {
    try {
        const response = await instance.get(`${API_BASE_URL}/${concertId}/classes`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching ticket strategy:", error);
        throw error;
    }
}

export const getAllEvents = async () => {
    try {
        const response = await instance.get(`${API_BASE_URL}/schedules`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching event data:", error);
        throw error;
    }
};

export const getConcertScheduleByConcertId = async (concertId) => {
    try {
        const response = await instance.get(`${API_BASE_URL}/${concertId}/schedules`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching concert schedule:", error);
        throw error;
    }
}

export const getConcertScheduleClassByConcertIdAndScheduleId = async (concertId, scheduleId) => {
    try {
        const response = await instance.get(`${API_BASE_URL}/${concertId}/schedules/${scheduleId}/classes`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching concert schedule class:", error);
        throw error;
    }
}

export const getConcertByConcertId = async (concertId) => {
    try{
        const response = await instance.get(`${API_BASE_URL}/${concertId}`);
        return response.data.data;
    }catch(error){
        console.error("Error fetching concert data:", error);
        throw error;
    }
}