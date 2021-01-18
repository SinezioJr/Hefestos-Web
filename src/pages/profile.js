import Frame from "../components/Frame";
import styled from "styled-components";

import { Container, Row, Column, LongButton } from "../styles/forms";
import Profile from "../assets/images/persona.png";

const ProfilePhoto = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 137px;
    height: 137px;
    margin: 30px auto;

    border-radius: 70px;
    border: 1px solid #e5e5e5;
  }
`;

const Info = styled.div`
  width: 100%;

  ${Row} {
    margin: 22px 0px;
    justify-content: space-around;
  }

  ${LongButton} {
    width: 375px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    /* identical to box height, or 150% */
    letter-spacing: 0.15px;

    color: #ffffff;
  }

  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 26px;

    color: #757575;
  }

  .label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;

    color: #757575;
  }

  .info {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;

    color: #757575;
  }
`;

function App() {
  return (
    <>
      <Frame barTitle="Perfil">
        <Container>
          <ProfilePhoto>
            <img src={Profile} alt="Profile" />
          </ProfilePhoto>
          <Info>
            <div className="title">Dados da Empresa</div>
            <Row>
              <Column>
                <div className="label">Nome</div>
                <div className="info">Stork</div>
              </Column>
              <Column>
                <div className="label">CNPJ</div>
                <div className="info">00000000000000-0000/00</div>
              </Column>
            </Row>
            <Row>
              <Column>
                <div className="label">Endereço</div>
                <div className="info">Zona rual</div>
              </Column>
              <Column>
                <div className="label">Rua</div>
                <div className="info">Povoado do Terrão</div>
              </Column>
              <Column>
                <div className="label">CEP</div>
                <div className="info">44550-000</div>
              </Column>
              <Column>
                <div className="label">Cidade</div>
                <div className="info">São Felipe/BA</div>
              </Column>
            </Row>
            <Row>
              <Column>
                <div className="label">Telefone</div>
                <div className="info">75 - 8837-7622</div>
              </Column>
              <Column>
                <div className="label">Rua</div>
                <div className="info">atendimento@cegonheiros.com.br</div>
              </Column>
              <Column>
                <div className="label">Site</div>
                <div className="info">cegonheiros.io</div>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0px" }}>
              <LongButton
                style={{ backgroundColor: "rgba(200, 185, 0, 0.86)" }}
              >
                Editar Dados da Empresa
              </LongButton>
              <LongButton>Ver Perfil Completo</LongButton>
            </Row>
          </Info>
        </Container>
      </Frame>
    </>
  );
}

export default App;
