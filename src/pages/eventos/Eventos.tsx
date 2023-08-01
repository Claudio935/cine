import { styled } from "styled-components";
import {Img, ImageText} from "../../component/Image/Image";
import { BoxColumn, BoxImageText, BoxText } from "../../component/box/Box";
import Paragraph from "../../component/texts/Paragraph";
import Header from "../../component/header/Header";
import Section from "../../component/section/Section";
import Title from "../../component/texts/Title";
import SubTitle from "../../component/texts/SubTtitle";
import { Button } from "../../component/button/Button";
import { useState } from "react";
import { ModalMovie } from "./ModalMovie";



const ContainerEventos = styled(BoxColumn)`
  width: 100%;
  min-height: 100vh;
`;
const ContainerTextHeader = styled(BoxColumn)`
  width: 50%;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  height: 50%;
  @media (max-width: 768px) {
    top: 0px;
  }
`;

const TitleHeader = styled(Title)`
  margin: 0px;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const SubTitleHeader = styled(SubTitle)`
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const ButtonOrcamento = styled(Button)`
  width: 250px;
`;



const Eventos = () => {
  const [openModalOrcamentoAluguel, setOpenModalOrcamentoAluguel] = useState(false)
  const [local,setLocal] = useState<String>("")
  const eventos = require("../../assets/image/salaCinema.jpg");
  const pessoalEventos = require("../../assets/image/pessoalEventos.jpg");
  const salaoFestas = require("../../assets/image/salaoFestas.jpg");
  const handleClick = (local:String) =>{
    setLocal(local)
    setOpenModalOrcamentoAluguel(true)
  }
  const handleClickOrcamentoAluguel = () =>{
    setOpenModalOrcamentoAluguel(false)
    window.alert("Dados enviados para o nosso sistema, entraremos ainda hoje em contato para enviar o orçamento!!")
  }
  return (
    <ContainerEventos>
      <Header>
        <ContainerTextHeader>
          <TitleHeader>Realize Seu evento conosco!!</TitleHeader>
          <SubTitleHeader>
            Condições especiais feitas especialmente para você!!
          </SubTitleHeader>
        </ContainerTextHeader>
        <Img src={pessoalEventos}></Img>
      </Header>
      <Section>
        <BoxColumn>
          <BoxImageText>
            <ImageText src={eventos} />
            <BoxText>
              <Paragraph>
                Alugar uma sala de cinema é uma opção emocionante e envolvente
                para diversos tipos de eventos e ocasiões especiais. Com seu
                ambiente imersivo e tela grande, uma sala de cinema oferece uma
                experiência única para exibição de filmes, lançamentos de
                produtos, festas privadas, sessões de estreia, palestras e até
                mesmo apresentações corporativas. Além disso, a infraestrutura
                de uma sala de cinema inclui sistemas de som avançados e
                assentos confortáveis, proporcionando um ambiente perfeito para
                entreter e cativar o público. Com a possibilidade de
                personalizar o ambiente de acordo com a temática do evento, o
                aluguel de uma sala de cinema oferece uma atmosfera memorável e
                envolvente, que certamente deixará uma impressão duradoura em
                todos os presentes.
              </Paragraph>
              <ButtonOrcamento onClick={()=>handleClick("cinema")} >Faça seu orçamento!</ButtonOrcamento>
            </BoxText>
          </BoxImageText>
          <BoxImageText>
            <BoxText>
              <Paragraph>
                s salas para aluguel de eventos oferecem conveniência
                inigualável. Com instalações prontas para uso, elas poupam o
                cliente de muitas preocupações logísticas. As salas geralmente
                são equipadas com mesas, cadeiras, iluminação adequada e até
                mesmo decoração básica, permitindo que os organizadores se
                concentrem nos detalhes essenciais do evento. Além disso, muitas
                salas oferecem serviços adicionais, como catering, equipe de
                suporte técnico e organizadores de eventos, para garantir que
                tudo ocorra sem problemas e atenda às expectativas dos
                participantes.
              </Paragraph>
              <ButtonOrcamento onClick={()=>handleClick("cinema")}>Faça seu orçamento!</ButtonOrcamento>
            </BoxText>
            <ImageText src={salaoFestas} />
          </BoxImageText>
         <ModalMovie openModal={openModalOrcamentoAluguel} handleClick={handleClickOrcamentoAluguel} local={local} onClose={()=>setOpenModalOrcamentoAluguel(false)}></ModalMovie>
        </BoxColumn>
      </Section>
     
    </ContainerEventos>
  );
};

export default Eventos;
