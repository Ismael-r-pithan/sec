import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../api/user/sign-up";
import { Header } from "../../../components/Header";
import { BoxInput, FormRegister } from "./styles";

export function RegisterScreen() {
  const [ formInput, setFormInput ] = useState({
    fullName: '',
    email: '',
    telefone: '',
    birthDate: '',
    password: '',
    imagePerfil: '',
  });
  const navigate = useNavigate("")
  const [error, setError] = useState();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput(oldFormInput => ({ ...oldFormInput, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

  }

  async function onSignUp() {

    setError("");

    let user = {
      nomeCompleto: formInput.fullName,
      email: formInput.email,
      telefone: formInput.telefone,
      dataNascimento: formInput.birthDate,
      senha: formInput.password,
      imagemPerfil: formInput.imagePerfil, 
    };

    const userSignUp = await signUp(user);

    if (userSignUp !== 201) {
      setError(userSignUp.message);
      return;
    }
    navigate("/");
  }


  return (
    <>
    <Header />
    <FormRegister onSubmit={handleSubmit}>  
      <BoxInput>
          <strong>Crie sua conta</strong>

          <input 
            type="text" 
            name="fullName" 
            autoComplete="off" 
            value={formInput.fullName} 
            onChange={handleChange} 
            placeholder="Nome completo" 
          />

          <input 
            type="email" 
            name="email" 
            autoComplete="off"
            value={formInput.email}
            onChange={handleChange} 
            placeholder="E-mail" 
          />

          <input 
            type="text" 
            name="telefone" 
            autoComplete="off"
            value={formInput.telefone}
            onChange={handleChange}
            placeholder="telefone" 
          />
          <input 
            type="date" 
            name="birthDate" 
            autoComplete="off"
            value={formInput.birthDate}
            onChange={handleChange} 
            placeholder="Data de nascimento" 
          />
          <input 
            type="password" 
            name="password" 
            autoComplete="off"
            value={formInput.password}
            onChange={handleChange} 
            placeholder="Senha" 
          />
          <input 
            type="text" 
            name="imagePerfil" 
            autoComplete="off"
            value={formInput.imagePerfil}
            onChange={handleChange} 
            placeholder="Perfil de imagem" 
          />
          {error && <p>{error}</p>}
          <button onClick={onSignUp} type="submit">CADASTRAR</button>
      </BoxInput>
    </FormRegister>
    </>
  );
}