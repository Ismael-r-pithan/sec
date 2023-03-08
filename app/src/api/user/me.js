import { instance } from "../../configs/httpClient"

export async function me() {
    try {
        const response = await instance.get('/me');
        return response.data;
    } catch (error) {
        return {
            status: error.response.data.status,
            message: error.response.data.message
        }
    }
    
}