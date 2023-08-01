import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BoxRow, BoxColumn, BoxGrid, BoxSlider } from "./Box";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("<Box />", () => {
  it("should render BoxColumn ", () => {
    render(<BoxColumn type={"blink"}  />);
    
   
  });
  it("should render BoxRow ", () => {
    render(<BoxRow />);
   
  });
  it("should render BoxGrid", () => {
    render(<BoxGrid />);
  });

  it("should render  buttons of the BoxSlider ", () => {
    render(<BoxSlider id={1} />);
    let container = screen.getByTestId("container-slider");
    expect.assertions(4)
    userEvent.hover(container);
    const prevButton = screen.getByTestId("prev-button");
    const nextButton = screen.getByTestId("next-button");
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    userEvent.unhover(nextButton);
    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });
});
