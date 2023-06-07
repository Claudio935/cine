import { useState } from "react";
import { BoxColumn } from "../box/Box";
import Title from "../texts/Title";
import Img from "../Image/Image";
import SubTitle from "../texts/SubTtitle";
import Paragraph from "../texts/Paragraph";

export const Card = ({ ...props }) => {
  const [showText, setShowText] = useState(false);

  const { img, title, subtitle, text } = props;

  const handleMouseEnter = () => {
    setShowText(true);
  };
  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <BoxColumn onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      {!showText && (
        <BoxColumn
          background="#fff"
          radius="15px"
          animation={{
            duration: "0.4s",
            final: "0deg",
            start: "90deg",
            name: "rotatey",
            origin: { x: "50%", y: "50%" },
            recurrence: "1",
          }}
          height="300px"
          justify={{ content: "flex-start" }}
          backface="hidden"
        >
          <Img
            src={img}
            height="260px"
            width="100%"
            radius="15px 15px 0px 0px"
            object={{ fit: "cover" }}
          ></Img>
          <BoxColumn
            background="#fff"
            radius="0px 0px 15px 15px "
            height="40px"
          >
            {title && (
              <Title color="#000" fontSize="15px">
                {title}
              </Title>
            )}
            {subtitle && (
              <SubTitle  style={{ color: "#000" }}>
                {subtitle}
              </SubTitle>
            )}
          </BoxColumn>
        </BoxColumn>
      )}

      {showText && (
        <BoxColumn
          background="#fff"
          radius="15px"
          animation={{
            duration: "0.4s",
            final: "0deg",
            start: "90deg",
            name: "rotatey",
            origin: { x: "50%", y: "50%" },
            recurrence: "1",
          }}
          height="300px"
          boxSizing="border-box"
          padding="10px"
          backface="hidden"
        >
          <BoxColumn
            background="#e7d2d2bc"
            radius="15px "
            height="100%"
            width="100%"
            margin="0px 20px"
            border="3px double #b994b7"
            padding="20px"
            boxSizing="border-box"
          >
            {title && (
              <Title color="#000" fontSize="20px">
                {title}
              </Title>
            )}
            {subtitle && (
              <SubTitle  style={{ color: "#000" }}>
                {subtitle}
              </SubTitle>
            )}
            {text && (
              <Paragraph
                color="#000"
                justify="justificado"
                fontWeight={700}
                fontSize="13px"
              >
                {text}
              </Paragraph>
            )}
          </BoxColumn>
        </BoxColumn>
      )}
    </BoxColumn>
  );
};
