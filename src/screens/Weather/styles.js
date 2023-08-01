import styled from "styled-components";

import CloudyNight from "../../assets/bgs/CloudyNight.png";

import {
  BlueLight,
  White,
  Gray100,
  Gray200,
  Gray400,
  Gray700,
  Gray800,
  Gray900
} from "../../colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    user-select: none;
    margin-bottom: 60px;
  }

  .logo-text {
    font-size: 24px;
    color: ${Gray200};
    user-select: none;
  }

  img {
    height: 30px;
    margin-right: 16px;
  }

  span {
    color: ${BlueLight};
  }

  h1 {
    margin: 0px;
    font-weight: 400;
    font-size: 26px;
  }

  h4 {
    color: ${Gray200};
    margin: 0px;
    margin-top: 10px;
    font-weight: 100;
    font-size: 18px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Widget = styled.div`
  height: 304px;
  width: 335px;
  border-radius: 12px;
  background-color: ${Gray700};
  background-image: url(${CloudyNight});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 30px 0px 30px;
  text-align: left;
  user-select: none;
  margin: 10px;

  .widget-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .city {
    margin: 0px;
    font-size: 16px;
    font-weight: bold;
    color: ${Gray100};
  }

  .date-time {
    margin: 0px;
    font-size: 12px;
    font-weight: regular;
    color: ${Gray100};
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .widget-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .widget-info,
  .widget-icon {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 1px;
  }

  .now-temp {
    margin: 0px;
    font-size: 48px;
    font-weight: bolder;
    color: ${White};
  }

  .today-temp {
    margin: 0px;
    font-size: 16px;
    font-weight: 400;
    color: ${Gray100};
  }

  .now-state {
    margin: 0px;
    font-size: 14px;
    font-weight: normal;
    color: ${Gray100};
  }
`;

export const WeatherIcon = styled.div`
  width: 180px;
  height: 180px;
  margin: 0px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
`;

export const WidgetStats = styled.div`
  width: 335px;
  border-radius: 12px;
  background-color: ${Gray800};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  margin: 10px;

  .option {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top: 1px solid ${Gray900};
    box-sizing: border-box;
    padding: 5px 20px;
    margin: 0px;
    transition: all ease-in-out 0.3s;
  }

  .option-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      font-size: 15px;
      font-weight: bold;
      color: ${Gray200};
      margin-left: 20px;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: ${Gray100};
  }
`;

export const WidgetPrevision = styled.div`
  min-height: 304px;
  border-radius: 12px;
  background-color: ${Gray800};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  padding: 30px 10px;

  @media (max-width: 700px) {
    min-height: 100px;
    margin: 10px 0px;
    width: 335px;
  }

  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .option-title {
    margin: 0px;
    font-size: 16px;
    font-weight: bold;
    color: ${Gray200};
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .option-max {
    margin: 0px;
    color: ${Gray100};
    font-size: 14px;
    font-weight: bold;
  }

  .option-min {
    margin: 0px;
    color: ${Gray400};
    font-size: 14px;
    font-weight: bold;
  }
`;

export const PrevisionIcon = styled.div`
  width: 110px;
  height: 110px;
  margin: 0px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  margin: 5px 0px;

  @media (max-width: 700px) {
    width: 60px;
    height: 60px;
  }
`;
