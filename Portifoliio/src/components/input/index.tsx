import { api } from "../../services/api";
import { FormEvent, useRef, useState } from "react";
import { Form, Title, CenteredContainer, Frase } from "./style";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  fone: string;
  subject: string;
  message: string;
  created_at: string;
}

const TextInput = () => {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const foneRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !foneRef.current?.value ||
      !subjectRef.current?.value ||
      !messageRef.current?.value
    )
      return;
    const response = await api.post("/form", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      fone: foneRef.current?.value,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value,
    });
    setCustomers((allCustomers) => [...allCustomers, response.data]);
    nameRef.current.value = "";
    emailRef.current.value = "";
    foneRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <>
      <CenteredContainer>
        <Title>FALE COMIGO</Title>
      </CenteredContainer>
      <Frase>
        Resta alguma dúvida? Prencha os campos abaixo com os seguintes dados e
        entre em contato comigo.
      </Frase>

      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="Seu nome aqui" ref={nameRef} />
        <input type="email" placeholder="email@exemplo.com.br" ref={emailRef} />
        <input type="text" placeholder="Fone" ref={foneRef} />
        <input type="text" placeholder="Assunto" ref={subjectRef} />
        <input
          className="message"
          type="text"
          placeholder="Escreva sua mensagem aqui"
          ref={messageRef}
        />
        <input className="button" type="submit" />
      </Form>
    </>
  );
};

export default TextInput;
