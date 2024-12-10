
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