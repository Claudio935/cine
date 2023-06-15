
import { BoxColumn } from "../box/Box";
import Title from "../texts/Title";
import Img from "../Image/Image";
import SubTitle from "../texts/SubTtitle";

export const Card = ({ ...props }) => {
  const { img, title, subtitle, width, height } = props;

  return (
    <BoxColumn
      hover={{
        scale: "scale(1.2)",
      }}
    >
      <BoxColumn
        background="transparent"
        radius="15px"
        margin="0px 15px"
        height={height ? height : "300px"}
        justify={{ content: "flex-start" }}
        backface="hidden"
        width={width ? width : "200px"}
        position="relative"
        cursor="pointer"
      >
        <Img
          src={img}
          height="100%"
          width="100%"
          radius="15px"
          object={{ fit: "cover" }}
        ></Img>
        <BoxColumn
          position="absolute"
          bottom="0px"
          left="0px"
          radius="0px 0px 15px 15px "
          height="40px"
          background="#000"
          opacity="0.7"
          padding="5px"
        >
          {title && (
            <Title color="#fff" fontSize="15px" shadow="1px 1px 2px black">
              {title}
            </Title>
          )}
          {subtitle && (
            <SubTitle style={{ color: "#000" }}>{subtitle}</SubTitle>
          )}
        </BoxColumn>
      </BoxColumn>
    </BoxColumn>
  );
};

export const CardInfo = ({ ...props }) => {
  const { img, title, subtitle, width, height } = props;

  return (
  
      <BoxColumn
        background="transparent"
        radius="15px"
        margin="0px 15px"
        height={height ? height : "300px"}
        justify={{ content: "flex-start" }}
        backface="hidden"
        width={width ? width : "300px"}
        position="relative"
        cursor="pointer"
      >
        <Img
          src={img}
          height="100%"
          width="100%"
          radius="15px"
          object={{ fit: "cover" }}
        ></Img>
       
          {title && (
            <Title
            position="absolute"
            top="40%"
            left="0px"
              color="#fff"
              fontSize="40px"
              shadow="1px 1px 2px black"
              align="center"
            >
              {title}
            </Title>
          )}
          {subtitle && (
            <SubTitle style={{justify:{text:"center"}, color: "#f2e609", shadow: "1px 1px 2px black", width:"100%", fontSize:"20px", position:"absolute", top:"85%", left:"0px"}}>
              {subtitle}
            </SubTitle>
          )}
        
      </BoxColumn>
    
  );
};
