import { BoxColumn, BoxGrid, BoxRow } from "../../component/box/Box";
import { Button } from "../../component/button/Button";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { MovieContext } from "../../contexts/movieProvider/context";
import Section from "../../component/section/Section";
import { ImageText } from "../../component/Image/Image";
import Title from "../../component/texts/Title";
import { ModalNotas } from "./ModalNotas";
import { ModalComentarios } from "./ModalComentarios";
import { Movie } from "../../contexts/movieProvider/interfaces";
import DontMovie from "../dontMovie/DontMovie";

const PraragraphNota = styled.p`
  font-size: 15px;
  font-weight: 900;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 3px 3px #e31709;
`;
const BoxButton = styled(BoxColumn)`
  width: 150px;
  padding: 15px;
  justify-content: space-around;
  height: 100px;
`;

const Notas = () => {
  const movieContext = useContext(MovieContext);
  const [openModalNotas, setOpenModalNotas] = useState(false);
  const [openModalComentarios, setOpenModalComentarios] = useState(false);
  const [movieArray, setMovieArray] = useState<Movie[]>(
    movieContext.state.arrayMovies
  );

  const handleClick = () => {
    setOpenModalNotas(false);
    window.alert("Sua avaliação foi enviada com sucesso!!");
  };

  useEffect(() => {
    setMovieArray(
      movieContext.state.arrayMovies.sort((a, b) => {
        const initialOverage = a.vote_average;
        const finalOverage = b.vote_average;
        if (!initialOverage || !finalOverage) {
          return 0;
        }
        if (initialOverage > finalOverage) {
          return -1;
        }
        if (initialOverage < finalOverage) {
          return 1;
        }

        return 0;
      })
    );
  }, [movieContext.state.arrayMovies]);

  if (movieArray.length === 0) {
    return <DontMovie />;
  }
  return (
    <BoxColumn>
      <Section>
        <BoxColumn>
          <Title>Notas do publico</Title>
          <BoxGrid>
            {movieArray.length > 0 &&
              movieArray.map((item, index) => {
                return (
                  <BoxColumn key={index}>
                    <ImageText
                      src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                      style={{ width: "250px" }}
                    ></ImageText>
                    <BoxRow>
                      <PraragraphNota>{item.vote_average}</PraragraphNota>
                      <BoxButton>
                        <Button onClick={() => setOpenModalNotas(true)}>
                          Dê seu voto
                        </Button>
                        <Button onClick={() => setOpenModalComentarios(true)}>
                          Comentários
                        </Button>
                      </BoxButton>
                    </BoxRow>
                  </BoxColumn>
                );
              })}
          </BoxGrid>
        </BoxColumn>
        <ModalNotas
          openModal={openModalNotas}
          onClose={() => setOpenModalNotas(false)}
          handleClick={handleClick}
        />
        <ModalComentarios
          openModal={openModalComentarios}
          onClose={() => setOpenModalComentarios(false)}
        />
      </Section>
    </BoxColumn>
  );
};

export default Notas;
