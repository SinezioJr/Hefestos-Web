import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

import SideBar from "../styles/sidebar";
import HeaderBar from "../styles/headerbar";

const AppFrame = styled.div`
  margin-left: ${(props) => (props.active ? "250px" : "50px")};
  transition: 0.125s;
`;

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0px;
      padding: 0px; 
    }
`;

export default function App(props) {
  const [barActive, setBarActive] = useState(false);

  const changeBarActive = () => setBarActive(!barActive);

  return (
    <>
      <GlobalStyle />
      <SideBar active={barActive} />
      <AppFrame active={barActive}>
        <HeaderBar changeBarActive={changeBarActive} />
        {props.children}
      </AppFrame>
    </>
  );
}
