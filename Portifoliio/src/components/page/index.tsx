import TextInput from "../input"
import Header from "../header"
import { StyledTextPage, StyledTextFull, GetKnow, Container} from "./style"


const Page = () => {
    return (
        <Container>
            <Header />
            <StyledTextPage>PROGRAMADOR</StyledTextPage>
            <StyledTextFull>FULLSTACK</StyledTextFull>
            <GetKnow>CONHEÇA O EDER</GetKnow>
            <TextInput />    
        </Container>
    )
}

export default Page