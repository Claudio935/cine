import styled from "styled-components";
import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;

  width: 100%;
  height: 100%;
  margin: 0px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;

  width: 100%;
`;

export const BoxBaseSlider = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
  align-items: center;
  justify-content: space-between;
  padding: 0px;

  width: 2500px;

  @media (max-width: 768px) {
    display: flex;

    align-items: center;
    position: intital;

    direction: row;
    width: 2500px;
    margin: 80px 0px 0px 0px2500px;
  }
`;
export const ContainerBoxSlider = styled(BoxRow)`
  position: relative;
  height: 350px;
  @media (max-width: 768px) {
    display: flex;

    align-items: center;
    position: intital;
  }
`;
export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  margin: 0px;
  place-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ButtonLeft = styled.button`
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
  top: 45%;
  left: 0px;
  z-index: 3;
  cursor: pointer;
`;
const ButtonRight = styled.button`
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
  top: 45%;
  right: 0px;
`;

export const BoxSlider = ({ ...props }) => {
  const [showButton, setShowButton] = useState(false);
  let intervalo: NodeJS.Timer;

  const containerRef = useRef<HTMLDivElement>(null);
  const prev = () => {
    intervalo = setInterval(
      () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft -= 100;
        }
      },

      100
    );
  };

  const next = () => {
    intervalo = setInterval(
      () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 100;
        }
      },

      100
    );
  };
  const mouseOut = () => {
    clearInterval(intervalo);
  };

  return (
    <ContainerBoxSlider
      onMouseOver={() => setShowButton(true)}
      onMouseOut={() => setShowButton(false)}
    >
      {showButton && (
        <ButtonLeft
          onMouseOver={prev}
          onMouseOut={mouseOut}
          data-testid="prev-button"
        >
          <FaArrowLeft />
        </ButtonLeft>
      )}
      <BoxBaseSlider ref={containerRef} data-testid="container-slider">
        {props.children}
      </BoxBaseSlider>
      {showButton && (
        <ButtonRight
          onMouseOver={next}
          onMouseOut={mouseOut}
          data-testid="next-button"
        >
          <FaArrowRight />
        </ButtonRight>
      )}
    </ContainerBoxSlider>
  );
};


export const BoxImageText = styled(BoxRow)`
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BoxText = styled(BoxColumn)`
  width: 50%;
  padding: 0px 80px;
`;