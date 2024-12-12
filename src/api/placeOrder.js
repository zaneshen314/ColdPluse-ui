import instance from "./interceptor";

export const placeOrder = async (concertId, scheduleId, guests) => {
    try {
        const response = await instance.post(`transactions`, {
            concertClassId: concertId,
            concertScheduleId: scheduleId,
            viewers: guests,
        });
        console.log(response)
        return response.data.data;
    } catch (error) {
        console.error("Error placing order:", error);
        throw error;
    }
};