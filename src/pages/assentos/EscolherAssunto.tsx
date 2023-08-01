import { styled } from "styled-components";
import { useContext } from "react";
import { BoxColumn, BoxRow } from "../../component/box/Box";
import Section from "../../component/section/Section";
import Assentos from "./Assentos";
import { MovieContext } from "../../contexts/movieProvider/context"
import Paragraph from "../../component/texts/Paragraph";
import SubTitle from "../../component/texts/SubTtitle";
import { Button } from "../../component/button/Button";
import { Img } from "../../component/Image/Image";
import DontMovie from "../dontMovie/DontMovie";
import Title from "../../component/texts/Title";


const Container = styled(BoxRow)`
  flex-direction: column;
`;
const SectionIngressos = styled(Section)`
height: 100vh;
    position: fixed;
    left: 0px;
    top:0px;
    width: 200px;
    padding:20px;
    box-shadow:1px 1px 15px 10px #6d1238;
    @media (max-width: 768px) {
    position: initial;
    width: 100%;
    padding:0px;
    border-right: 0px;
    box-shadow:0px 0px 0px 0px #6d1238;
  }
`;
const SectionAssentos = styled(Section)`
padding-left:200px;
width: calc(100% - 200px);
@media (max-width: 768px) {
   width: 100%;
   padding:0px;
  }
`;
const BoxIngressos = styled(BoxColumn)`
justify-content: flex-start;
`;
const ImgMovieSelecionado = styled(Img)`
height:200px;
width: 150px;
object-fit: fill;
`;

const EscolherAssento = () => {
  const { state } = useContext(MovieContext)
  if (!state?.movieSelect?.title) {
    return (
      <DontMovie />
    )
  }
  return (
    <Container>
      <SectionIngressos>
        <BoxIngressos >

          <BoxColumn style={{ height: "280px" }}>
            <ImgMovieSelecionado src={`https://image.tmdb.org/t/p/original${state?.movieSelect?.poster_path}`}></ImgMovieSelecionado>
            <Title style={{ fontSize: "13px" }}>{state.movieSelect.title}</Title>
          </BoxColumn>
          <BoxRow>
            <Paragraph>{`${state.ingresso.horario} - ${state.ingresso.sala}`}</Paragraph>

          </BoxRow>
          {state.ingresso.cadeiras?.length > 0 && <SubTitle style={{ fontSize: "14px" }}>Cadeira selecionada</SubTitle>}
          <BoxRow>

            {state.ingresso.cadeiras.map((item, index) => {
              return (
                <Paragraph key={index} style={{ margin: "15px 5px" }}>{`${item}`}</Paragraph>
              )
            })}
          </BoxRow>
          <Button>Comprar</Button>
        </BoxIngressos>


      </SectionIngressos>
      <SectionAssentos >
        <Assentos />
      </SectionAssentos>
    </Container>
  );
};
export default EscolherAssento;
