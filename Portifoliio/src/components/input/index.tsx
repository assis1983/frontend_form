import { api } from "../../services/api";
import { FormEvent, useRef, useState } from "react";
import { Form, Title, CenteredContainer } from "./style";

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
        <Title>Formulário</Title>
      </CenteredContainer>
      <Form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input type="text" placeholder="Nome" ref={nameRef} />
        <label>Email</label>
        <input type="email" placeholder="Email" ref={emailRef} />
        <label>Fone</label>
        <input type="text" placeholder="Fone" ref={foneRef} />
        <label>Assunto</label>
        <input type="text" placeholder="Assunto" ref={subjectRef} />
        <label>Mensagem</label>
        <input type="text" placeholder="Mensagem" ref={messageRef} />
        <input className="button" type="submit" />
      </Form>
    </>
  );
};

export default TextInput;
