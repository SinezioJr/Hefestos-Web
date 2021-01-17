import styled from "styled-components";

import Menu from "../assets/icons/menu";
import Notification from "../assets/icons/notification";
import NotificationZone from "./notifications";

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    /* identical to box height, or 100% */
    letter-spacing: 0.15px;

    color: #000000;
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
        <div className="title">{props.title}</div>
        <NotificationZone className="notification">
          <Notification width="25" height="25" />
        </NotificationZone>
      </HeaderBar>
    </>
  );
}

export default App;
