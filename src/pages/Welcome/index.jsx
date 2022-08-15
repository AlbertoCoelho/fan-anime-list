import { useState } from 'react';
import styled from "styled-components";
import Logo from "../../assets/FanAnimeListLogo.png";
import BackgroundImage from "../../assets/animebackgroundimage.jpg";
import { useNavigate } from 'react-router-dom';


const Welcome = () => {

  const [isLoading, setIsLoading] = useState( {disabled: false} );
  const navigate = useNavigate();

  return (
    <Background>
      <ScreenOverlay>
        <Header disableButton={isLoading.disabled} >
          <img src={Logo} alt="FanAnimeListLogo" />
          <div className="buttonContainer">
            <button onClick={() => navigate("/signin")} className='noBorder'>LOGIN</button>
            <button onClick={() => navigate("/signup")}>SIGN UP</button>
          </div>
        </Header>
        <Text>
          <p>PROCURE, COMPARTILHE E FAÇA UMA LISTA</p>
          <p>COM SEUS ANIMES FAVORITOS</p>
        </Text>
      </ScreenOverlay>
    </Background>
  );
}

const Background = styled.div`
	line-height: 1;
  background-image: linear-gradient(to top, #ed400c 30%, transparent 90%),
  	url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%, cover;
  background-attachment: fixed;
  background-position: center bottom;
	background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
`

const ScreenOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.div(({ disableButton }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;

  img {
    width: 200px;
    margin-left: 30px;
    margin-top: 10px;
  }

  .buttonContainer {
    display: flex;
    gap: 20px;
    margin-right: 50px;

    button {
      width: 135px;
      height: 37.17px;
  
      position: relative;
  
      text-decoration: none;
      transition-duration: 0.2s;
      transition-timing-function: ease;
      transition-property: color, background-color, box-shadow;
      user-select: none;
  
      background-color: transparent;
      opacity: ${ disableButton ? 0.7 : 1 };
      color: rgb(218, 218, 218);
      
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: 'Recursive';
      font-size: 21px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: center;
      text-transform: uppercase;

      border-radius: 3px;
      border-color: #E8E8E8;
      box-shadow: inset 0 0 0 0 rgb(218, 218, 218);
  
      cursor: ${ disableButton ? 'not-allowed' : 'pointer' };
      pointer-events: ${ disableButton ? 'none' : 'auto'};

      &:hover {
        color: #FFFFFF;
        border-color: #FFFFFF;
      }
    }
    .noBorder {
        border: none;
    }
  }
`);

const Text = styled.p`
  font-family: 'Recursive';
  font-size: 35px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
  margin-bottom: 125px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Welcome;