import styled from 'styled-components';
import { InterfaceProps } from '../../interface/interfaceProps';

const Title  = styled.h1<InterfaceProps>`
  color:${({color})=>color? color:"#fff"};
  margin: ${({margin}) => (margin ? margin : '0px')};;
  font-size: ${({fontSize}) => (fontSize ? fontSize : '')};
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
export default Title