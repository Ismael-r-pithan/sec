import { instance } from "../../configs/httpClient";

export async function signUp({ nomeCompleto, email, dataNascimento, telefone, senha, imagemPerfil }) {

    try {
        const response = await instance.post("/usuarios", {
            nomeCompleto,
            email,
            dataNascimento,
            telefone,
            senha,
            imagemPerfil
          });

          return response.status;
    } catch (error) {
        if (error.response.data.message) {
            return {
                message: error.response.data.message
            }
        }
        console.log(error);
        return {
            message: "Preencha informações válidas"
          }
    }

}