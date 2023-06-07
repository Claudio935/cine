import styled from "styled-components";
import { IconType } from "react-icons";
interface Props {
  height?: string;
  width?: string;
  margin?: string;
  href?: string;
  icon?: IconType;
  color?: string;
}
const Anchor = styled.a<Props>`
  display: flex;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
`;

const Icon: React.FC<Props> = (props) => {
  const { href, width, height, icon, color } = props;
  const IconComponent = icon;
  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      width={width}
      height={height}
    >
      {IconComponent && (
        <IconComponent color={color} style={{ width: width, height: height }} />
      )}
    </Anchor>
  );
};
export default Icon;
