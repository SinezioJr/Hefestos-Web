import styled from "styled-components";

import Persona from "../assets/images/persona.png";

import Vacancies from "../assets/icons/vacancies";

const VerticalBar = styled.div`
  position: fixed;
  width: ${(props) => (props.active ? "250px" : "50px")};
  z-index: 1001;
  height: 100%;
  left: 0px;
  top: 0px;
  padding: 0px 0px;
  background: #fff;
  transition: 0.125s;
  overflow-x: hidden;
  border-width: 0px 1px 0px 0px;
  border-image: linear-gradient(
      to bottom,
      #25256b 0px,
      #e5e5e5 0px,
      #e5e5e5 100%
    )
    5;
  border-style: solid;

  .perfil {
    display: inline;
    white-space: nowrap;

    img {
      width: ${(props) => (props.active ? "70px" : "40px")};
      height: ${(props) => (props.active ? "70px" : "40px")};
      margin: ${(props) => (props.active ? "10px" : "5px")};
      border-radius: 50px;
      transition: 0.125s;
      float: left;
    }
    .label {
      display: ${(props) => (props.active ? "block" : "none")};
      height: ${(props) => (props.active ? "90px" : "50px")};
      padding: ${(props) => (props.active ? "10px" : "5px")};
      box-sizing: border-box;

      font-family: Rubik;
      font-style: normal;
      letter-spacing: 0.15px;
      color: #000000;

      .name {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
      .city {
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
      }
      .id {
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;

        text-align: right;
      }
    }
  }

  .divider {
    width: 216px;
    margin: 10px 17px;
    border-bottom: 1px solid #e5e5e5;
    display: ${(props) => (props.active ? "block" : "none")};
  }

  .menu {
    .item {
      display: inline;
      white-space: nowrap;
      cursor: pointer;

      :hover {
        .headline {
          background: #ffeb3b;
        }
      }
    }

    .icon {
      width: ${(props) => (props.active ? "30px" : "24px")};
      height: ${(props) => (props.active ? "30px" : "24px")};
      margin: ${(props) => (props.active ? "5px 10px" : "13px")};
      float: left;
    }

    .headline {
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;
      letter-spacing: 0.15px;

      color: #000000;
    }
  }
`;

export default function SideBar(props) {
  return (
    <div>
      <VerticalBar {...props}>
        <div className="perfil">
          <img src={Persona} alt="" />
          <div className="label">
            <div className="name">Sinezio Morais</div>
            <div className="city">São Felipe - BA</div>
            <div className="id">000.000.000-00</div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="menu">
          <div className="item">
            <Vacancies className="icon" />
            <div className="headline">Vagas</div>
          </div>
        </div>
      </VerticalBar>
    </div>
  );
}
