import styled from "styled-components";
import { useState } from "react";

const NotificationZone = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  .divider {
    margin: 5px 0px;
    border-bottom: 1px solid #e5e5e5;
  }

  .notificationZone {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 34px;

    visibility: ${(props) => (props.active ? "visible" : "hidden")};
    max-width: 500px;
    width: 100vw;

    background-color: #fff;
    color: #000;
    border: 1px solid #e5e5e5;
    border-radius: 5px;

    margin-left: -490px;
    padding: 5px 0px 0px;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;

    cursor: default;
    text-align: center;

    opacity: ${(props) => (props.active ? "1" : "0")};
    transition: opacity 400ms;
  }

  .morenotification {
    margin: 5px 0px 0px;
    border-top: 1px solid #e5e5e5;

    width: 100%;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;

    /* or 133% */
    text-align: center;
    letter-spacing: 0.15px;

    color: #0086c3;
    cursor: pointer;

    :hover {
      background: #0086c3;
      color: #fff;
    }
  }

  .notificationZone::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 5px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #e5e5e5 transparent;
  }
`;

function App(props) {
  const [notifiationActive, setNotifiationActive] = useState(false);
  const changeNotifiationActive = () =>
    setNotifiationActive(!notifiationActive);

  return (
    <>
      <NotificationZone {...props} active={notifiationActive}>
        <div onClick={changeNotifiationActive}>{props.children}</div>
        <span class="notificationZone">
          <div className="divider" />
          Você não tem novas notificações
          <div className="morenotification">Notificações Anteriores</div>
        </span>
      </NotificationZone>
    </>
  );
}

export default App;
