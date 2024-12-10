import instance from "./interceptor";

const transactionPath = "/transactions";

export const getUserTransactionWithTickets = async (userId) => {
    try{
        const response = await instance.get(`${transactionPath}`);
        return response.data;
    } catch (error){
        console.log("Error: ", error);
    }
}
