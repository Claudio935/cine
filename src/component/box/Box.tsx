import styled, { keyframes } from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { InterfaceProps } from "../../interface/interfaceProps";
import React, { useState } from "react";

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
const animationRotateX = (
  startPosition?: string,
  endPosition?: string
) => keyframes`
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
const animationRotateY = (
  startPosition?: string,
  endPosition?: string
) => keyframes`
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
    justify?.content ? justify.content : "center"};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  background: ${({ background }) => background};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  border-radius: ${({ radius }) => (radius ? radius : "")};
  position: ${({ position }) => position};
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  animation: ${({ animation }) =>
    animationType(animation?.name, animation?.start, animation?.final)};
  animation-duration: ${({ animation }) => `${animation?.duration}`};
  animation-iteration-count: ${({ animation }) => `${animation?.recurrence}`};
  transform-origin: ${({ animation }) =>
    `${animation?.origin?.x} ${animation?.origin?.y}`};
  box-sizing: ${({ boxSizing }) => `${boxSizing}`};
  border: ${({ border }) => `${border}`};
  backface-visibility: ${({ backface }) => `${backface}`};
  &:hover {
    transform: ${({ hover }) => hover?.scale};
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
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
  animation: ${({ animation }) =>
    animationType(animation?.name, animation?.start, animation?.final)};
  animation-duration: ${({ animation }) => `${animation?.duration}`};
  animation-iteration-count: ${({ animation }) => `${animation?.recurrence}`};
  transform-origin: ${({ animation }) =>
    `${animation?.origin?.x} ${animation?.origin?.y}`};
  box-sizing: ${({ boxSizing }) => `${boxSizing}`};
  border: ${({ border }) => `${border}`};
  &:hover {
    transform: ${({ hover }) => hover?.scale};
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: intital;
  }
`;
export const BoxBaseSlider = styled.div<InterfaceProps>`
  display: flex;
  flex-direction: row;
  height: 500px;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 20px;
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
  animation: ${({ animation }) =>
    animationType(animation?.name, animation?.start, animation?.final)};
  animation-duration: ${({ animation }) => `${animation?.duration}`};
  animation-iteration-count: ${({ animation }) => `${animation?.recurrence}`};
  transform-origin: ${({ animation }) =>
    `${animation?.origin?.x} ${animation?.origin?.y}`};
  box-sizing: ${({ boxSizing }) => `${boxSizing}`};
  border: ${({ border }) => `${border}`};
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
  place-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Button = styled.button<InterfaceProps>`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  opacity: 0.4;
  background: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: ${({ left }) => (left ? left : "")};
  right: ${({ right }) => (right ? right : "")};
  z-index: 3;
  cursor: pointer;
`;

export const BoxSlider = ({ ...props }) => {
  const [showButton, setShowButton] = useState(false);
  let intervalo: NodeJS.Timer;
  const contentElement = document.getElementById(`content${props.id}`);
  const prev = () => {
    intervalo = setInterval(
      () => {
        if (!!contentElement) {
          contentElement.scrollLeft -= 100;
        }
      },

      100
    );
  };

  const next = () => {
    intervalo = setInterval(
      () => {
        if (!!contentElement) {
          contentElement.scrollLeft += 100; // Valor do deslocamento em pixels
        }
      },

      100
    );
  };
  const mouseOut = () => {
    clearInterval(intervalo);
  };

  return (
    <BoxRow
      position="relative"
      onMouseOver={() => setShowButton(true)}
      onMouseOut={() => setShowButton(false)}
    >
      {showButton && (
        <Button
          style={{ top: "45%", left: "0px" }}
          onMouseOver={prev}
          onMouseOut={mouseOut}
        >
          <FaArrowLeft />
        </Button>
      )}
      <BoxBaseSlider
        id={`content${props.id}`}
        justify={{ content: "space-between" }}
      >
        {props.children}
      </BoxBaseSlider>
      {showButton && (
        <Button
          style={{ top: "45%", right: "0px" }}
          onMouseOver={next}
          onMouseOut={mouseOut}
        >
          <FaArrowRight />
        </Button>
      )}
    </BoxRow>
  );
};
