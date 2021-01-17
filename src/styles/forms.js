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

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  /* identical to box height, or 120% */
  letter-spacing: 0.15px;

  color: #5b5a5a;
`;

export const ButtonCard = styled.button`
  border: 1px solid #e5e5e5;
  background: ${(props) =>
    props.color ? props.color : "rgba(200, 185, 0, 1)"};
  border-radius: 20px;
  width: 330px;
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
  background: #0086c3;
  border-radius: 30px;
  width: 60px;
  height: 60px;

  color: #ffffff;
  cursor: pointer;

  path {
    fill: #ffffff;
  }
`;

export const LongButton = styled.button`
  border: 1px solid #e5e5e5;
  background: #0086c3;
  border-radius: 5px;
  width: 750px;
  padding: 10px 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: #ffffff;

  color: #ffffff;
  cursor: pointer;
`;

export const Button = styled.button`
  margin: 24px 0px;
  border: 1px solid #e5e5e5;
  background: #0086c3;
  border-radius: 4px;
  width: 100%;
  padding: 15px 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  /* identical to box height, or 114% */
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  /* 03. On Primary / High Emphasis */
  color: #ffffff;
  cursor: pointer;
`;

export const Input = styled.div`
  width: 100%;
  text-align: left;
  margin: 10px 0px;
  label {
    margin-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #3d3d3d;
    margin-bottom: 10px;
  }

  input {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.17);
    border-radius: 0px;
    padding: 9px 13px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    border: 1px solid #e5e5e5;
    color: #3d3d3d;
    background-color: #fff;
    height: 40px;
    margin: 0px;
    width: 100%;
    box-sizing: border-box;
    :hover,
    :focus {
      background: #cccccc;
    }
  }

  textarea {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.17);
    width: 100%;
    border-radius: 0px;
    padding: 9px 13px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    border: 0px solid #000000;
    color: #3d3d3d;
    background-color: #fff;
    margin: 0px 10px 0px 0px;
    resize: none;
    box-sizing: border-box;
    :hover,
    :focus {
      background: #cccccc;
    }
    ::placeholder {
      color: #3d3d3d;
      opacity: 0.9;
    }
  }
`;

export const Select = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 10px 0px;
  padding: 0px;
  outline: none;
  text-align: left;

  label {
    margin-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #3d3d3d;
    margin-bottom: 10px;
  }

  select {
    width: 100%;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.17);
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    padding: 9px 13px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    outline: 0;
    border: 0px solid #e5e5e5;
    color: #3d3d3d;
    height: 40px;
    background-color: #fff;

    :hover,
    :focus {
      color: #000000;
      background: #cccccc;
      .select_arrow {
        border-top-color: #000000;
      }
    }

    :disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .select_arrow {
    position: absolute;
    top: 40px;
    right: 10px;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0px 5px;
    border-color: #7b7b7b transparent transparent transparent;
  }

  :hover,
  :focus {
    .select_arrow {
      border-top-color: #000000;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${Select}:first-child {
    margin-right: 10px;
    margin-left: 0px;
  }

  ${Select} {
    margin: 10px;
  }

  ${Input}:first-child {
    margin-right: 0px;
    margin-right: 10px;
  }

  ${Input}:last-child {
    margin-left: 10px;
  }
`;
