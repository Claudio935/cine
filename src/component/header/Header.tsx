import styled from "styled-components";
interface Props {
  padding?: string;
  background?: string;
  columns?: number;
  width?: string;
  margin?: string;
  image?: string;
  height?: string;
}
const Header = styled.header<Props>`
  display: flex;
  height: ${({ height }) => (height ? height : "100%")};
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ background }) => background};
`;

export default Header;
