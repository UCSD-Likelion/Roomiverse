import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

const API_URL = "http://localhost:5186/api/Users"; // Your API base URL

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/getuser`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      refreshAccessToken();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoginLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", response.data.accessToken);
      setUser(response.data.user);
    } catch (error) {
      console.error("Failed to login: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("token");
      setUser(null);
    } catch (error) {
      console.error("Failed to logout: ", error);
    }
  };

  const refreshAccessToken = async () => {
    try {
      console.log("Refreshing token...");
      const refreshToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("refreshToken="))
        ?.split("=")[1];

      if (!refreshToken) {
        console.error("No refresh token found");
        return;
      }

      const response = await axios.post(
        "/api/users/refresh",
        {
          refreshToken: document.cookie
            .split("; ")
            .find((row) => row.startsWith("refreshToken="))
            ?.split("=")[1],
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      setUser(response.data.user);
    } catch (error) {
      console.error("Token refresh failed", error);
      logout();
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
