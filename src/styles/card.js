import styled from "styled-components";

export const CourseCard = styled.div`
  margin: 20px 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 100%;
  display: flex;
  flex-direction: row;

  .timetable {
    background: #0086c3;
    border-radius: 20px 0px 0px 20px;
    width: 227px;
    height: 186px;

    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    .date {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 24px;

      letter-spacing: 0.15px;

      color: #ffffff;
    }
    .time {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;

      letter-spacing: 0.15px;

      color: rgba(255, 255, 255, 0.7);
    }
  }

  .informations {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 186px;

    width: ${() => "calc(100% - 227px)"};
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 5px;

    padding: 23px;

    .title {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;

      /* identical to box height, or 133% */
      letter-spacing: 0.15px;
    }

    .local {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      /* or 150% */
      letter-spacing: 0.15px;

      color: rgba(0, 0, 0, 0.6);
    }
    .value {
      position: absolute;
      right: 30px;
      top: 23px;

      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;

      letter-spacing: 0.15px;
      color: #0086c3;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;