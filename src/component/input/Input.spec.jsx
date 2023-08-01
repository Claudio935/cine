import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./Input";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("<Input />", () => {
  it("should render Input ", () => {
    render(<Input placeholder="teste" />);
    const input = screen.getByPlaceholderText("teste");
    expect(input).toBeInTheDocument();
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<Input placeholder="teste" onChange={fn} />);
    expect.assertions(2)
    const input = screen.getByPlaceholderText("teste");
    const value1 = "valor1";
    userEvent.type(input, value1);
    expect(input.value).toBe(value1);
    expect(fn).toHaveBeenCalledTimes(value1.length);
  });
});
