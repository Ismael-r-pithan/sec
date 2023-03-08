import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../api/user/sign-in";
import { Header } from "../../../components/Header";
import { useGlobalUser } from "../../../context/usuario/useGlobalUser";
import { BoxInput, FormLogin } from "./sign-in";

export function SignInScreen() {

    const [ formInput, setFormInput ] = useState({ email: '', password: ''});
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { _user, setUser } = useGlobalUser();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormInput(oldFormInput => ({ ...oldFormInput, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
      }

    async function onSignIn() {
      const user = await signIn({
        email: formInput.email,
        password: formInput.password,
      });

      if (user.status !== 200) {
        setError(user.message)
        return;
      }

      setUser(user?.data);

      navigate("/home");
    }

    return (
      <>
      <Header />
      <FormLogin onSubmit={handleSubmit}>  
        <BoxInput>
            <strong>MundoGeek</strong>
            <input 
              type="email" 
              name="email" 
              autoComplete="off" 
              value={formInput.email} 
              onChange={handleChange} 
              placeholder="Nome de usuário" 
            />

            <input 
              type="password" 
              name="password" 
              autoComplete="off"
              value={formInput.password}
              onChange={handleChange} 
              placeholder="Senha" 
            />
            {error && <p>{error}</p>}
            <button onClick={onSignIn} type="submit">ENTRAR</button>

            <span>Não tem uma conta? <a href="/register">Registre-se</a></span>
            
        </BoxInput>
      </FormLogin>
      </>
    );
}