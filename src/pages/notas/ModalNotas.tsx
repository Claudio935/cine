import { styled } from "styled-components";
import { BoxColumn, BoxRow } from "../../component/box/Box";
import Paragraph from "../../component/texts/Paragraph";
import Input from "../../component/input/Input";
import { Button } from "../../component/button/Button";
import TextArea from "../../component/input/TextArea";
import { useState } from "react";
import SubTitle from "../../component/texts/SubTtitle";

const ContainerModal = styled(BoxColumn)`
  background-color: #000;
  position: fixed;
  width: 40%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 10px 40px 40px 40px;
  justify-content: space-between;
  box-shadow: 1px 1px 14px 3px #6d1238;
`;
const BoxHeader = styled(BoxRow)`
  width: 100%;
  justify-content: flex-end;
`;
const SlideRange = styled(Input)`
  margin: 0px;
  padding: 0px;
  accent-color: #6d1238;
  color: #6d1238;
`;
const DataList = styled.datalist`
  display: flex;
  justify-content: space-between;
  margin: 0px;
  width: 100%;
`;
const Option = styled.option`
  font-weight: 900;
  color: #6d1238;
`;
const ParagraphModalClose = styled(Paragraph)`
  color: #fff;
  margin: 0px;
  cursor: pointer;
`;
const PraragraphNota = styled.p`
  font-size: 13px;
  font-weight: 900;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 3px 3px #e31709;
`;

const ButtonOrcamento = styled(Button)`
  width: 150px;
`;
const BoxNotas = styled(BoxColumn)`
  width: 100%;
  margin: 0px;
  height: 130px;
`;

interface Props {
  openModal: Boolean;
  handleClick?: () => void;
  onClose: () => void;
}
export const ModalNotas: React.FC<Props> = ({
  openModal,
  handleClick,
  onClose,
}) => {
  const [sliderRange, setSliderRange] = useState("0");
  return (
    <ContainerModal
      style={{ visibility: `${openModal ? "visible" : "hidden"}` }}
    >
      <BoxHeader>
        <ParagraphModalClose onClick={onClose}>X</ParagraphModalClose>
      </BoxHeader>
      <SubTitle>Qual sua nota?</SubTitle>

      <BoxNotas>
        <SlideRange
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={sliderRange}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSliderRange(e.target.value)
          }
          list="steplist"
        />

        <DataList id="steplist">
          <Option value="0" label="0"></Option>

          <Option value="10" label="10"></Option>
        </DataList>
        <PraragraphNota>{sliderRange}</PraragraphNota>
      </BoxNotas>

      <SubTitle>Fale como foi sua experiência!!</SubTitle>
      <TextArea
        placeholder="Adicione suas impressões sobre o filme!!"
        rows={8}
      />
      <ButtonOrcamento onClick={handleClick}>Enviar</ButtonOrcamento>
    </ContainerModal>
  );
};
