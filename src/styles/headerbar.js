import styled from "styled-components";

import Menu from "../assets/icons/menu";
import Notification from "../assets/icons/notification";

const HeaderBar = styled.div`
  height: 45px;
  width: 100%;
  box-sizing: border-box;
  padding: 11px 12px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #e5e5e5;

  font-family: Rubik;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  .menu {
    cursor: pointer;
  }
  .notification {
    float: right;
    cursor: pointer;
  }
`;

function App(props) {
  return (
    <>
      <HeaderBar>
        <Menu
          width="25"
          height="25"
          className="menu"
          onClick={props.changeBarActive}
        />
        <Notification width="25" height="25" className="notification" />
      </HeaderBar>
    </>
  );
}

export default App;
