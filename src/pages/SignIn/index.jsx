import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading';
import Logo from "../../assets/FanAnimeListLogo.png";

import { Wrapper, Title, ContainerInput, Field, StyledLink,Header,StyledContainer } from "./style";

import { AuthContext } from "../../contexts/auth";

const SignIn = () => {
  const navigate = useNavigate();

  // const userStorage = localStorage.getItem("user")
  // if (userStorage) navigate("/home");

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState({ placeholder: "LOGIN", disabled: false });
  const [transformInputEmail, setTransformInputEmail] = useState({disabled: false});
  const [transformInputPasswod, setTransformInputPassword] = useState({disabled: false});
  const { login } = useContext(AuthContext);

  const handleParentClick = event => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      transformInputEmail.disabled = false; 
      transformInputPasswod.disabled = false;
      setTransformInputEmail({...transformInputEmail}); 
      setTransformInputPassword({...transformInputPasswod}); 
    }
  };

  const handleChildClickEmail = event => {
    transformInputEmail.disabled = true; 
    setTransformInputEmail({...transformInputEmail}); 
  };

  const handleChildClickPassword = event => {
    transformInputPasswod.disabled = true; 
    setTransformInputPassword({...transformInputPasswod}); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    login(formData.email, formData.password, isLoading, setIsLoading);

    isLoading.placeholder = <Loading height={100} width={100} />
    isLoading.disabled = true;
    setIsLoading({ ...isLoading });
  }


  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Wrapper onClick={handleParentClick}>
      <Header onClick={handleParentClick}>
        <img src={Logo} alt="FanAnimeListLogo" onClick={() => navigate("/")} />
      </Header>
      <Title>Login</Title>
      <ContainerInput onSubmit={handleLogin}  disableButton={isLoading.disabled}>
        <Field transformLabel={transformInputEmail.disabled}>
          <label>E-mail</label>
          <input onClick={handleChildClickEmail}
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            disabled={isLoading.disabled && "disabled"}
            required
          />
        </Field>
        <Field transformLabel={transformInputPasswod.disabled}>
          <label>Password</label>
          <input onClick={handleChildClickPassword}
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            disabled={isLoading.disabled && "disabled"}
            required
          />
        </Field>
      <button type="submit">
          {isLoading.placeholder}
      </button>
      </ContainerInput>
      <StyledContainer>
        <p>First time? </p>
        <StyledLink to="/signup">Create an account!</StyledLink>
      </StyledContainer>
    </Wrapper>
  );
}

export default SignIn;