import { render, screen } from "@testing-library/react";
import FooterView from "./FooterView";
import "@testing-library/jest-dom";

describe("<FooterView />", () => {
  it("should render FooterView with texts", () => {
    render(<FooterView />);
    const textRedes = screen.getByText("Redes Sociais");
    const textContato = screen.getByText("Entre em Contato");
    expect(textRedes).toBeInTheDocument();
    expect(textContato).toBeInTheDocument();
  });
});
