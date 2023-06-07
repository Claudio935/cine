import Header from "../header/Header";
import { BoxColumn } from "../box/Box";
import Slider from "../slider/Slider";

function HeaderView() {
  const cinema1: string = require("../../assets/image/cinema1.svg").default;
  const cinema2: string = require("../../assets/image/cinema2.svg").default;
  const cinema3: string = require("../../assets/image/cinema3.svg").default;

  const sliderObject = [
    {
      image: cinema1,
      titleText: "New Cine",
      subtitletext: "Aproveite os grandes sucessos do cinema",
      paragraphText: "Viva essa alegria!!",
      titleStyle: {
        color: "#fff",
        fontSize: "98px",
        shadow: "black 0.05em 0.1em 0.3em",
        margin: "0px 0px 30px 0px",
      },
      subTitleStyle: {
        color: "#fff",
        fontSize: "52px",
        justify: {
          text: "center",
        },
        shadow: "black 0.05em 0.1em 0.3em",
        fontWeight: 700,
      },
      paragraphStyle: {
        color: "#fff",
        fontSize: "32px",
        fontWeight: 900,
        shadow: "black 0.05em 0.1em 0.3em",
      },
      boxText: {
        justifycontent: "center",
        align: "center",
        width: "35%",
        margin: "0px 0px 0px 180px",
      },
      boxTextContainer: {
        justifycontent: "flex-start",
        align: "flex-start",
      },
    },
    {
      image: cinema2,
      titleText: "Não tem o que fazer no final de semana?",
      subtitletext: " Venha para o cinema !",
      paragraphText: "",
      titleStyle: {
        color: "#fff",
        fontSize: "70px",
        shadow: "black 0.05em 0.1em 0.3em",
        margin: "0px 0px 30px 0px",
        justify: {
          text: "center",
        },
      },
      subTitleStyle: {
        color: "#fff",
        fontSize: "40px",
        shadow: "black 0.05em 0.1em 0.3em",
        fontWeight: 700,
        justify: {
          text: "center",
        },
      },
      paragraphStyle: {
        color: "#fff",
        fontSize: "22px",
        fontWeight: 700,
        shadow: "black 0.05em 0.1em 0.3em",
        background: "#000",
      },
      boxText: {
        justifycontent: "center",
        align: "center",
        width: "38%",
        margin: "0px 0px 0px 180px",
      },
      boxTextContainer: {
        justifycontent: "flex-start",
        align: "flex-start",
      },
    },
    {
      image: cinema3,
      titleText: "Sem dinheiro para comprar a pipoca?",
      subtitletext: "Pipoca de graça nas quartas-feiras!",
      paragraphText: "",
      titleStyle: {
        color: "#fff",
        fontSize: "70px",
        shadow: "black 0.05em 0.1em 0.3em",
        margin: "0px 0px 30px 0px",
        justify: {
          text: "center",
        },
      },
      subTitleStyle: {
        color: "#fff",
        fontSize: "40px",
        shadow: "black 0.05em 0.1em 0.3em",
        fontWeight: 700,
        justify: {
          text: "center",
        },
      },
      paragraphStyle: {
        color: "#fff",
        fontSize: "22px",
        fontWeight: 700,
        shadow: "black 0.05em 0.1em 0.3em",
      },
      boxText: {
        justifycontent: "center",
        align: "center",
        width: "38%",
        margin: "0px 0px 0px 180px",
      },
      boxTextContainer: {
        justifycontent: "flex-start",
        align: "flex-end",
      },
    },
  ];

  return (
    <Header background="#ffff">
      <BoxColumn background="#ffff" height="700px">
        <Slider config={sliderObject}></Slider>
      </BoxColumn>
    </Header>
  );
}

export default HeaderView;
