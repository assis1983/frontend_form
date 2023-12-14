import TextInput from "../input";
import Header from "../header";
import Footer from "../footer";
import {
  StyledTextPage,
  StyledTextFull,
  GetKnow,
  Container,
  StyleImage,
  StyledAbout,
  StyledProject,
  ImageProject,
} from "./style";
import IconJs from "../../assets/js";
import IconNode from "../../assets/node";
import IconTS from "../../assets/ts";
import IconNpm from "../../assets/npm";
import IconReact from "../../assets/react";
import IconHtml from "../../assets/html";
import IconCss from "../../assets/css";
import IconVscode from "../../assets/vscode";
import IconMongodb from "../../assets/mondodb";
import IconGit from "../../assets/git";
import Wexer from "../../assets/wexer.png";
import WhatsAppButton from "../button";
import MyImage from "../../assets/109834675.jpg";

const Page = () => {
  return (
    <>
      <Container>
        <Header />
        <StyledTextPage>PROGRAMADOR</StyledTextPage>
        <StyledTextFull>FULLSTACK</StyledTextFull>
      </Container>
      <GetKnow id="information">SOBRE MIM</GetKnow>
      <StyledAbout>
        Ola, sou um profissional em transição de carreira para a área tech, com
        o propósito de atuar como Desenvolvedor FullStack. Durante uma década,
        tive a honra de servir no funcionalismo público, onde adquiri uma sólida
        base em administração e gestão. No entanto, minha paixão pela tecnologia
        me levou a buscar uma nova direção em minha carreira. Atualmente, estou
        focado em meu caminho de aprendizado na área de tecnologia, com ênfase
        em Javascript, React.JS e Node.JS. Acredito que a tecnologia é uma força
        transformadora que pode criar soluções inovadoras e aprimorar a
        experiência das pessoas. Minha jornada de estudos tem sido uma
        emocionante busca por conhecimento e habilidades que me permitirão
        contribuir de forma significativa para projetos de desenvolvimento web.
        Além da minha paixão por React.JS, tenho um profundo interesse em
        desenvolver aplicações web interativas e responsivas que possam melhorar
        a vida das pessoas e agregar valor aos negócios. Estou comprometido com
        o aprendizado contínuo e estou ansioso para enfrentar desafios técnicos
        e colaborar em projetos empolgantes. Sinta-se à vontade para entrar em
        contato comigo se estiver interessado em discutir oportunidades de
        colaboração, compartilhar ideias ou simplesmente se conectar.
        <img src={MyImage} />
      </StyledAbout>

      <GetKnow id="skills">MINHAS SKILLS</GetKnow>

      <StyleImage>
        <div className="efect">
          <a href="https://www.javascript.com/" target="_blank">
            <IconJs />
            <p>JAVASCRIPT</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://nodejs.org/en" target="_blank">
            <IconNode />
            <p>NODE</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://www.typescriptlang.org/" target="_blank">
            <IconTS />
            <p>TYPESCRIPT</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://www.npmjs.com/" target="_blank">
            <IconNpm />
            <p>NPM</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://react.dev/" target="_blank">
            <IconReact />
            <p>REACT</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://www.w3.org/" target="_blank">
            <IconHtml />
            <p>HTML</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://www.w3.org/" target="_blank">
            <IconCss />
            <p>CSS</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://www.mongodb.com/" target="_blank">
            <IconMongodb />
            <p>MONGODB</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://git-scm.com/" target="_blank">
            <IconGit />
            <p>GIT</p>
          </a>
        </div>
        <div className="efect">
          <a href="https://code.visualstudio.com/" target="_blank">
            <IconVscode />
            <p>VSCODE</p>
          </a>
        </div>
      </StyleImage>
      <GetKnow id="projects">PROJETOS</GetKnow>
      <StyledProject>
        <ImageProject src={Wexer} />
      </StyledProject>
      <TextInput />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Page;
