import TextInput from "../input";
import Header from "../header";
import Footer from "../footer";
import { StyledTextPage, StyledTextFull, GetKnow, Container } from "./style";

const Page = () => {
  return (
    <>
      <Container>
        <Header />
        <StyledTextPage>PROGRAMADOR</StyledTextPage>
        <StyledTextFull>FULLSTACK</StyledTextFull>
      </Container>
      <GetKnow>CONHEÇA O EDER</GetKnow>
      <TextInput />
      <Footer />
    </>
  );
};

export default Page;
