import React, { useEffect, useState } from "react";
import { BoxColumn, BoxGrid, BoxSlider } from "../box/Box";

import { Card, CardInfo } from "../card/Card";
import Section from "../section/Section";
import Title from "../texts/Title";
interface Movie {
  id?: number;
  title?: string;
  overview?: string;
  poster_path?: string | null;
  release_date?: string;
  genre_ids?: number[];
  vote_average?: number;
  vote_count?: number;
  backdrop_path?: string;
  // Outras propriedades que você desejar adicionar
}

function BodyView() {
  const [dataFilme, setDataFilme] = useState<Movie[]>([]);
  const [newMovies, setNewMovies] = useState<Movie[]>([]);

  const parabens: string = require("../../assets/image/parabens.svg").default;
  const bancos: string = require("../../assets/image/bancos.svg").default;
  const nota: string = require("../../assets/image/nota.svg").default;
  const getMovieRelease = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=1495c4d87bd2fdd377bfadeb1d866cd8&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const movies: Movie[] = data.results;
        if (!!movies) {
          setDataFilme(movies);
        }
      })
      .catch((error) => {
        // Em caso de erro na solicitação
        console.error("Ocorreu um erro:", error);
      });
  };

  const getMovieSoon = () => {
    const currentDate = new Date();
    const nextMonth = currentDate.getMonth() + 2; // Adiciona 2 para obter o próximo mês
    const nextMonthYear = currentDate.getFullYear();
    const nextMonthDateString = `${nextMonthYear}-${nextMonth
      .toString()
      .padStart(2, "0")}-01`;
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=1495c4d87bd2fdd377bfadeb1d866cd8&language=pt-BR&primary_release_date.gte=${nextMonthDateString}`
    )
      .then((response) => response.json())
      .then((data) => {
        const movies: Movie[] = data.results;
        if (!!movies) {
          setNewMovies(movies);
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      });
  };

  useEffect(() => {
    getMovieRelease();
    getMovieSoon();
  }, []);

  return (
    <Section>
      <BoxColumn margin="180px 0px 180px 0px">
        <BoxColumn>
          <Title fontSize="110px">Em Cartaz</Title>
          <BoxSlider width="100%" justify={{ content: "space-between" }} id={1}>
            {dataFilme?.map((item, index) => {
              return (
                <Card
                  title={item?.title}
                  key={index}
                  imageId={item.id}
                  img={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                ></Card>
              );
            })}
          </BoxSlider>
        </BoxColumn>
        <BoxColumn padding=" 120px 0px">
          <Title fontSize="110px" margin="80px 0px">
            Dicas
          </Title>
          <BoxColumn justify={{content:"center"}}>
          <BoxGrid columns={3} justify={{content:"center"}}>
            <CardInfo
              height={"350px"}
              width={"350px"}
              title={"Faça seu evento conosco!! "}
              subtitle={"Clique aqui"}
              img={parabens}
            />
            <CardInfo
              height={"350px"}
              width={"350px"}
              title={"A procura de uma promoção?"}
              subtitle={"Clique aqui"}
              img={bancos}
            />
            <CardInfo
              height={"350px"}
              width={"350px"}
              title={"Não sabe o que assitir, veja as notas dos filmes!"}
              subtitle={"Clique aqui"}
              img={nota}
            />
          </BoxGrid>
          </BoxColumn>
        </BoxColumn>
        <BoxColumn>
          <Title fontSize="110px">Vem ai</Title>
          <BoxSlider width="100%" justify={{ content: "space-between" }} id={2}>
            {newMovies?.map((item, index) => {
              if (!!item?.backdrop_path) {
                return (
                  <Card
                    title={item?.title}
                    key={index}
                    imageId={item.id}
                    img={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                  ></Card>
                );
              } else {
                return <React.Fragment key={index}></React.Fragment>;
              }
            })}
          </BoxSlider>
        </BoxColumn>
      </BoxColumn>
    </Section>
  );
}

export default BodyView;
