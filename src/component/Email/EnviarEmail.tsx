import { useState } from "react";
import { BoxColumn } from "../box/Box";
import { styled } from "styled-components";
import {Button} from "../button/Button";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import { sendEmail } from "../../utils/sendEmail";


interface emailProps {
  nome: string;
  assunto: string;
  mensagem: string;
}
const ContainerInputs = styled(BoxColumn)`
   height:400px;
      width:400px;
      justify-content: space-between;
`;
function EnviarEmail() {
  const [dadosEmail, setDadosEmail] = useState<emailProps>({
    nome: "",
    assunto: "",
    mensagem: "",
  });

  

  return (
    <ContainerInputs
    >
     
      <Input
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDadosEmail({ ...dadosEmail, nome: e.target.value })}
        value={dadosEmail.nome}
        placeholder="Nome"
      />
   
      <Input
        onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
          setDadosEmail({ ...dadosEmail, assunto: e.target.value })
        }
        value={dadosEmail.assunto}
        placeholder="Email"
      />
      <TextArea
        rows={10}
        onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) =>
          setDadosEmail({ ...dadosEmail, mensagem: e.target.value })
        }
        value={dadosEmail.mensagem}
        placeholder="Mensagem"
      />
      <Button
       
        onClick={() =>sendEmail( {nome: dadosEmail.nome,
          email: dadosEmail.assunto,
          mensagem: dadosEmail.mensagem,})}
      >
        Enviar
      </Button>
    </ContainerInputs>
  );
}
export default EnviarEmail;
