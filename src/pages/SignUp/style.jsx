import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;

  img {
    width: 200px;
    margin-left: 30px;
    margin-top: 10px;

    cursor: pointer;
  }
`

const Title = styled.div`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 64px;
  color: #111111;

  text-rendering: optimizelegibility;

  margin-top: 25px;
  margin-bottom: 24px;
`

const ContainerInput = styled.form(({ disableButton }) => `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin-bottom: 32px;

  button {
    height: 65px;
    width: 50%;
    background-color: ${disableButton ? "#888" : "#ED400C"};
    opacity: ${disableButton ? 0.7 : 1};
    color: rgb(20, 21, 25);
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    border-radius: 0px;
    border: none;

    margin-top: 20px;
    
    cursor: ${disableButton ? 'not-allowed' : 'pointer'};
    pointer-events: ${disableButton ? 'none' : 'auto'};

    text-decoration: none;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-property: color, background-color, box-shadow;
    user-select: none;

    &:hover {
      background-color: rgb(244, 117, 33);
    }
  }
`);

const Field = styled.div(({ transformLabel }) => `
  display: flex;
  flex-direction: column;

  padding: 24px 0px 0px;
  margin-bottom: 24px;
  width: 50%;
  height: 60px;
  border-bottom: 2px solid rgb(160, 160, 160);

  position: relative;

  label {
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 18px;
    line-height: 40px;

    color: rgb(160, 160, 160);

    top: 18.5px;
    left: 0px;
    transform: ${transformLabel ? 'scale(0.66) translateY(-16px)' : ''};
    transform-origin: left top;
    transition: transform 0.2s cubic-bezier(0.5, 0, 0.25, 1) 0s;

    cursor: default;
    position: absolute;

    z-index: -1;
  }

  input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    
    display: block;
    border: none;
    border-radius: 0px;

    transition: border-color 0.2s cubic-bezier(0.5, 0, 0.25, 1) 0s;
    overflow: hidden;
    
    &::placeholder {
      color: rgb(160, 160, 160);
    }
    &::disabled {
      background-color: #F2F2F2;
      color: #AFAFAF;
    }
    &:focus {
      box-shadow: 0 0 0 0;
      outline: none;
    }

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
  }
`);

const StyledContainer = styled.div`
  display: flex;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  gap: 5px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: none;
  color: #ED400C;
  @media (max-width: 800px){
    font-size: 17px;
  }
`;

export {
  Wrapper,
  Header,
  Title,
  ContainerInput,
  Field,
  StyledContainer,
  StyledLink,
}