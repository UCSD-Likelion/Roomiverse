import axios from "axios";

const API_URL = "http://localhost:5186/api";

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/Users/register`, user);
    return response;
  } catch (error) {
    console.error("Failed to register: ", error);
    throw new Error("Failed to register: " + error.response.data);
  }
};

export const login = async (user) => {
  const response = await axios.post(`${API_URL}/Users/login`, user, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchProfile = async () => {
  const token = localStorage.getItem("token");
  console.log("Token:", token);

  if (!token) {
    console.error("Token not found");
    throw new Error("Token not found");
  }

  const response = await axios.get(`${API_URL}/Users/getuser`, {
    headers: {
      Authorization: `Bearer ${token.trim()}`,
    },
  });

  console.log("Profile Data:", response.data);
  return response.data;
};

export const uploadProfilePicture = async (base64Image) => {
  const token = localStorage.getItem("token");
  console.log("Token:", token);

  if (!token) {
    console.error("Token not found");
    throw new Error("Token not found");
  }

  try {
    const response = await axios.post(
      `${API_URL}/Users/upload`,
      { Base64String: base64Image },
      {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Upload Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Error uploading image: " + error.response.data);
  }
};
