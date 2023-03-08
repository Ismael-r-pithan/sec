import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/user/logout";
import { me } from "../../api/user/me";
import { Avatar } from "../Avatar";


import { Profile, SidebarContainer, SidebarImage } from "./styles";

export function Sidebar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMe() {
      const loadMeProfile = await me();

      setUser(loadMeProfile);
    }
    loadMe();
  }, [])

  async function onLogout() {
    await logout();

    navigate("/");
  }

  return (
    <SidebarContainer>
      <SidebarImage
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <Profile>
        <Avatar src={user.imagemPerfil} />

        <strong>{user.nomeCompleto}</strong>
        <span>{user.email}</span>
      </Profile>

      <footer>
        <a href="/home">
          Home
        </a>
        <button onClick={onLogout}>Sair</button>
      </footer>
    </SidebarContainer>
  );
}
