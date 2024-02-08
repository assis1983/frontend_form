import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto; /* Centraliza o formulário na tela */
  padding: 20px;
  border: 6px solid #34d1bf;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: border-radius 0.1s ease;

  &:hover {
    border-radius: 20px;
  }

  input {
    margin-bottom: 20px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #34d1bf;
    background-color: black;
    color: white;
  }

  input:focus {
    outline: none;
  }

  .message {
    border: 1px solid #34d1bf;
    height: 5rem;
    margin-bottom: 20px;
  }

  .button {
    padding: 10px 20px;
    background-color: #34d1bf;
    font-size: 20px;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 100%; /* Agora o botão ocupa toda a largura do formulário */
    max-width: 200px;
    margin: 0 auto; /* Centraliza o botão */
  }

  @media (max-width: 768px) {
    /* Para telas menores que 768px de largura */
    input,
    .message {
      margin-bottom: 15px;
    }

    .button {
      font-size: 18px;
    }
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin-top: 5rem;
  &:hover {
    color: #34d1bf;
  }
`;
export const Frase = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
  height: 10vh;
  font-size: 1rem;
  &:hover {
    color: #34d1bf;
  }
`;
