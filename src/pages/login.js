import styled, { createGlobalStyle } from "styled-components";

import bg from "../assets/images/bg.svg";
import Logo from "../assets/images/logo.svg";
import { InputEfect } from "../styles/forms";

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
`;

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0px;
      padding: 0px; 
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BackGround>
        <Cards>
          <img src={Logo} alt="Logo" />
          <InputEfect></InputEfect>
        </Cards>
      </BackGround>
    </>
  );
}

export default App;
