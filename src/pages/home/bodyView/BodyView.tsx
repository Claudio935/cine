import { useContext } from "react";
import { styled } from "styled-components";
import { BoxColumn, BoxGrid } from "../../../component/box/Box";
import { CardInfo } from "../../../component/card/Card";
import Section from "../../../component/section/Section";
import Title from "../../../component/texts/Title";
import useFetch from "../../../utils/movieData";
import CardSlider from "./CardSlider";
import { MovieContext } from "../../../contexts/movieProvider/context";
import { loadArrayMovies} from "../../../contexts/movieProvider/actions";

const TitleDicas = styled(Title)`
  margin: 0px 0px 80px 0px;
`;
const ContainerFilmeInfo = styled(BoxColumn)`
  padding: 80px 0px;
`;
function BodyView() {
  const parabens: string =
    require("../../../assets/image/parabens.svg").default;
  const bancos: string = require("../../../assets/image/bancos.svg").default;
  const nota: string = require("../../../assets/image/nota.svg").default;

  const currentDate = new Date();
  const nextMonth = currentDate.getMonth() + 2; // Adiciona 2 para obter o próximo mês
  const nextMonthYear = currentDate.getFullYear();
  const nextMonthDateString = `${nextMonthYear}-${nextMonth
    .toString()
    .padStart(2, "0")}-01`;

    const movieContext = useContext(MovieContext);

  const { setState } = movieContext;
  const arrayCard = [
    {
      title: "Faça seu evento conosco!! ",
      subtitle: "Clique aqui",
      img: parabens,
      url:"eventos"
    },
    {
      title: "A procura de uma promoção?",
      subtitle: "Clique aqui",
      img: bancos,
      url:"promocoes"
    },
    {
      title: "Não sabe o que assitir, veja as notas dos filmes!",
      subtitle: "Clique aqui",
      img: nota,
      url:"notas"
    },
  ];

  const {
    data: dataMovieRelease,
    loading: loadingMovieRelease,
    error: errorMovieRelease,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=1495c4d87bd2fdd377bfadeb1d866cd8&language=pt-BR&with_release_type=2`
  );
  const {
    data: dataMovieSoon,
    loading: loadingMovieSoon,
    error: errorMovieSoon,
  } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=1495c4d87bd2fdd377bfadeb1d866cd8&language=pt-BR&primary_release_date.gte=${nextMonthDateString}&with_release_type=2`
  );

 
  return (
    <Section>
      <BoxColumn>
        {!!dataMovieRelease?.results && (
          <CardSlider
            dataCard={dataMovieRelease?.results}
            title={"Em cartaz"}
            type={"EM_CARTAZ"}
            loading={loadingMovieRelease}
            error={errorMovieRelease}
          />
        )}

        <ContainerFilmeInfo>
          <TitleDicas>Dicas</TitleDicas>

          <BoxGrid>
            {arrayCard.map((item, index) => {
              return (
                <CardInfo
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  img={item.img}
                  url={item.url}
                  onClick={()=>loadArrayMovies(setState, {arrayMovies:dataMovieRelease.results })}
                />
              );
            })}
          </BoxGrid>
        </ContainerFilmeInfo>
        <BoxColumn>
          {!!dataMovieSoon?.results && (
            <CardSlider
              dataCard={dataMovieSoon?.results}
              title={"Vem ai"}
              type={"VEM_AI"}
              loading={loadingMovieSoon}
              error={errorMovieSoon}
            />
          )}
        </BoxColumn>
      </BoxColumn>
    </Section>
  );
}

export default BodyView;
