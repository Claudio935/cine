import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Paragraph from "./Paragraph";
import "@testing-library/jest-dom";

describe("<Paragraph />", () => {
  it("should render Paragraph with text", () => {
    expect.assertions(1)
    const { getByText } = render(<Paragraph >Test</Paragraph>);
    const paragrafoElemento = getByText('Test');
    expect(paragrafoElemento).toBeInTheDocument();
  });
});
