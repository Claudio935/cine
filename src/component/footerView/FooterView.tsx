import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Title from "../texts/Title";
import { BoxColumn, BoxGrid } from "../box/Box";
import Footer from "../Footer/footer";
import Icon from "../Icon/Icon";
import EnviarEmail from "../Email/EnviarEmail";
import SubTitle from "../texts/SubTtitle";

function FooterView() {
  const telefone: string = require("../../assets/image/telefone.svg").default;
  return (
    <Footer image={telefone}>
      <BoxColumn>
        <Title margin="0px 0px 40px 0px" fontSize="36px">
          Entre em Contato
        </Title>

        <BoxColumn>
          <EnviarEmail />
          <BoxColumn width="50%" justify={{ content: "flex-end" }}>
            <BoxColumn
              margin={"20px 0px 0px 0px"}
              width="120px"
              height="100px"
              background="#000"
              radius="15px"
            >
              <SubTitle
                style={{ fontSize: "11px", margin: "0px 0px 10px 0px" }}
              >
                Redes Sociais
              </SubTitle>
              <BoxGrid columns={3} width="100%">
                <BoxColumn>
                  <Icon
                    href="https://api.whatsapp.com/send?phone=71981379605"
                    color="#00D428"
                    width="20px"
                    height="20px"
                    icon={FaWhatsapp}
                  />
                </BoxColumn>
                <BoxColumn>
                  <Icon
                    href="https://www.instagram.com/programe_claudio"
                    color="#F48D44"
                    width="20px"
                    height="20px"
                    icon={FaInstagram}
                  />
                </BoxColumn>
                <BoxColumn>
                  <Icon
                    href="https://www.linkedin.com/in/claudio-junior-293433116/"
                    color="#FFFF"
                    width="20px"
                    height="20px"
                    icon={FaLinkedinIn}
                  />
                </BoxColumn>
              </BoxGrid>
            </BoxColumn>
          </BoxColumn>
        </BoxColumn>
      </BoxColumn>
    </Footer>
  );
}

export default FooterView;
