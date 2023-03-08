import { Sidebar } from "../../../components/Sidebar";
import { HomeContainer } from "./styles";
import { Header } from '../../../components/Header';

export function HomeScreen() {

  return (
    <>
    <Header />
    <HomeContainer>
      <Sidebar />
    </HomeContainer>
    </>
  )
}