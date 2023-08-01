
import emailjs, { EmailJSResponseStatus } from "emailjs-com";


interface EmailProps {
  nome: string;
  email: string;
  mensagem: string;
}


export const sendEmail = ({nome, email, mensagem}: EmailProps) => {
    const templateParams = {
      nome: nome,
      email: email,
      mensagem: mensagem,
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
          return templateParams
        },
        (error) => {
          console.log(error.text);
        }
      );
      return templateParams
  }
