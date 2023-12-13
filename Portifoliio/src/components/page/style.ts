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
  div {
    width: 6rem;
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
