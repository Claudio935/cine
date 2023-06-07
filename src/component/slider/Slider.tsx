import { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { styled } from "styled-components";
import Title from "../texts/Title";
import { BoxColumn } from "../box/Box";
import SubTitle from "../texts/SubTtitle";
import Paragraph from "../texts/Paragraph";

interface TextBoxProps {
  align?: string;
  justifycontent?: string;
  maginText?: string;
  width?: string;
  margin?: string;
  background?: string;
}
interface TitleProps {
  fontSize?: string;
  color?: string;
  margin?: string;
  background?: string;
  justify?: {
    text?: string;
  };
  shadow?: string;
}
interface SubtitleProps {
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: number;
  background?: string;
  justify?: {
    text?: string;
  };
  shadow?: string;
}
interface ParagraphProps {
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: number;
  justify?: string;
  background?: string;
  shadow?:string;
}
interface imageObject {
  image?: string;
  titleText?: string;
  subtitletext?: string;
  paragraphText?: string;
  titleStyle?: TitleProps;
  subTitleStyle?: SubtitleProps;
  paragraphStyle?: ParagraphProps;
  boxText?: TextBoxProps;
  boxTextContainer?: TextBoxProps;
}
interface Props {
  config: imageObject[];

  titleText?: string;
  subtitletext?: string;
  paragraphText?: string;
}

const BoxSlideText = styled.div<TextBoxProps>`
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justifycontent }) =>
    justifycontent ? justifycontent : "center"};
  margin: ${({ maginText }) => (maginText ? maginText : "0px")};
  width: 100%;
  height: 100%;
  z-index: 2;
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
    const {
      image,
      titleText,
      subtitletext,
      paragraphText,
      titleStyle,
      subTitleStyle,
      paragraphStyle,
      boxText,
      boxTextContainer,
    } = objectImage;
    return (
      <ImgContainer>
        <Button style={{ top: "50%", left: "0px" }} onClick={this.prevSlide}>
          <FaArrowLeft />
        </Button>
        <Img src={image} alt="Slider" />
        <BoxSlideText {...boxTextContainer}>
          <BoxColumn {...boxText}>
            {titleText && <Title {...titleStyle}>{titleText}</Title>}
            {subtitletext && (
              <SubTitle style={{ ...subTitleStyle }}>{subtitletext}</SubTitle>
            )}
            {paragraphText && (
              <Paragraph {...paragraphStyle}>{paragraphText}</Paragraph>
            )}
          </BoxColumn>
        </BoxSlideText>
        <Button style={{ top: "50%", right: "0px" }} onClick={this.nextSlide}>
          <FaArrowRight />
        </Button>
      </ImgContainer>
    );
  }
}

export default Slider;
