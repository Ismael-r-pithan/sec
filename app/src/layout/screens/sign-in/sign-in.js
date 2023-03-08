import styled from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    input { 
        box-sizing: border-box;
        margin-bottom: 1rem;
        padding: 0.8rem;
        width: 100%;
        border-style: outset;
        background-color: ${(props) => props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-300"]};
        border-radius: 6px;
        border: 2px solid ${(props) => props.theme["gray-900"]};;
        align-items: baseline;
    }

    button { 
        width: 100%;
        padding: 0.8rem;
        border: none;
        background-color: ${(props) => props.theme["purple-500"]};
        color: ${(props) => props.theme["gray-300"]};
        border-radius: 6px;
        cursor: pointer;
    }

    button:hover { 
        transition: 0.2s;
        background-color: ${(props) => props.theme["purple-300"]};
    }
`;

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme["gray-800"]};
    border: 1px solid ${(props) => props.theme["gray-600"]};

    width: 400px;

    border-radius: 1rem;

    padding: 2rem;

    text-align: center;

    strong {
        margin-bottom: 2rem;
        font-size: 1rem;
        color: ${(props) => props.theme["gray-300"]};
    }

    p {
        color: ${(props) => props.theme["red-500"]};
        margin-bottom: 0.8rem;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme["purple-500"]};
    }

    span {
        font-size: 0.875rem;
        margin-top: 1.5rem;
    }
`;



// .icon img {
//     width: 90px;
//     margin-bottom: 1rem;
// }

