import styled from "styled-components";
import {  ReactElement } from "react";
interface Props {
  href?: string;
  children?: ReactElement;
  color?: string;
}
const Anchor = styled.a<Props>`
  display: flex;
  width:  100%;
  height: 100%;
  margin: 0px;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

const Icon: React.FC<Props> = (props) => {
  const { href,  children } = props;

  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
     
      {children}
      
    </Anchor>
  );
};
export default Icon;
