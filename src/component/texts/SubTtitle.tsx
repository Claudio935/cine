import styled from "styled-components";
import { InterfaceProps } from '../../interface/interfaceProps';

interface Props {
  style?: InterfaceProps;
  type?: string;
  children?: string;
  background?: string;
}

const TextH2 = styled.h2<InterfaceProps>`
  color: ${({color})=>color? color:"#fff"};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  font-size: ${({ fontSize }) => (fontSize )};
  font-weight: ${({ fontWeight}) => fontWeight};
  text-align: ${({justify}) => (justify?.text)};
  background:${({background}) => (background)};
  text-shadow: ${({shadow}) => (shadow)};
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
   justify-content: center;
   text-align: center;
  }
`;
const TextH3 = styled.h3<InterfaceProps>`
  color: ${({color})=>color? color:"#fff"};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  font-size: ${({ fontSize }) => (fontSize )};
  font-weight: ${({ fontWeight}) => fontWeight};
  text-align: ${({justify}) => (justify?.text)};
  background:${({background}) => (background)};
  text-shadow: ${({shadow}) => (shadow)};
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
   justify-content: center;
   text-align: center;
  }
`;
const TextH4 = styled.h4<InterfaceProps>`
  color: ${({color})=>color? color:"#fff"};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  font-size: ${({ fontSize }) => (fontSize)};
  font-weight: ${({ fontWeight}) => fontWeight};
  text-align: ${({justify}) => (justify?.text)};
  background:${({background}) => (background)};
  text-shadow: ${({shadow}) => (shadow)};
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
   justify-content: center;
   text-align: center;
  }
`;
const TextH5 = styled.h5<InterfaceProps>`
  color: ${({color})=>color? color:"#fff"};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  font-size: ${({ fontSize }) => (fontSize )};
  font-weight: ${({ fontWeight}) => fontWeight};
  text-align: ${({justify}) => (justify?.text)};
  background:${({background}) => (background)};
  text-shadow: ${({shadow}) => (shadow)};
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
   justify-content: center;
   text-align: center;
  }
`;

const SubTitle: React.FC<Props> = (props) => {
  const {type, style, children} = props
  let Component = TextH2;
 
  switch (type) {
    case "h2":
      Component = TextH2;
      break;
    case "h3":
      Component = TextH3;
      break;
    case "h4":
      Component = TextH4;

      break;
    case "h5":
      Component = TextH5;

      break;

    default:
      break;
  }
  return <Component {...style}>{children}</Component>;
};
export default SubTitle;
