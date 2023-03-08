import geekLogo from '../../assets/logoGeek.png';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={geekLogo} alt="Logotipo do mundo geek" />
      <p>MundoGeek</p>
    </HeaderContainer>
  );
}
