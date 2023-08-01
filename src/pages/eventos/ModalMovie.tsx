import { styled } from "styled-components";
import { BoxColumn, BoxRow } from "../../component/box/Box";
import Paragraph from "../../component/texts/Paragraph";
import Input from "../../component/input/Input";
import { Button } from "../../component/button/Button";


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
  justify-content: space-around;
  box-shadow: 1px 1px 14px 3px #6d1238;
`;
const BoxHeader = styled(BoxRow)`
  width: 100%;
  justify-content: flex-end;
`;
const ParagraphModal = styled(Paragraph)`
  color: #fff;
  margin: 0px;
`;
const ParagraphModalClose = styled(Paragraph)`
  color: #fff;
  margin: 0px;
  cursor: pointer;
`;

const ButtonOrcamento = styled(Button)`
  width: 250px;
`;
interface Props {
  openModal: Boolean;
  handleClick: () => void;
  onClose: () => void;
  local: String;
}
export const ModalMovie: React.FC<Props> = ({
  openModal,
  handleClick,
  local,
  onClose,
}) => {
  return (
    <form onSubmit={handleClick}>
    <ContainerModal
      style={{ visibility: `${openModal ? "visible" : "hidden"}` }}
    >
        
      <BoxHeader>
        <ParagraphModalClose onClick={onClose}>X</ParagraphModalClose>
      </BoxHeader>
      <Input placeholder="Quantas pessoas no evento?" type="number" required></Input>
      {local === "salao" && <Input placeholder="Quantas horas?" type="number"></Input>}
      <Input placeholder="Telefone"  required></Input>
      <ParagraphModal>Dia do evento:</ParagraphModal>
      <Input type="date" placeholder="Qual o dia?" required></Input>
      <ButtonOrcamento >Obter Orçamento</ButtonOrcamento>
      
    </ContainerModal>
    </form>
  );
};
