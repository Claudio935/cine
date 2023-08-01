import { useContext, useState, useEffect } from "react";
import { styled } from "styled-components";
import { BoxColumn, BoxGrid, BoxRow } from "../../component/box/Box";
import { MovieContext } from "../../contexts/movieProvider/context";
import Title from "../../component/texts/Title";
import {Img} from "../../component/Image/Image";
import Paragraph from "../../component/texts/Paragraph";
import moment from "moment";
import useFetch, { getMovieCredits } from "../../utils/movieData";
import SubTitle from "../../component/texts/SubTtitle";
import DontMovie from "../dontMovie/DontMovie";
import { Loading } from "../../component/loading/Loading";

const BoxNewMovie = styled(BoxColumn)`
  background-color: #000;
  min-height:100vh;
`;
const ContainerMovieInfo = styled(BoxColumn)`
  width: 40%;
  border-radius: 15px;
  margin-top: 25px;
`;
const ContainerNewMovie = styled(BoxRow)`
  background-color: black;
  width: 90%;
  padding: 40px;
  border-radius: 15px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`;
const BoxRowInfo = styled(BoxRow)`
  border-bottom: 1px solid #fff;
  justify-content: center;
  padding: 0px 20px;
`;
const BoxColumnSinopse = styled(BoxColumn)`
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;
const ImageNewMovie = styled(Img)`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  object-fit: fill;
`;
const ImageActors = styled(Img)`
  width: 200px;
  height: 250px;
  border-radius: 15px;
  object-fit: fill;
  @media (max-width: 768px) {
    width: 100px;
    height: 150px;
  }
`;
const ContainerElenco = styled(BoxColumn)`
  margin-top: 80px;
  margin-bottom: 20px;
  background-color: black;
  width: 90%;
  border-radius: 15px;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;
const BoxGridNewMovies = styled(BoxGrid)`
  margin-top: 80px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const TitleMovies = styled(Title)`
  color: #e5d309;
  font-size: 34px;
  margin: 10px;
  font-weight: 500;
`;
const ParagraphsSinopseMovies = styled(Paragraph)`
  color: #fff;
  font-size: 24px;
  text-align: justify;
  width: 80%;
`;
const SubtitleMovies = styled(SubTitle)`
  color: #e5d309;
  font-size: 20px;
  text-align: center;
  width: 80%;
`;
const ParagraphsInfoMovies = styled(Paragraph)`
  color: #fff;
  font-size: 12px;
  text-align: left;
  width: 80%;
`;
const NovosFilmes = () => {
  const [dataActors, setDataActors] = useState([
    { profile_path: "", name: "" },
  ]);
  const [dataDirector, setDataDirector] = useState([{ name: "" }]);

  const movieContext = useContext(MovieContext);
  useEffect(() => {
    getMovieCredits(`${movieContext?.state?.movieSelect?.id}`)
      .then((item) => {
        const [{ actors, directors }] = item;
        if (actors.length > 0) {
          setDataActors(actors.slice(0, 10));
        }
        setDataDirector(directors);
      })
      .catch((error) => console.error(error));
  }, [movieContext?.state?.movieSelect?.id]);
  const {
    data: detailsMovie,
    loading,
    error,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieContext?.state?.movieSelect?.id}?api_key=1495c4d87bd2fdd377bfadeb1d866cd8&language=pt-BR`
  );
  if (loading) {
    return (
      <BoxNewMovie>
       <Loading />
      </BoxNewMovie>
    );
  }
  if (error) {
    return (
      <BoxNewMovie>
        <ContainerNewMovie>
          <TitleMovies>Erro, procure os adminsitradores do site</TitleMovies>
        </ContainerNewMovie>
      </BoxNewMovie>
    );
  }
  if (!detailsMovie?.id) {
    return <DontMovie />;
  }
  return (
    <BoxNewMovie
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${detailsMovie?.backdrop_path})`,
      }}
    >
      <ContainerNewMovie>
        <BoxColumn>
          <TitleMovies>{movieContext?.state?.movieSelect?.title}</TitleMovies>
          {detailsMovie?.poster_path && (
            <ImageNewMovie
              src={`https://image.tmdb.org/t/p/original${detailsMovie?.poster_path}`}
            ></ImageNewMovie>
          )}
          <ContainerMovieInfo>
            <BoxRowInfo>
              <SubtitleMovies>Informações</SubtitleMovies>
            </BoxRowInfo>
            <BoxRowInfo>
              <ParagraphsInfoMovies>Data de Estreia:</ParagraphsInfoMovies>

              <ParagraphsInfoMovies>
                {moment(movieContext?.state?.movieSelect?.release_date).format("DD/MM/YYYY")}
              </ParagraphsInfoMovies>
            </BoxRowInfo>
            <BoxRowInfo>
              <ParagraphsInfoMovies> Direitor:</ParagraphsInfoMovies>
              {dataDirector.map((item, index) => (
                <ParagraphsInfoMovies key={index}>
                  {item.name}
                </ParagraphsInfoMovies>
              ))}
            </BoxRowInfo>
            <BoxRowInfo>
              <ParagraphsInfoMovies> Duração:</ParagraphsInfoMovies>
              <ParagraphsInfoMovies>
                {detailsMovie.runtime !== 0
                  ? detailsMovie.runtime + "min"
                  : "não disponível"}
              </ParagraphsInfoMovies>
            </BoxRowInfo>
            <BoxRow>
              <ParagraphsInfoMovies> Genero:</ParagraphsInfoMovies>
              <ParagraphsInfoMovies>
                {!!detailsMovie.genres &&
                  detailsMovie.genres.map((item: any) => {
                    return item.name + " ";
                  })}
              </ParagraphsInfoMovies>
            </BoxRow>
          </ContainerMovieInfo>
        </BoxColumn>

        <BoxColumn style={{ justifyContent: "flex-start" }}>
          <BoxColumnSinopse>
            <TitleMovies>Sinopse</TitleMovies>
            <ParagraphsSinopseMovies>
              {movieContext?.state?.movieSelect?.overview !== ""
                ? movieContext?.state?.movieSelect?.overview
                : "Nenhuma sinopse encontrada para o filme indicado"}
            </ParagraphsSinopseMovies>
          </BoxColumnSinopse>
        </BoxColumn>
      </ContainerNewMovie>
      <ContainerElenco>
        <TitleMovies>Elenco:</TitleMovies>
        <BoxGridNewMovies>
          {dataActors.length>0 &&
            dataActors?.map((actor, index) => {
              return (
                <BoxColumn key={index}>
                  <ImageActors
                    src={`https://image.tmdb.org/t/p/original${actor?.profile_path}`}
                  ></ImageActors>
                  <Paragraph>{actor?.name}</Paragraph>
                </BoxColumn>
              );
            })}
        </BoxGridNewMovies>
      </ContainerElenco>
    </BoxNewMovie>
  );
};

export default NovosFilmes;
