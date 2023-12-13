import TextInput from "../input";
import Header from "../header";
import Footer from "../footer";
import {
  StyledTextPage,
  StyledTextFull,
  GetKnow,
  Container,
  StyleImage,
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

const Page = () => {
  return (
    <>
      <Container>
        <Header />
        <StyledTextPage>PROGRAMADOR</StyledTextPage>
        <StyledTextFull>FULLSTACK</StyledTextFull>
      </Container>
      <GetKnow id="information">CONHEÇA O EDER</GetKnow>
      <GetKnow id="skills">HABILIDADES</GetKnow>

      <StyleImage>
        <div>
          <a href="https://www.javascript.com/" target="_blank">
            <IconJs />
          </a>
          <p>JAVASCRIPT</p>
        </div>
        <div>
          <a href="https://nodejs.org/en" target="_blank">
            <IconNode />
          </a>
          <p>NODE</p>
        </div>
        <div>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <IconTS />
          </a>
          <p>TYPESCRIPT</p>
        </div>
        <div>
          <a href="https://www.npmjs.com/" target="_blank">
            <IconNpm />
          </a>
          <p>NPM</p>
        </div>
        <div>
          <a href="https://react.dev/" target="_blank">
            <IconReact />
          </a>
          <p>REACT</p>
        </div>
        <div>
          <a href="https://www.w3.org/" target="_blank">
            <IconHtml />
          </a>
          <p>HTML</p>
        </div>
        <div>
          <a href="https://www.w3.org/" target="_blank">
            <IconCss />
          </a>
          <p>CSS</p>
        </div>
        <div>
          <a href="https://www.mongodb.com/" target="_blank">
            <IconMongodb />
          </a>
          <p>MONGODB</p>
        </div>
        <div>
          <a href="https://git-scm.com/" target="_blank">
            <IconGit />
          </a>
          <p>GIT</p>
        </div>
        <div>
          <a href="https://code.visualstudio.com/" target="_blank">
            <IconVscode />
          </a>
          <p>VSCODE</p>
        </div>
      </StyleImage>
      <GetKnow id="projects">PROJETOS</GetKnow>
      <TextInput />
      <Footer />
    </>
  );
};

export default Page;
