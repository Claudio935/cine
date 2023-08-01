import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { styled } from "styled-components";
import Title from "../../../component/texts/Title";
import { BoxColumn, BoxGrid } from "../../../component/box/Box";
import Footer from "../../../component/footer/Footer";
import Icon from "../../../component/Icon/Icon";
import EnviarEmail from "../../../component/Email/EnviarEmail";

const BoxRedes = styled(BoxColumn)`
  margin: 20px 0px 0px 0px;
  width: 120px;
  height: 100px;
  background: #000;
  border-radius: 15px;
`;
const ContainerEmail = styled(BoxColumn)`
  width: 50%;
  justify-content: flex-end;
`;
const IconFooter = styled(Icon)`
  width: 20px;
  height: 20px;
`;
const GridIcons = styled(BoxGrid)`
  width: 100%;
`;
const TitleIcons = styled(Title)`
  font-size: 11px;
  margin: 0px 0px 10px 0px;
`;

function FooterView() {
  const footer: string = require("../../../assets/image/footer.svg").default;
  return (
    <Footer style={{ backgroundImage: `url(${footer})` }}>
      <BoxColumn>
        <Title >
          Entre em Contato
        </Title>

        <ContainerEmail>
          <EnviarEmail />
          <BoxColumn>
            <BoxRedes>
              <TitleIcons>Redes Sociais</TitleIcons>
              <GridIcons>
                <BoxColumn>
                  <IconFooter href="https://api.whatsapp.com/send?phone=71981379605">
                    <FaWhatsapp color="green" height={"20px"} width={"20px"} />
                  </IconFooter>
                </BoxColumn>
                <BoxColumn>
                  <IconFooter href="https://www.instagram.com/programe_claudio">
                    <FaInstagram
                      color="#F48D44"
                      height={"20px"}
                      width={"20px"}
                    />
                  </IconFooter>
                </BoxColumn>
                <BoxColumn>
                  <IconFooter href="https://www.linkedin.com/in/claudio-junior-293433116/">
                    <FaLinkedinIn
                      color="#FFFF"
                      height={"20px"}
                      width={"20px"}
                    />
                  </IconFooter>
                </BoxColumn>
              </GridIcons>
            </BoxRedes>
          </BoxColumn>
        </ContainerEmail>
      </BoxColumn>
    </Footer>
  );
}

export default FooterView;
