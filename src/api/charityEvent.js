import instance from "./interceptor";

const userPath = "/users";
const charityEventPath = "/charity-events";
export const getUserEventParticipation = async () => {
    try {
        const response = await instance.get(`${userPath}/charity-event-participations`);
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export const getUserCurrentPoints = async () => {
    try {
        const response = await instance.get(`${userPath}/cumulatedPoint`);
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

//register in charity event
export const registerCharityEvent = async (charityEventId, claimPoint) => {
    try {
        const response = await instance.post(`${charityEventPath}`, {
            charityEventId: charityEventId,
            claimPoint: claimPoint
        });
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export const getAllCharityEvents = async () => {
    try {
        const response = await instance.get(charityEventPath);
        return response.data; // Adjust based on API response structure
    } catch (error) {
        console.error("Error fetching charity events:", error);
        throw error;
    }
}

export const getUserCurrentCharityEventIds = async () => {
    try {
        const response = await instance.get(`${userPath}/charity-events`);
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export const deleteCharityEventParticipation = async (eventId) => {
    try {
        const response = await instance.delete(`${charityEventPath}?eventId=${eventId}`);
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
    }
}
