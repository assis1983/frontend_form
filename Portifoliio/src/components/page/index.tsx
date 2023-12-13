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
      </StyleImage>
      <GetKnow id="projects">PROJETOS</GetKnow>
      <TextInput />
      <Footer />
    </>
  );
};

export default Page;
