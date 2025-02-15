import axios from "axios";

const API_URL = "http://localhost:5186/api";

export const signIn = async (user) => {
  const response = await axios.post(`${API_URL}/Users`, user);
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${API_URL}/Users/login`, user);
  return response.data;
}