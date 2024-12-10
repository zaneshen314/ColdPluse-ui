import instance from "./interceptor";

const userPath = "/users";
const charityEventPath = "/charity-events";
export const getUserEventParticipation = async (userId) => {
    try{
        const response = await instance.get(`${userPath}/${userId}/charity-event-participations`);
        return response.data;
    } catch (error){
        console.log("Error: ", error);
    }
}

export const getUserCurrentPoints = async (userId) => {
    try{
        const response = await instance.get(`${userPath}/${userId}/cumulatedPoint`);
        return response.data;
    } catch (error){
        console.log("Error: ", error);
    }
}

//register in charity event
export const registerCharityEvent = async (userId, charityEventId, claimPoint) => {
    try {
        const response = await instance.post(`${charityEventPath}/register?userId=${userId}&charityEventId=${charityEventId}&claimPoint=${claimPoint}`);
        return response.data;
    }
    catch (error){
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
