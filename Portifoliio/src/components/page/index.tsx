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
          <IconJs />
          <p>JAVASCRIPT</p>
        </div>
        <div>
          <IconNode />
          <p>NODE</p>
        </div>
        <div>
          <IconTS />
          <p>TYPESCRIPT</p>
        </div>
        <div>
          <IconNpm />
          <p>NPM</p>
        </div>
        <div>
          <IconReact />
          <p>REACT</p>
        </div>
        <div>
          <IconHtml />
          <p>HTML</p>
        </div>
        <div>
          <IconCss />
          <p>CSS</p>
        </div>
        <div>
          <IconMongodb />
          <p>MONGODB</p>
        </div>
        <div>
          <IconGit />
          <p>GIT</p>
        </div>
        <div>
          <IconVscode />
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
