import styled from "styled-components";

import {
  BlueLight,
  Gray100,
  Gray200,
  Gray400,
  Gray500,
  Gray600,
  Gray900
} from "../../colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  max-width: 400px;
  background-color: ${Gray600};
  border-radius: 10px;
  height: 50px;
  box-sizing: border-box;
  padding: 0px;
  margin-top: 40px;

  input {
    font-family: "Nunito Sans", sans-serif;
    background-color: ${Gray600};
    width: 100%;
    border: none;
    outline: none;
    color: ${Gray100};
    font-size: 16px;
    padding: 10px 25px;
    box-sizing: border-box;
    margin: 0px;
    ::placeholder {
      color: ${Gray400};
      font-size: 16px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: ${Gray400};
    border: none;
    outline: none;
    margin: 0px 10px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-radius: 10px;
  width: 400px;
  min-height: 55px;
  background-color: ${Gray500};
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0px;

  .option {
    display: flex;
    flex-direction: row;
    text-align: left;
    font-size: 14px;
    width: 100%;
    border-top: 1px solid ${Gray900};
    box-sizing: border-box;
    padding: 15px 30px;
    margin: 0px;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    color: ${Gray100};
    &:hover {
      opacity: 0.6;
    }
  }
`;
