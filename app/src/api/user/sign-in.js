import { instance } from "../../configs/httpClient"

export async function signIn({ email, password }) {
    try {
        const response = await instance.post('/login', {}, {
            auth: {
                username: email,
                password
            }
        })
        return {
                data: response.data,
                status: response.status
            }
    } catch (error) {
        return {
            status: 401,
            message: "Usuário ou Senha incorretos"
        }
    }
    
}