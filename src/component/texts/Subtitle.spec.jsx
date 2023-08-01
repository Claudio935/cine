import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SubTitle from "./SubTtitle";
import "@testing-library/jest-dom";

describe("<SubTitle />", () => {
  it("should render SubTitle with text", () => {
  render(<SubTitle>Test</SubTitle>);
    expect.assertions(2)
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Test");
   
    
  });
});
