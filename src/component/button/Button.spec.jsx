import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import{ Button} from "./Button";
import "@testing-library/jest-dom";

describe("<Button />", () => {
  it("should render button with text", () => {
    render(<Button>click me</Button>);

    const button = screen.getByText("click me");
    expect(button).toBeInTheDocument();
  });
  it("should call handleclick with click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>click me</Button>);
    const button = screen.getByText("click me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
