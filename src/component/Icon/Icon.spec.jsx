import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Icon from "./Icon";
import "@testing-library/jest-dom";

describe("<Icon />", () => {
  it("should render Icon", () => {
    render(<Icon href="https://www.example.com" />);
    expect.assertions(1)

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.example.com"
    );
  });
});
