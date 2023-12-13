import styled from "styled-components";

export const StyleFooter = styled.div`
  border-top: 5px solid #34d1bf;
  display: flex;
  justify-content: space-around;
  margin-top: 10rem;

  .TitleMenu,
  .TitleRedes,
  .TitleContatos {
    display: flex;
    flex-direction: column;
    color: #34d1bf;
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  .TitleMenu {
    margin-right: 10px;
  }

  .TitleRedes {
    margin: 0 10px;
  }

  .TitleContatos {
    margin-left: 10px;
  }
`;

export const Copyright = styled.div`
  color: #34d1bf; 
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  
`;
