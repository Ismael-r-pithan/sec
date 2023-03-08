import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-800"]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 0;

  img {
  height: 2rem;
}
`;
