import styled, { keyframes } from "styled-components";

interface Props {
  height?: string;
  width?: string;
  widthLowResolution?: string;
  heightLowResolution?: string;
  aniType?: string;
  border?: string;
}
const breatheAnimation = keyframes`
  0% {   
    box-shadow: 2px 0px 2px 1px  red;
    

  }
  30% {  box-shadow: 0px 2px 2px 1px  red;}
  50% {  box-shadow: -2px 0px 2px 1px  red;}
  70% {  box-shadow: 0px -2px 2px 1px  red; }
  100% {box-shadow: 2px 0px 2px 1px  red; }
 `;
const animationType = (type?: string) => {
  switch (type) {
    case "breathe":
      return breatheAnimation;
    default:
      return "";
  }
};
const CircleImage = styled.img<Props>`
  border-radius: 100%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border: ${({ border }) => border};
  animation-name: ${({ aniType }) => animationType(aniType)};
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  @media (max-width: 768px) {
    width: ${({ widthLowResolution, width }) =>
      widthLowResolution ? widthLowResolution : width};
    height: ${({ heightLowResolution, height }) =>
      heightLowResolution ? heightLowResolution : height};
  }
`;

export default CircleImage;
