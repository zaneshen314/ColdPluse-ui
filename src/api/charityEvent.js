import instance from "./interceptor";

const charityEventPath = "/charity-event";
export const getUserEventParticipation = async (userId) => {
    try{
        const response = await instance.get(`${charityEventPath}/participation/${userId}`);
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
