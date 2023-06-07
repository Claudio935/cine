import styled from "styled-components";
import { InterfaceProps } from "../../interface/interfaceProps";

const Img = styled.img<InterfaceProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  z-index: ${({ index }) => index};
  border-radius: ${({ radius }) => radius};
  object-fit: ${({ object }) => object?.fit};
`;

export default Img;
