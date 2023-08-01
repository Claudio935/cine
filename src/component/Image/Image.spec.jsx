import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Image from "./Image";
import "@testing-library/jest-dom";

describe("<Image />", () => {
  it("should render Image with text", () => {
    render(<Image src="image/image.png" />);
    expect.assertions(2)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("src", "image/image.png");
  });
});
