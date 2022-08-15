import styled from "styled-components";
import Logo from "../assets/FanAnimeListLogo.png";



const Header = () => {
  return(
    <Wrapper>
      <h1>Lupa</h1>
      <img src={Logo} alt="FanAnimeListLogo" />
      <h1>Menu</h1>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 100px;
  padding: 0 50px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 3;
  h1 {
    font-family: Roboto;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
  }

  img {
    height: 80px;
  }

  background-color: #126BA5;
`;

export default Header;
