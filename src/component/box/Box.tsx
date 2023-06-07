import styled, { keyframes } from "styled-components";
import { InterfaceProps } from "../../interface/interfaceProps";

const blink = () => keyframes`
 0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
 `;
const slide = (startPosition?: string, endPosition?: string) => keyframes`
  0% {
    transform: translateX(${startPosition});
  }
  
  100% {
    transform: translateX(${endPosition});
  }
 `;
const animationRotateX = (startPosition?: string, endPosition?: string) => keyframes`
0% {
  transform: rotate(${startPosition});
}
50% {
  transform: rotate(${endPosition});
}

100% {
  transform: rotate(${startPosition});
}
`;
const animationRotateY = (startPosition?: string, endPosition?: string) => keyframes`
0% {
  transform: rotateY(${startPosition});
}


100% {
  transform: rotateY(${endPosition});
}
`;

const animationType = (

  type?: string,
  startPosition?: string,
  endPosition?: string
) => {
  
  switch (type) {
    case "blink":
      return blink();
    case "slide":
      return slide(startPosition, endPosition);
      case "rotatex":
      return animationRotateX(startPosition, endPosition);
      case "rotatey":
      return animationRotateY(startPosition, endPosition);
   
  
}
};
export const BoxColumn = styled.div<InterfaceProps>`
 

  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) =>
    justify?.content ? justify.content: "center"};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  background: ${({ background }) => (background ? background : "")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  border-radius: ${({ radius }) => (radius ? radius : "")};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  animation: ${({ animation }) => animationType( animation?.name, animation?.start, animation?.final)};
  animation-duration: ${({ animation }) => `${animation?.duration}`};
  animation-iteration-count: ${({ animation }) => `${animation?.recurrence}`};
  transform-origin: ${({ animation }) => `${animation?.origin?.x} ${animation?.origin?.y}`};
  box-sizing: ${({ boxSizing }) => `${boxSizing}`};
  border:${({ border }) => `${border}`};
 backface-visibility: ${({ backface }) => `${backface}`};
 
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    position: initial;
  }
`;

export const BoxRow = styled.div<InterfaceProps>`
  
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) =>
    justify?.content ? justify.content : "center"};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  background: ${({ background }) => (background ? background : "")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: ${({ radius }) => (radius ? radius : "")};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  animation: ${({ animation}) => animationType( animation?.name, animation?.start, animation?.final)};
  animation-duration: ${({ animation }) => `${animation?.duration}`};
  animation-iteration-count: ${({ animation }) => `${animation?.recurrence}`};
  transform-origin: ${({ animation }) => `${animation?.origin?.x} ${animation?.origin?.y}`};
  box-sizing: ${({ boxSizing }) => `${boxSizing}`};
  border:${({ border }) => `${border}`};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: intital;
  }
`;
export const BoxGrid = styled.div<InterfaceProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: 10px;
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  border-radius: ${({ radius }) => (radius ? radius : "")};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
