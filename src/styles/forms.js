import styled from "styled-components";

export const InputEfect = styled.div`
  position: relative;
  text-align: left;
  margin: 20px 10px;
  :focus {
    outline: none;
  }
  input {
    border: 0;
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
    background-color: transparent;
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }
  input:focus {
    ~ .focus-border {
      width: 100%;
      transition: 0.4s;
      left: 0;
    }
    ~ label {
      top: -16px;
      font-size: 12px;
      color: #1d4657;
      transition: 0.3s;
    }
  }
  input ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #1d4657;
    transition: 0.4s;
  }
  label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 10px auto;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px 20px;
`;

export const ButtonCard = styled.button`
  border: 1px solid #e5e5e5;
  background: ${(props) =>
    props.color ? props.color : "rgba(200, 185, 0, 1)"};
  border-radius: 20px;
  width: 250px;
  padding: 5px 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: #ffffff;
  cursor: pointer;
`;

export const FloatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;

  border: 1px solid #e5e5e5;
  background: "#0086C3";
  border-radius: 20px;
  width: 50px;
  height: 50px;

  color: #ffffff;
  cursor: pointer;
`;
