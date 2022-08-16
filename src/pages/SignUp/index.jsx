import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";

import Logo from "../../assets/FanAnimeListLogo.png";

import { makeSignUp } from "../../services/api";

import { Wrapper, Header, Title, ContainerInput, Field, StyledContainer, StyledLink } from "./style";


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState({
    placeholder: "SIGN UP",
    disabled: false,
  });

  const [transformInputEmail, setTransformInputEmail] = useState({disabled: false});
  const [transformInputPassword, setTransformInputPassword] = useState({disabled: false});
  const [transformInputUsername, setTransformInputUsername] = useState({disabled: false});
  const [transformInputImage, setTransformInputImage] = useState({disabled: false});

  const navigate = useNavigate();

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleParentClick = event => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      transformInputEmail.disabled = false; 
      transformInputPassword.disabled = false;
      transformInputUsername.disabled = false;
      transformInputImage.disabled = false;
      setTransformInputEmail({...transformInputEmail}); 
      setTransformInputPassword({...transformInputPassword}); 
      setTransformInputEmail({...transformInputUsername}); 
      setTransformInputEmail({...transformInputImage}); 
    }
  };

  const handleChildClickEmail = event => {
    transformInputEmail.disabled = true; 
    setTransformInputEmail({...transformInputEmail}); 
  };

  const handleChildClickPassword = event => {
    transformInputPassword.disabled = true; 
    setTransformInputPassword({...transformInputPassword}); 
  };

  const handleChildClickUsername = event => {
    transformInputUsername.disabled = true; 
    setTransformInputUsername({...transformInputUsername}); 
  };

  const handleChildClickImage = event => {
    transformInputImage.disabled = true; 
    setTransformInputImage({...transformInputImage}); 
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    isLoading.placeholder = <Loading height={100} width={100} />;
    isLoading.disabled = true;
    setIsLoading({ ...isLoading });

    try {
      await makeSignUp({ ...formData });
      setIsLoading(false);
      navigate("/signin");
    } catch {
      alert("Please fill in the data correctly");
      isLoading.placeholder = "SIGN UP";
      isLoading.disabled = false;
      setIsLoading({ ...isLoading });
    }
  };


  return (
    <Wrapper onClick={handleParentClick}>
      <Header onClick={handleParentClick}>
        <img src={Logo} alt="FanAnimeListLogo" onClick={() => navigate("/")} />
      </Header>
      <Title>Sign Up</Title>
      <ContainerInput onSubmit={handleSignUp}  disableButton={isLoading.disabled} onClick={handleParentClick}>
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
        <Field transformLabel={transformInputPassword.disabled}>
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
        <Field transformLabel={transformInputUsername.disabled}>
          <label>Username</label>
          <input onClick={handleChildClickUsername}
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            disabled={isLoading.disabled && "disabled"}
            required
          />
        </Field>
        <Field transformLabel={transformInputImage.disabled}>
          <label>Picture Url</label>
          <input onClick={handleChildClickImage}
            type="text"
            value={formData.image}
            onChange={handleInputChange}
            name="image"
            disabled={isLoading.disabled && "disabled"}
            required
          />
        </Field>
        <button type="submit">
          {isLoading.placeholder}
        </button>
      </ContainerInput>
      <StyledContainer>
        <p>Already have an account? </p>
        <StyledLink to="/signin">Login</StyledLink>
      </StyledContainer>
    </Wrapper>
  );
}

export default SignUp;