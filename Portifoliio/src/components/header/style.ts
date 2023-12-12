import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #efefef;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .name {
    color: #34d1bf;
    font-size: 30px;
    text-decoration: none;
    margin: 5px;
  }
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 15px;
    font-family: Sans-Serif;
  }

  a {
    text-decoration: none;
    color: #efefef;
    font-weight: 300;
    font-size: 22px;
    &:hover {
      color: #efefef; 
    }
  }
`;

