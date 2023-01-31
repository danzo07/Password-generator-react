import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #131218;
  overflow: scroll;
  h1 {
    color: #53525a;
    text-align: center;
    line-height: 1;
  }
`;

export const Container = styled.div`
  width: clamp(300px, 80%, 600px);
`;

export const Password = styled.div`
  margin: 10px 0px;
  width: 100%;
  height: 80px;
  background-color: #24232b;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    background-color: #24232b;
    outline: 0;
    border: 0;
    padding: 15px 0px 15px 15px;
    color: #dfdfdf99;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
  svg {
    transition: 300ms all ease-in;
    color: #a4ffaf;
    width: 50px;
    height: 50px;
    padding: 0px 15px 0px 0px;
    cursor: pointer;
    &:active {
      color: white;
    }
  }
`;

export const BuildContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #24232b;
  @media only screen and (max-width: 400px) {
    padding: 15px;
  }

  .textbox {
    display: flex;
    justify-content: space-between;
    padding: 25px 0px;
    .sub_text {
      color: #e7e6ee;
      font-weight: bold;
      font-size: 1.5rem;
    }
    .sub_value {
      color: #a4ffaf;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
  .slider {
    margin: 10px 0px;
    width: 100%;
    height: 7px;
    border-radius: 2rem;
    background: #191820;
    outline: none;
    appearance: none;
    &::-moz-range-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ffff;
      cursor: pointer;
    }
  }
`;
 export const Strengh = styled.div`
   color: white;
   padding: 10px 30px;
   background-color: #24232b;
   @media only screen and (max-width: 400px) {
     padding: 10px 15px;
   }
   .progress_bar {
     background-color: #ffffffa0;
     height: 15px;
     border-radius: 2rem;
    margin: 15px 0px;
   }
 `;

export const Button = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #24232b;
  @media only screen and (max-width: 400px) {
    padding: 15px;
  }
  button {
    width: 100%;
    background-color: #24232b;
    padding: 10px;
    border: 2px solid #a4ffaf;
    color: #a4ffaf;
    display: block;
    padding: 22px 0px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    transition: all 300ms ease-in;
    svg {
      transition: all 300ms ease-in;
    }
    &:hover {
      background-color: #a4ffaf;
      color: #24232b;
      svg {
        transform: translate(10px);
      }
    }
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin: 15px 0px;
  label {
    color: white;
  }
  input {
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 30px;
    height: 30px;
    border: 0.15em solid #a4ffaf;
    outline: none;
    cursor: pointer;
    transition: all 300ms ease-in;
  }
  input:checked {
    background-color: #a4ffaf;
    position: relative;
    &::before {
      position: absolute;
      left: 0;
      top: 50%;
      height: 31%;
      width: 3px;
      background-color: #24232b;
      content: "";
      transform: translateX(10px) rotate(-45deg);
      transform-origin: left bottom;
    }
    &::after {
      position: absolute;
      left: 0;
      bottom: 19%;
      height: 3px;
      width: 66%;
      background-color: #24232b;
      content: "";
      transform: translateX(10px) rotate(-45deg);
      transform-origin: left bottom;
    }
  }
`;
