import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EnviarEmail from "./EnviarEmail";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

describe("<EnviarEmail />", () => {
  it("should render input ", () => {
  
    render(<EnviarEmail />);
    expect.assertions(6)
    const inputNome = screen.getByPlaceholderText("Nome");
    userEvent.type(inputNome, "teste1")
    expect(inputNome).toBeInTheDocument();
    expect(inputNome).toHaveValue("teste1")
    const inputEmail = screen.getByPlaceholderText("Email");
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, "teste2")
    expect(inputEmail).toHaveValue("teste2")
    const inputMensagem = screen.getByPlaceholderText("Mensagem");
    expect(inputMensagem).toBeInTheDocument();
    userEvent.type(inputMensagem, "teste3")
    expect(inputMensagem).toHaveValue("teste3")


  });

  it("should render button", () => {
  
    render(<EnviarEmail />);
    

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();

  });

  it("should call handleclick with click event", () => {
    render(<EnviarEmail />);
    const button = screen.getByRole("button")
    userEvent.click(button);
    
  });



});