import styled from "styled-components";

export const HeaderContainer = styled.header`
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

  .LinkGit {
    text-decoration: none;
    color: inherit;
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
    &:hover {
      color: #34d1bf;
      border-bottom: 2px solid #34d1bf;
    }
  }

  a {
    text-decoration: none;
    color: #efefef;
    font-weight: 300;
    font-size: 22px;
    &:hover {
      color: #34d1bf;
      border-bottom: 2px solid #34d1bf;
    }
  }
`;


export const StyleLink = styled.div`
  display: flex;
  gap: 2rem;

`