import styled from "styled-components";
import { InterfaceProps } from "../../interface/interfaceProps";

const Button = styled.button<InterfaceProps>`
  background: ${({ background }) => background};
  margin: 0px;
  width: ${({ width }) => width};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  cursor: pointer;
  &:hover {
    background-color: #a06094;
  }
`;

export default Button;
