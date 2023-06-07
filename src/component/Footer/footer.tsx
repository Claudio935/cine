import styled from "styled-components";
import { InterfaceProps } from "../../interface/interfaceProps";

const Footer = styled.footer<InterfaceProps>`
  display: flex;
  height: 40%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 80px 0px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Footer;
