import { instance } from "../../configs/httpClient"

export async function logout() {
    try {
        await instance.get('/logout');
    } catch (error) {
        return {
            status: error.response.data.status,
            message: error.response.data.message
        }
    }
    
}