import styled from "styled-components";

import Persona from "../assets/images/persona.png";

import Vacancies from "../assets/icons/vacancies";
import Person from "../assets/icons/person";
import Cog from "../assets/icons/cog";
import Power from "../assets/icons/power";
import Desklamp from "../assets/icons/desklamp";

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
      height: ${(props) => (props.active ? "90px" : "50px")};
      padding: ${(props) => (props.active ? "10px" : "5px")};
      box-sizing: border-box;
      white-space: nowrap;

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
        display: ${(props) => (props.active ? "block" : "none")};

        font-weight: 300;
        font-size: 14px;
        line-height: 24px;

        text-align: right;
      }
    }
  }

  .divider {
    width: 216px;
    margin: 10px 17px 5px;
    border-bottom: 1px solid #e5e5e5;
    display: ${(props) => (props.active ? "block" : "none")};
  }

  .menu {
    display: flex;
    flex-direction: column;
    height: ${(props) =>
      props.active ? "calc(100vh - 106px)" : "calc(100vh - 50px)"};
    .align-end {
      margin-bottom: auto;
    }
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
    .active {
      background: #ffeb3b;
      :hover {
        .headline {
          background: #000;
          color: #ffeb3b;
        }
        path {
          fill: #ffeb3b;
        }
      }
    }

    .icon {
      width: ${(props) => (props.active ? "26px" : "24px")};
      height: ${(props) => (props.active ? "26px" : "24px")};
      margin: ${(props) => (props.active ? "9px 20px" : "10px 13px")};
      float: left;
    }

    .headline {
      font-family: Rubick, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 45px;
      letter-spacing: 0.3px;

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
          <div className="align-end">
            <div className="item">
              <Desklamp className="icon" />
              <div className="headline">Cursos</div>
            </div>

            <div className="item">
              <Vacancies className="icon" />
              <div className="headline">Vagas</div>
            </div>

            <div className="item">
              <Person className="icon" />
              <div className="headline">Perfil</div>
            </div>
          </div>

          <div className="item">
            <Cog className="icon" />
            <div className="headline">Configurações</div>
          </div>

          <div className="item active">
            <Power className="icon" />
            <div className="headline">Sair</div>
          </div>
        </div>
      </VerticalBar>
    </div>
  );
}
