import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Card, CardInfo } from "./Card";
("./Card");
import "@testing-library/jest-dom";


describe("<Card />", () => {
  it("should render Card with text and img", () => {
    render(<Card img="image/image.png" title="teste1" subtitle="teste2" />);

    expect.assertions(2);
    expect(screen.getByText("teste1")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "image/image.png");
  });
});


describe("<CardInfo />", () => {
  it("should render CardInfo with text and image", () => {
    render(<CardInfo img="image/image.png" title="teste1" subtitle="teste2" />);

    expect.assertions(4);
    expect(screen.getByText("teste1")).toBeInTheDocument();
    expect(screen.getByText("teste2")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "image/image.png");
  });
});
