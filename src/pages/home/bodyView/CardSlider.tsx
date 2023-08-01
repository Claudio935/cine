import React, { useContext } from "react";
import { styled } from "styled-components";
import { BoxColumn, BoxSlider } from "../../../component/box/Box";
import { Card } from "../../../component/card/Card";
import Title from "../../../component/texts/Title";
import { Link } from "react-router-dom";
import { MovieContext } from "../../../contexts/movieProvider/context";
import { loadMovies } from "../../../contexts/movieProvider/actions";
import { Loading } from "../../../component/loading/Loading";

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
}
interface Props {
  dataCard: Movie[];
  title: string;
  type: string;
  loading: boolean;
  error: boolean;
}
const Container = styled(BoxColumn)`
  width: 100%;
`;

const CardSlider: React.FC<Props> = ({
  dataCard,
  title,
  type,
  loading,
  error,
}) => {
  const movieContext = useContext(MovieContext);

  const { setState } = movieContext;
  if (loading) {
    return (
      <Loading></Loading>
    );
  }
  if (error) {
    return (
      <Container>
        <Title>Erro</Title>
      </Container>
    );
  }

  if (dataCard.length > 0) {
    return (
      <Container>
        <Title>{title}</Title>
        <BoxSlider data-testid={`novos`}>
          {dataCard.map((item, index) => {
            return (
              item?.backdrop_path && (
                <Link
                  to={type === "EM_CARTAZ" ? "/horarios" : "/novos_filmes"}
                  onClick={() => loadMovies(setState, {movieSelect:{ ...item} })}
                  key={index}
                >
                  <Card
                    title={item?.title}
                    imageId={item.id}
                    img={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                  ></Card>
                </Link>
              )
            );
          })}
        </BoxSlider>
      </Container>
    );
  } else {
    return (
      <Container>
        <Title>Nenhum filme encontrado</Title>
      </Container>
    );
  }
};

export default CardSlider;
