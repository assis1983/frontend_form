import { HeaderContainer, Menu, StyleLink } from "./style";
import "devicon/devicon.min.css";

const Header = () => {
  const githubLink = "https://github.com/assis1983";
  const linkedinLink = "https://www.linkedin.com/in/ederrassis/";

  return (
    <HeaderContainer>
      <StyleLink>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="LinkGit"
        >
          <i
            className="devicon-github-original"
            style={{ fontSize: "3em" }}
          ></i>
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="LinkGit"
        >
          <i className="devicon-linkedin-plain" style={{ fontSize: "3em" }}></i>
        </a>
      </StyleLink>

      <Menu>
        <ul>
          <li>
            <a href="#information">sobre</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projetos</a>
          </li>
          <li>
            <a href="#contact">contato</a>
          </li>
        </ul>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
