import React from "react";
import { render, screen } from "@testing-library/react";
import CardSlider from "./CardSlider";
import "@testing-library/jest-dom";

const cardMock = [
  {
    title: "teste 1",
    imageId: 12,
    backdrop_path: "img1",
  },
  {
    title: "teste 2",
    imageId: 13,
    backdrop_path: "img2",
  },
];

describe("<CardSlider />", () => {
  it("should render CardSlider with titles and images", () => {
    render(<CardSlider dataCard={cardMock} title={"primeiro teste"} />);

    const title = screen.getByText("primeiro teste");
    const firstCardTitle = screen.getByText("teste 1");
    const secondCardTitle = screen.getByText("teste 2");

    expect(title).toBeInTheDocument();
    expect(firstCardTitle).toBeInTheDocument();
    expect(secondCardTitle).toBeInTheDocument();

    const images = screen.getAllByRole("img");

    expect(images.length).toEqual(2);
    expect(images[0]).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/originalimg1"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/originalimg2"
    );
  });

  
});
