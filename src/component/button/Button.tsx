import styled from "styled-components";

export const Button = styled.button`
  border-radius: 15px;
  width: 100%;
  background: #6d1238;
  border: none;
  color: #fff;
  height: 30px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-color: #a06094;
  }
`;
export const ButtonHorario = styled.button`
  width: 150px;
  margin: 20px;
  height: 40px;
  background: #6d1238;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-color: #a06094;
  }
`;
