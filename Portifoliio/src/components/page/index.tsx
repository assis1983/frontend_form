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
            <p>JAVASCRIPT</p>
          </a>
        </div>
        <div>
          <a href="https://nodejs.org/en" target="_blank">
            <IconNode />
            <p>NODE</p>
          </a>
        </div>
        <div>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <IconTS />
            <p>TYPESCRIPT</p>
          </a>
        </div>
        <div>
          <a href="https://www.npmjs.com/" target="_blank">
            <IconNpm />
            <p>NPM</p>
          </a>
        </div>
        <div>
          <a href="https://react.dev/" target="_blank">
            <IconReact />
            <p>REACT</p>
          </a>
        </div>
        <div>
          <a href="https://www.w3.org/" target="_blank">
            <IconHtml />
            <p>HTML</p>
          </a>
        </div>
        <div>
          <a href="https://www.w3.org/" target="_blank">
            <IconCss />
            <p>CSS</p>
          </a>
        </div>
        <div>
          <a href="https://www.mongodb.com/" target="_blank">
            <IconMongodb />
            <p>MONGODB</p>
          </a>
        </div>
        <div>
          <a href="https://git-scm.com/" target="_blank">
            <IconGit />
            <p>GIT</p>
          </a>
        </div>
        <div>
          <a href="https://code.visualstudio.com/" target="_blank">
            <IconVscode />
            <p>VSCODE</p>
          </a>
        </div>
      </StyleImage>
      <GetKnow id="projects">PROJETOS</GetKnow>
      <TextInput />
      <Footer />
    </>
  );
};

export default Page;
