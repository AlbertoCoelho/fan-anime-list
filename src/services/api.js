import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000"
});

export const makeSignUp = async (formData) => {
  await api.post("/signup", formData);
};

export const makeSignIn = async (formData) => {
  const token = await api.post("/signin", formData);
  return token;
};