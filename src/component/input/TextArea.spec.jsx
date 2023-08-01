import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextArea from "./TextArea";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

describe("<TextArea />", () => {
  it("should render TextArea with text and button", () => {
  
    render(<TextArea placeholder="teste"/>);
    const Textarea = screen.getByPlaceholderText("teste");
    expect(Textarea).toBeInTheDocument()

  });



  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextArea placeholder="teste" onChange={fn} />);
    expect.assertions(2)
    const Textarea = screen.getByPlaceholderText("teste");
    const value1 = 'valor1'
    userEvent.type(Textarea, value1)
    expect(Textarea.value).toBe(value1)
    expect(fn).toHaveBeenCalledTimes(value1.length)

    
   

  });

});