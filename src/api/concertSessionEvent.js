
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