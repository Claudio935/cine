import styled from "styled-components";
import { InterfaceProps } from "../../interface/interfaceProps";

const Aside = styled.aside<InterfaceProps>`
  width: ${({ width }) => width};
  background: ${({ background }) => (background ? background : "#0000")};
`;

export default Aside;
