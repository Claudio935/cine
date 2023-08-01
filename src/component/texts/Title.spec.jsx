import React from "react";
import { render,  screen } from "@testing-library/react";
import Title from "./Title";
import "@testing-library/jest-dom";

describe("<Title />", () => {
  it("should render Title with text", () => {
    render(<Title >Test</Title>);
    expect.assertions(2)
    expect(screen.getByRole("heading")).toHaveTextContent("Test");
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
