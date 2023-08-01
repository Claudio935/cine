import { styled } from "styled-components";
import { BoxColumn, BoxRow } from "../../component/box/Box";
import Paragraph from "../../component/texts/Paragraph";
import SubTitle from "../../component/texts/SubTtitle";
import { arrayComentario } from "./comentario";

const ContainerModal = styled(BoxColumn)`
  background-color: #000;
  position: fixed;
  width: 40%;
  height: 50%;
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

const ContainerText = styled(BoxColumn)`
  border-radius: 3px;
  box-shadow: 0px 0px 1px 1px #6d1238;
  height: 50%;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
  width: 8px;
  height: 15px;
}

/* A cor da barra de rolagem */
&::-webkit-scrollbar-thumb {
  background-color: #A06094;
  border-radius: 3px;
}

/* A espessura da barra de rolagem */
&::-webkit-scrollbar-thumb:hover {
  background-color: #D3467F;
  

}

`;
const BoxText = styled(BoxColumn)`
  justify-content: flex-start;
  block-size: auto;
`;

const ParagraphModalClose = styled(Paragraph)`
  color: #fff;
  margin: 0px;
  cursor: pointer;
`;

interface Props {
  openModal: Boolean;
  handleClick?: () => void;
  onClose: () => void;
}

export const ModalComentarios: React.FC<Props> = ({
  openModal,
  handleClick,
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
        <SubTitle>Comentários:</SubTitle>
        <ContainerText>
        
          {arrayComentario.map((item, index) => {
            return (
              <BoxText key={index}>
                <Paragraph>{item.nome}</Paragraph>
                <Paragraph>{item.comentario}</Paragraph>
              </BoxText>
            );
          })}
         
        </ContainerText>
      </ContainerModal>
    </form>
  );
};
