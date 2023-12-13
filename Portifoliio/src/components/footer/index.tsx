import { StyleFooter, Copyright } from "./style";

const Footer = () => {
  return (
    <>
      <StyleFooter>
        <div className="TitleMenu">
          <h1>MENU</h1>
          <p>Home</p>
          <p>Sobre mim</p>
          <p>Skills</p>
          <p>Portifólio</p>
          <p>Contato</p>
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
