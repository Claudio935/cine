import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Slider from "./Slider";
import "@testing-library/jest-dom";
import exp from "constants";

const sliderObjecktmock = [
  {
    image: "img/img1.png",
    titleText: "title1",
    subtitletext: "subtitle1",
    paragraphText: "paragraph1",
  },
  {
    image: "img/img2.png",
    titleText: "title2",
    subtitletext: "subtitle2",
    paragraphText: "paragraph2",
  },
];

describe("<Slider />", () => {
  it("should render Slider with buttons and texts", () => {
    render(<Slider config={sliderObjecktmock} />);
    expect.assertions(2);
    const prevButton = screen.getByTestId("prev-button");
    const nextButton = screen.getByTestId("next-button");
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
  
  it("should change image in the screen", () => {
    render(<Slider config={sliderObjecktmock} />);
    expect.assertions(6);
    const prevButton = screen.getByTestId("prev-button");
    const nextButton = screen.getByTestId("next-button");

    const img = screen.getByRole("img");

    fireEvent.click(prevButton);
    expect(img.src).toContain("img/img2.png");
    expect(screen.getByText("title2")).toBeInTheDocument();
    expect(screen.getByText("subtitle2")).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(img.src).toContain("img/img1.png");
    expect(screen.getByText("title1")).toBeInTheDocument();
    expect(screen.getByText("subtitle1")).toBeInTheDocument();
    
  });
  
});
