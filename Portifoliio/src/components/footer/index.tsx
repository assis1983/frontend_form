import { StyleFooter, Copyright } from "./style";

const Footer = () => {
  return (
    <>
      <StyleFooter>
        <div className="TitleMenu">
          <h1>MENU</h1>
          <a href="#">
            <p>Home</p>
          </a>
          <a href="#information">
            <p>Sobre mim</p>
          </a>
          <a href="#skills">
            <p>Skills</p>
          </a>
          <a href="#projects">
            <p>Portifólio</p>
          </a>
          <a href="#contact">
            <p>Contato</p>
          </a>
        </div>
        <div className="TitleRedes">
          <h1>REDES SOCIAIS</h1>
          <p>Linkedin</p>
          <p>Instagran</p>
        </div>
        <div className="TitleContatos">
          <h1>CONTATOS</h1>
          <p>(18)99797-4147</p>
          <p>assis.ederjd@gmail.com</p>
          <p>Adamantina/SP</p>
        </div>
      </StyleFooter>
      <Copyright className="Copyright">
        © 2023 Eder Roberto de Assis. Todos os direitos reservados.
      </Copyright>
    </>
  );
};

export default Footer;
