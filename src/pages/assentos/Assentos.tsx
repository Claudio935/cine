import { styled } from "styled-components";
import { useContext } from "react";
import { Img } from "../../component/Image/Image";
import { BoxColumn, BoxRow } from "../../component/box/Box";
import Paragraph from "../../component/texts/Paragraph";
import { MovieContext } from "../../contexts/movieProvider/context"
import { loadArrayCadeira} from "../../contexts/movieProvider/actions";


const ImageIcon = styled(Img)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media (max-width: 768px) {
      width:20px;
    height: 20px;
  }
  @media (max-width: 600px) {
      width:15px;
    height: 15px;
   
  }
`;
const LetraAssento = styled(Paragraph)`
    width:40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width:20px;
    height: 20px;
    font-size: 12px;
  }
 
   
`;
const NumeroAssento = styled(Paragraph)`
    width:40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width:20px;
    height: 20px;
    font-size: 12px;
  }
  @media (max-width: 600px) {
      width:15px;
    height: 15px;
    font-size: 8px;
  }
`;
const Tela = styled(BoxRow)`
    width: 85%;
    background: #b00485;
    height:40px;
    margin-left: 40px;
    @media (max-width: 768px) {
     margin-left: 0px;
     width: 80%;
  }
    
`;
export const Assentos = () => {
  const assento: string = require("../../assets/image/assento.png");

  const CadeiraLinha = Array.from({ length: 24 });
  const CadeiraColuna = ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A","" ];

  

  const {state, setState} = useContext( MovieContext)
  const {ingresso} = state;
  const {cadeiras} = ingresso

  const handleClickAssento = (assentoSelecionado:String) =>{
   
    if(cadeiras.includes(assentoSelecionado)){

        loadArrayCadeira(setState, {ingresso:{ ...ingresso,
          cadeiras: cadeiras.filter((item)=> item !== assentoSelecionado)}})

    }else{
      if(cadeiras.length === 5){
        window.alert("Sò pode até 5 lugares")
        return
      }
      
        loadArrayCadeira(setState, {  ingresso:{...ingresso, cadeiras: [...cadeiras , assentoSelecionado] }})
      
      
    }
  }
  return (
    <BoxColumn>
      {CadeiraColuna.map((linha, index) => {
        return (
          <BoxRow key={index}>
            
            <LetraAssento >{linha}</LetraAssento>
            
            {CadeiraLinha.map((coluna, index) => {
                if(linha !== ""){
                    return (
                        <ImageIcon
                          src={assento}
                          style={{ background: cadeiras.includes(`${linha}${index}`)?"red": "#fff" }}
                          key={index}
                          onClick={()=>handleClickAssento(`${linha}${index}`)}
                        />
                      );
                }else{
                    return <NumeroAssento key={index}>{index}</NumeroAssento>;
                }
             
            })}
          </BoxRow>
        );
      })}
      <BoxRow >
     
      </BoxRow>
      <Tela >
        <Paragraph>
            Tela
        </Paragraph>
      </Tela>
    </BoxColumn>
  );
};

export default Assentos;
