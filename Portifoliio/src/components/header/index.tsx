import { HeaderContainer, Menu } from "./style";

const Header = () => {
    return (
        <HeaderContainer>
          <a href="nome" className="name">eder assis</a>
          <Menu>
            <ul>
              <li><a href="#item1">home</a></li>
              <li><a href="#item2">sobre</a></li>
              <li><a href="#item3">skills</a></li>
              <li><a href="#item4">projetos</a></li>
              <li><a href="#item5">contato</a></li>
            </ul>
          </Menu>
        </HeaderContainer>
      );
}


export default Header