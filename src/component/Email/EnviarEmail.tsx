import { styled } from "styled-components";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { useState } from "react";
import { BoxColumn } from "../box/Box";
import SubTitle from "../texts/SubTtitle";
import Button from "../button/Button";

const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  border: none;
  padding: 10px;
  outline: none !important;
`;
const TextArea = styled.textarea`
  width: 100%;
  border-radius: 15px;
  border: none;
  padding: 10px;
`;
interface emailProps {
  nome: string;
  assunto: string;
  mensagem: string;
}

function EnviarEmail() {
  const [dadosEmail, setDadosEmail] = useState<emailProps>({
    nome: "",
    assunto: "",
    mensagem: "",
  });

  function sendEmail() {
    const templateParams = {
      nome: dadosEmail.nome,
      email: dadosEmail.assunto,
      mensage: dadosEmail.mensagem,
    };

    emailjs
      .send(
        "service_gzn3as1",
        "template_23r1aoi",
        templateParams,
        "zW5mIBx-HCybOD5nW"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <BoxColumn
      height="400px"
      width="400px"
      justify={{ content: "space-between" }}
    >
      <SubTitle style={{ fontSize: "15px" }}>Nome</SubTitle>
      <Input
        onChange={(e) => setDadosEmail({ ...dadosEmail, nome: e.target.value })}
        value={dadosEmail.nome}
      />
      <SubTitle style={{ fontSize: "15px" }}>Email</SubTitle>
      <Input
        onChange={(e) =>
          setDadosEmail({ ...dadosEmail, assunto: e.target.value })
        }
        value={dadosEmail.assunto}
      />
      <SubTitle style={{ fontSize: "15px" }}>Mensagem</SubTitle>
      <TextArea
        rows={10}
        onChange={(e) =>
          setDadosEmail({ ...dadosEmail, mensagem: e.target.value })
        }
        value={dadosEmail.mensagem}
      />
      <Button
        radius="15px"
        width="100%"
        background="#6d1238"
        border="none"
        color="#fff"
        height="30px"
        onClick={sendEmail}
      >
        Enviar
      </Button>
    </BoxColumn>
  );
}
export default EnviarEmail;
