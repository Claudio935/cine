import { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { styled } from "styled-components";
import Title from "../texts/Title";
import { BoxColumn } from "../box/Box";
import SubTitle from "../texts/SubTtitle";

interface imageObject {
  image?: string;
  titleText?: string;
  subtitletext?: string;
  paragraphText?: string;
  align?: string;
}
interface Props {
  config: imageObject[];

  titleText?: string;
  subtitletext?: string;
  paragraphText?: string;
}

const BoxSlideTextRight = styled(BoxColumn)`
  position: absolute;
  top: 0px;
  align-items: flex-end;
  justify-content: center;
  margin: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient( to right bottom, rgb(207 18 133), rgb(208 6 145 / 7%),rgb(208 6 145 / 84%), rgb(198 5 209) );
`;
const BoxSlideTextLeft = styled(BoxSlideTextRight)`
  align-items: flex-start;
  background:linear-gradient( to left bottom, rgb(207 18 133), rgb(208 6 145 / 7%),rgb(208 6 145 / 84%), rgb(198 5 209) );

`;
const TitleSlide = styled(Title)`
  font-size: 78px;
  font-weight: 800;
  margin: 0px;
  text-align: left;
  color: rgb(255 249 0);
  @media (max-width: 768px) {
    font-size: 68px;
  }
`;
const SubTitleSlide = styled(SubTitle)`
  font-size: 46px;
  font-weight: 800;
  text-align: left;
  color: #ff6000;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;
const Button = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  opacity: 0.4;
  background: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  cursor: pointer;
`;
const BoxText = styled(BoxColumn)`
  width: 40%;
  height: 40%;
  margin-left: 60px;
  align-items: flex-start;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  object-fit: cover;
`;
interface State {
  currentIndex: number;
}

class Slider extends Component<Props, State> {
  intervalId: NodeJS.Timeout | null = null;
  constructor(props: Props) {
    super(props);
    // Inicialização de estado e outras configurações
    this.state = {
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    const { config } = this.props;
    this.setState(({ currentIndex }) => ({
      currentIndex: currentIndex === config.length - 1 ? 0 : currentIndex + 1,
    }));
  };

  prevSlide = () => {
    const { config } = this.props;
    this.setState(({ currentIndex }) => ({
      currentIndex: currentIndex === 0 ? config.length - 1 : currentIndex - 1,
    }));
  };

  componentDidMount(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Parar o intervalo quando o componente for desmontado
    }
  }

  render() {
    const { config } = this.props;

    const objectImage = config[this.state.currentIndex];
    const { image, titleText, subtitletext } = objectImage;
    return (
      <ImgContainer>
        <Button
          style={{ top: "50%", left: "0px" }}
          onClick={this.prevSlide}
          data-testid="prev-button"
        >
          <FaArrowLeft />
        </Button>
        <Img src={image} alt="Slider" />
        {objectImage.align === "right" ? (
          <BoxSlideTextRight>
            <BoxText>
              {titleText && <TitleSlide>{titleText}</TitleSlide>}
              {subtitletext && <SubTitleSlide>{subtitletext}</SubTitleSlide>}
            </BoxText>
          </BoxSlideTextRight>
        ) : (
          <BoxSlideTextLeft>
            <BoxText>
              {titleText && <TitleSlide>{titleText}</TitleSlide>}
              {subtitletext && <SubTitleSlide>{subtitletext}</SubTitleSlide>}
            </BoxText>
          </BoxSlideTextLeft>
        )}
        <Button
          style={{ top: "50%", right: "0px" }}
          onClick={this.nextSlide}
          data-testid="next-button"
        >
          <FaArrowRight />
        </Button>
      </ImgContainer>
    );
  }
}

export default Slider;
