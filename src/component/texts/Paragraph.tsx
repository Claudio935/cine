import styled from 'styled-components'

interface ParagraphProps {
    fontWeight?: number;
    justify?:string;
    fontSize?:string;
    margin?:string;
    background?:string;
    shadow?: string;
}
const Paragraph = styled.p<ParagraphProps>`
  color:${({color}) => (color )};
  margin: ${({margin}) => (margin )};
  text-align: ${({justify}) => (justify === "justificado" ? 'justify' : '')};
  text-justify: ${({justify}) => (justify === "justificado" ? 'inter-word' : '')};
  font-weight: ${({ fontWeight}) => fontWeight};
  font-size: ${({ fontSize }) => (fontSize )};
  background:${({background}) => (background)};
  text-shadow: ${({shadow}) => (shadow)};
`;

export default Paragraph