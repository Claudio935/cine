import { styled } from "styled-components";
import { BoxColumn, BoxImageText, BoxText } from "../../component/box/Box";
import Slider from "../../component/slider/Slider";
import Section from "../../component/section/Section";
import Paragraph from "../../component/texts/Paragraph";
import { ImageText } from "../../component/Image/Image";
import Title from "../../component/texts/Title";

const ContainerHeader = styled(BoxColumn)`
  height: 700px;
  &h1 {
    font-size: 20px;
  }
`;

const Promocoes = () => {
  const popcorn: string = require("../../assets/image/popcorn2.jpg");
  const brinquedos: string = require("../../assets/image/brinquedos.jpg");
  const namorados: string = require("../../assets/image/namorados.jpg");

  const sliderObject = [
    {
      image: popcorn,
      titleText: "Sem dinheiro da pipoca!",
      subtitletext: "Pipoca de graça nas quartas-feiras!",
      align: "left",
    },
    {
      image: brinquedos,
      titleText: "Gosta de brindes?",
      subtitletext:
        "Compre os lanches selecionados da nossa lanchonete e ganhe um brinquedo do filme em destaque!",
    },
    {
      image: namorados,
      titleText: "Vai ao cinema com a namorada(o)?",
      subtitletext: "Nas quintas-feiras, Na compra de um ingresso ganhe outro!",
    },
  ];

  return (
    <>
      <ContainerHeader>
        <Slider config={sliderObject}></Slider>
      </ContainerHeader>
      <Section>
        <BoxColumn>
          <BoxImageText>
            <ImageText src={popcorn} />
            <BoxText>
              <Title>Pipoca de graça!</Title>
              <Paragraph>
                Aproveite a incrível promoção de pipoca de graça todas as
                quartas-feiras! Aqui no nosso cinema, a diversão não para nas
                telonas, e para tornar sua experiência ainda mais especial,
                estamos oferecendo a todos os nossos clientes uma irresistível
                pipoca de cortesia durante todo o dia. Traga seus amigos,
                familiares ou venha sozinho desfrutar dos filmes mais recentes e
                clássicos favoritos, acompanhados do petisco mais querido do
                cinema, sem pagar nada a mais por isso. Delicie-se com a pipoca
                fresquinha e estoure de alegria com essa oferta imperdível.
                Garanta seu lugar na fila, venha nos visitar nas quartas-feiras
                e mergulhe em uma experiência cinematográfica completa com a
                pipoca por nossa conta. Esperamos você para uma sessão
                inesquecível!
              </Paragraph>
            </BoxText>
          </BoxImageText>
          <BoxImageText>
          <BoxText>
              <Title>Ganhe seu brinde!</Title>
              <Paragraph>
                Não perca a incrível promoção no nosso cinema! Agora, na compra
                de um lanche delicioso, você ganha um brinde exclusivo dos
                filmes que estão em cartaz. Essa oferta especial combina o
                melhor da gastronomia com a magia do cinema, proporcionando uma
                experiência única e divertida para todos os nossos clientes.
                Escolha entre uma seleção de lanches saborosos, desde
                hambúrgueres suculentos até opções vegetarianas e, ao fazer seu
                pedido, receba um brinde temático relacionado aos filmes
                emocionantes que estão sendo exibidos. É uma oportunidade
                imperdível de saborear uma refeição deliciosa enquanto leva para
                casa uma lembrança especial dessa noite memorável no cinema.
                Traga seus amigos e familiares e mergulhe nessa jornada
                cinematográfica repleta de sabor e diversão. Aproveite a
                promoção por tempo limitado e viva momentos inesquecíveis
                conosco!
              </Paragraph>
            </BoxText>
            <ImageText src={brinquedos} />
          </BoxImageText>
          <BoxImageText>
            <ImageText src={namorados} />
            <BoxText>
            <Title>Vai pro cinema? leve seu namorado(a)!</Title>
              <Paragraph>
                Desfrute de uma promoção apaixonante em nossas quintas-feiras de
                cinema! Ao comprar um ingresso, você ganha outro para
                compartilhar com seu namorado(a). Essa oferta especial é uma
                ótima oportunidade para curtir as últimas estreias e clássicos
                do cinema junto da pessoa que você ama. Vocês poderão vivenciar
                momentos inesquecíveis lado a lado, imersos em histórias
                emocionantes na telona. Aproveite esse momento romântico para
                fortalecer os laços e criar memórias inestimáveis, tornando suas
                quintas-feiras ainda mais especiais. Traga seu(a) namorado(a) e
                aproveitem essa experiência cinematográfica única juntos, com um
                ingresso de cortesia como símbolo do amor que os une. Essa
                promoção é por tempo limitado, portanto, não perca a
                oportunidade de compartilhar a magia do cinema com quem faz seu
                coração bater mais forte. Venham nos visitar e celebrem o amor
                no escurinho do cinema!
              </Paragraph>
            </BoxText>
          </BoxImageText>
        </BoxColumn>
      </Section>
    </>
  );
};

export default Promocoes;
