import styled from "styled-components";

export const Container = styled.div`
  height: 25rem;
  padding: 0;
  box-sizing: border-box;
`;
export const StyledTextPage = styled.h1`
  color: #34d1bf;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  font-size: 40px;
  font-weight: bold;
`;

export const StyledTextFull = styled.h1`
  color: #34d1bf;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  margin-top: -5rem;
  font-weight: 300;
`;

export const GetKnow = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  font-weight: 300;
  color: white;
  font-size: 30px;
  &:hover {
    color: #34d1bf;
  }
`;

export const StyleImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px; /* Alterado para margem em todos os lados */

  div {
    width: 3rem;
  }

  .efect {
    height: auto;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.4);
    }
  }

  a {
    text-decoration: none;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #34d1bf;
    font-size: 1rem;

    &:hover {
      border-bottom: 2px solid #34d1bf;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    div {
      width: 100%;
      margin-bottom: 20px;
    }

    .efect {
      width: 50%;
      max-width: 100px;
      margin: 0 auto;
    }
  }
`;

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  font-size: 1rem;
  margin: 0 30px;
  gap: 25px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    img {
      max-width: 50%;
      height: auto;
      margin-bottom: 0;
    }
  }
`;

export const StyledProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ImageProject = styled.img`
  width: 30%;
  height: auto;
  max-height: 250px;
  border-radius: 10px;
`;
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export const ButtonVite = styled.button`
  padding: 10px;
  background-color: #34d1bf;
  font-size: 20px;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 12rem;
  height: 3rem;
  margin: 0 auto;
`;
