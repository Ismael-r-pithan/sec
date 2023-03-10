import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;


  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }

    .wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme["gray-600"]};

  strong {
    line-height: 1.6;
    color: ${(props) => props.theme["gray-100"]};
  }

  textarea {
    width: 100%;
    background: ${(props) => props.theme["gray-900"]};
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 0.25rem;
    color: ${(props) => props.theme["gray-100"]};
    line-height: 1.4;
    margin-top: 1rem;
  }

  footer {
    visibility: hidden;
    max-height: 0;
  }

  &:focus-within footer {
    visibility: visible;
    max-height: none;
  }

  button[type="submit"] {
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: ${(props) => props.theme["purple-500"]};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    cursor: pointer;

    transition: background-color 0.1s;
  }

  button[type="submit"]:not(:disabled):hover {
    background: ${(props) => props.theme["purple-300"]};
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PostAuthorInfo = styled.div`
  strong {
    display: block;
    color: ${(props) => props.theme["gray-100"]};
    line-height: 1.6;
  }

  span {
    display: block;
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-400"]};
    line-height: 1.6;
  }
`;

export const PostContainer = styled.article`
  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;
`;