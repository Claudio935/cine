import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { BoxColumn } from "../../component/box/Box";
import { Button} from "../../component/button/Button";
import Title from "../../component/texts/Title";
const ContainerDontMovie = styled(BoxColumn)`
  background: #000;
  height: 100vh;
  @media (max-width: 768px) {
    width:100%;
  }
`;
const BoxDontMovie = styled(BoxColumn)`
  width: 700px;
  height: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ButtonDontMovie = styled(Button)`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;
const TitleMovies = styled(Title)`
  color: #e1f409;
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
  }
`;
const DontMovie = () =>{

    return(
       
            <ContainerDontMovie>
              <BoxDontMovie>
                <TitleMovies>
                  Selecione um filme para definir a sala e o horário !!!
                </TitleMovies>
                <Link to="/">
                  <ButtonDontMovie>{<FaArrowLeft />}</ButtonDontMovie>
                </Link>
              </BoxDontMovie>
            </ContainerDontMovie>
          
    )
}

export default DontMovie;