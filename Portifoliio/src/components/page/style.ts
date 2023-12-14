import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
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
  font-size: 60px;
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
  font-size: 30px;
  font-weight: 300;
  color: white;
  margin-top: 10rem;
  font-size: 50px;
  &:hover {
    color: #34d1bf;
  }
`;

export const StyleImage = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25rem;
  margin-left: 30px;
  margin-right: 30px;
  div {
    width: 6rem;
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
    color: black;
    font-size: 1rem;
    &:hover {
      color: #34d1bf;
      border-bottom: 2px solid #34d1bf;
    }
  }
`;

export const StyledAbout = styled.div`
  display: flex;
  text-align: justify;
  font-size: 1.2rem;
  margin-left: 30px;
  margin-right: 30px;
  gap: 25px;
  img {
    width: 50%;
    height: 380px;
    border-radius: 50%;
  }
`;
export const StyledProject = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
`;
export const ImageProject = styled.img`
  width: 20%;
  height: auto;
  max-height: 250px;
  border-radius: 20px;
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
