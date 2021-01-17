import styled, { createGlobalStyle } from "styled-components";

import bg from "../assets/images/bg.svg";
import Logo from "../assets/images/logo.png";

import { Input, Button } from "../styles/forms";
import Masks from "../controllers/Mask";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";

const BackGround = styled.div`
  background-image: url(${bg});
  background-color: #ffeb3b;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  text-align: center;
  padding: 20px 0px;
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;
`;

const Cards = styled.div`
  max-width: 484px;
  max-height: 596px;
  width: 100%;
  height: 100%;
  padding: 30px;

  position: relative;
  margin: 0px auto;

  background: #ffffff;
  border: 1px solid rgba(200, 185, 0, 0.45);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  .info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;

    /* identical to box height, or 145% */
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: capitalize;

    color: #9e9d9d;
  }
  .forgePass {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;

    /* identical to box height, or 145% */
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;

    color: #0679ff;
  }
  .line {
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0px;
      padding: 0px; 
    }
`;

function App() {
  const history = useHistory();

  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    history.push("/jobs");
  };

  return (
    <>
      <GlobalStyle />
      <BackGround>
        <Cards>
          <img src={Logo} alt="Logo" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input>
              <label htmlFor="nmCpf">CPF:</label>
              <input
                type="text"
                onChange={(event) =>
                  setValue("nmCpf", Masks.formatarCPF(event.target.value))
                }
                placeholder="000 . 000 . 000 - 00"
                name="nmCpf"
                style={{ border: errors.nmCpf ? "1px solid red" : "" }}
                ref={register({ required: true, minLength: 14 })}
              />
            </Input>

            <Input>
              <label htmlFor="nmCpf">Senha:</label>
              <input
                type="password"
                name="password"
                style={{ border: errors.senha ? "1px solid red" : "" }}
                ref={register({ required: true })}
                placeholder="**************"
              />
            </Input>
            <Button type="submit">Entrar</Button>
          </form>
          <div className="info">
            <div className="line" />
            <div style={{ width: "200%" }}>AINDA NÃO TEM UMA CONTA?</div>
            <div className="line" />
          </div>
          <Button style={{ margin: "16px 0px 16px" }}>CADASTRAR</Button>
          <div className="forgePass">
            <div className="line" />
            <div style={{ width: "100%", cursor: "pointer" }}>
              Esqueci a Senha
            </div>
            <div className="line" />
          </div>
        </Cards>
      </BackGround>
    </>
  );
}

export default App;
