import { styled } from "styled-components";
import { BoxColumn } from "../box/Box";
import Title from "../texts/Title";
import {Img} from "../Image/Image";
import SubTitle from "../texts/SubTtitle";
import { Link } from "react-router-dom";

const ContainerCard = styled(BoxColumn)`
  &:hover {
    transform: scale(1.2);
  }
`;

const BoxCard = styled(BoxColumn)`
  border-radius: 15px;
  height: 300px;
  justify-content: flex-start;
  width: 200px;
  position: relative;
  cursor: pointer;
  margin: 15px;
`;
const BoxText = styled(BoxColumn)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: 0px 0px 15px 15px;
  height: 40px;
  background: #000;
  opacity: 0.7;
  padding: 5px;
`;
const ImagCard = styled(Img)`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
`;
const TitleCard = styled(Title)`
  color: #fff;
  font-size: 15px;
  box-shadow: 1px 1px 2px black;
`;
const BoxCardInfo = styled(BoxColumn)`
  height: 350px;
  justify-content: flex-start;
  width: 350px;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const TitleCardInfo = styled(Title)`
  position: absolute;
  top: 20%;
  left: 0px;
  color: #fff;
  font-size: 40px;
  text-align: center;
`;
const SubTitleCardInfo = styled(SubTitle)`
  color: #f2e609;
  font-size: 18px;
  position: absolute;
  top: 85%;
  left: 0px;
`;

export const Card = ({ ...props }) => {
  const { img, title } = props;

  return (
    <ContainerCard>
      <BoxCard>
        <ImagCard src={img}></ImagCard>
        <BoxText>{title && <TitleCard>{title}</TitleCard>}</BoxText>
      </BoxCard>
    </ContainerCard>
  );
};

export const CardInfo = ({ ...props }) => {
  const { img, title, subtitle, url } = props;

  return (
    <Link to={url}>
    <BoxCardInfo onClick={props.onClick}>
      <ImagCard src={img}></ImagCard>
      {title && <TitleCardInfo>{title}</TitleCardInfo>}
      {subtitle && <SubTitleCardInfo>{subtitle}</SubTitleCardInfo>}
    </BoxCardInfo>
    </Link>
  );
};
