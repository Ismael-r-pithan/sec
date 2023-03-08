import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;
  overflow: hidden;

  

  footer {
    border-top: 1px solid ${(props) => props.theme["gray-600"]};
    margin-top: 1.5rem;
    /* padding: 1.5rem 2rem 2rem; */

    a, button {
      width: 100%;
      background: transparent;
      color: ${(props) => props.theme["purple-500"]};
      border: 1px solid ${(props) => props.theme["purple-500"]};
      /* border-radius: 8px; */
      height: 50px;
      padding: 0 1.5rem;
      font-weight: bold;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      gap: 0.5rem;

      transition: color 0.1s, background-color 0.1s;

      &:hover {
        background: ${(props) => props.theme["purple-500"]};
        color: ${(props) => props.theme.white};
      }

      & + & {
        margin-top: 1rem;
      }
    }
  }
`;

export const SidebarImage = styled.img`
    width: 100%;
    height: 72px;
    object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 6px);

  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme["gray-100"]};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-400"]};
    line-height: 1.6;
  }
`;
