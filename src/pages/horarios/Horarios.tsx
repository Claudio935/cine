import moment from "moment";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BoxColumn, BoxRow } from "../../component/box/Box";
import { ButtonHorario } from "../../component/button/Button";
import Header from "../../component/header/Header";
import Section from "../../component/section/Section";
import Paragraph from "../../component/texts/Paragraph";
import Title from "../../component/texts/Title";
import SubTitle from "../../component/texts/SubTtitle";
import { MovieContext } from "../../contexts/movieProvider/context";
import {Img} from "../../component/Image/Image";
import DontMovie from "../dontMovie/DontMovie";
import { loadSalaHorario } from "../../contexts/movieProvider/actions";

const TitleMovies = styled(Title)`
  color: #e1f409;
  font-size: 48px;
`;
const ParagraphsMovies = styled(Paragraph)`
  color: #e1f409;
  font-size: 23px;
  text-justify: justify;
  padding: 0px 20px;
`;
const SubTitleMovies = styled(SubTitle)`
  width: 40%;
`;
const Image = styled(Img)`
  height: 440px;
  width: 440px;
  border-radius: 50%;
  object-fit: cover;
`;
const BoxHorarios = styled(BoxRow)`
  border-bottom: 1px solid #fff;
`;
const TitleAudio = styled(Title)`
  border: 1px solid red;
  border-radius: 10px;
  font-size: 9px;
  color: #fff;
  margin: 0px 15px;
  padding: 5px;
`;
function Horarios() {
  const salas = [
    "Sala 1",
    "Sala 2",
    "Sala 3",
    "Sala 4",
    "Sala 5",
    "Sala 6",
    "Sala 7",
    "Sala XD",
    "Sala Prime",
  ];

  const movieContext = useContext(MovieContext);
  const {setState, state:{ingresso}} = movieContext

  const selectHorario = (duration: string) => {
    const arrayHorarios = [];
    let allHour = true;
    let initial = 8;
    while (allHour) {
      let valueHour = moment(initial, "h")
        .add(`${duration}`, "hours")
        .format("HH:mm");
      arrayHorarios.push(valueHour);
      initial = initial + 2;
      if (initial > 18) {
        allHour = false;
      }
    }
    return arrayHorarios;
  };
  const handleClickHorario = (local: String ,hora: String) =>{
    console.log(hora)
    loadSalaHorario(setState, {  ingresso:{...ingresso,horario:hora, sala: local}})
   
  }
  
  if (!movieContext?.state?.movieSelect?.backdrop_path) {
    return <DontMovie />;
  } else {
    return (
      <BoxColumn>
        <Header
          style={{
            background: `linear-gradient(to right , rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(${`https://image.tmdb.org/t/p/original${movieContext?.state?.movieSelect?.backdrop_path}`})`,
            height: "500px",
            padding: "80px 0px",
          }}
        >
          <BoxRow>
            <BoxRow>
              <Image
                src={`https://image.tmdb.org/t/p/original${movieContext?.state?.movieSelect?.backdrop_path}`}
              ></Image>
            </BoxRow>
            <BoxColumn>
              <TitleMovies>{movieContext?.state?.movieSelect?.title}</TitleMovies>

              <ParagraphsMovies>
                {!!movieContext?.state?.movieSelect?.overview
                  ? movieContext?.state?.movieSelect?.overview
                  : "Nenhuma sinopse disponível!!"}
              </ParagraphsMovies>
            </BoxColumn>
          </BoxRow>
        </Header>
        <Section>
          <BoxRow>
            <BoxColumn>
              <Title>Escolha o horário que deseja ver o filme:</Title>
              {salas.map((sala, index) => {
                return (
                  <BoxHorarios key={index}>
                    <SubTitleMovies>{sala}</SubTitleMovies>
                    <BoxRow>
                      {selectHorario(`2:${index - 1}0`).map((horario, index) => {
                        let audio = "legendado";
                        if (Math.floor(Math.random() * 10) % 2 === 0) {
                          audio = "dublado";
                        }
                        return (
                          <Link
                          to={"/assento"}
                          key={index}
                          style={{textDecoration:"none"}}
                        >
                          <ButtonHorario onClick={()=>handleClickHorario(sala, horario)}>
                            <Paragraph>{horario}</Paragraph>
                            <TitleAudio>{audio}</TitleAudio>
                          </ButtonHorario>
                          </Link>
                        );
                      })}
                    </BoxRow>
                  </BoxHorarios>
                );
              })}
            </BoxColumn>
          </BoxRow>
        </Section>
      </BoxColumn>
    );
  }
}

export default Horarios;
