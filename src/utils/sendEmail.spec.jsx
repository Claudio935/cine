import { sendEmail } from "./sendEmail";
import "@testing-library/jest-dom";
let template = {
  nome: "teste",
  email: "testagem",
  mensagem: "mensagem do texto",
};
describe("sendEmail", () => {
  it("should call function sendEMail and return template for sucess", () => {
    expect.assertions(1);
    expect(sendEmail(template)).toEqual(template);
  });
});
