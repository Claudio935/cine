import Header from "../../../component/header/Header";
import { styled } from "styled-components";
import { BoxColumn } from "../../../component/box/Box";
import Slider from "../../../component/slider/Slider";



const ContainerHeader = styled(BoxColumn)`
height:700px;
`;

function HeaderView() {
  const cinema1: string = require("../../../assets/image/cinema1.jpg");
  const cinema2: string = require("../../../assets/image/cinema2.jpg");
  const cinema3: string = require("../../../assets/image/cinema3.jpg");

  const sliderObject = [
    {
      image: cinema1,
      titleText: "New Cine",
      subtitletext: "Aproveite os grandes sucessos do cinema",
      paragraphText: "Viva essa alegria!!",
      align: "left"
    },
    {
      image: cinema2,
      titleText: "Não tem o que fazer no final de semana?",
      subtitletext: " Venha para o cinema !",
      paragraphText: "",
      align: "left"
    },
    {
      image: cinema3,
      titleText: "Sem dinheiro para comprar a pipoca?",
      subtitletext: "Pipoca de graça nas quartas-feiras!",
      paragraphText: "",
      align: "left",
    },
  ];
 

  return (
    <Header>
      <ContainerHeader >
        <Slider config={sliderObject}></Slider>
      </ContainerHeader>
    </Header>
  );
}

export default HeaderView;
