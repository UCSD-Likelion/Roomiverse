import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Alert,
  Box,
  Typography,
  Snackbar,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

import { loginValidation } from "../utils/validators";
import { AuthContext } from "../context/AuthProvider";
import LoginForm from "../components/login-form";

export default function Login() {
  const location = useLocation();
  const { login, user } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const successMessage = location.state?.successMessage || "";

  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage) {
      setSnack({
        open: true,
        message: successMessage,
        severity: "success",
      });
    }
  }, [successMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = loginValidation({ email, password });
    setError(validation);

    if (Object.keys(validation).length > 0) {
      setSnack({
        open: true,
        message: "Please Enter Valid Response.",
        severity: "error",
      });
      return;
    }

    try {
      await login(email, password);

      console.log("Logged in successfully");

      setTimeout(() => {
        navigate("/", {
          state: {
            successMessage: "Welcome back! You have successfully logged in.",
          },
        });
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error(error);
      setSnack({
        open: true,
        message: "Login failed. Check your credentials.",
        severity: "error",
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error.email) {
      setError({ ...error, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error.password) {
      setError({ ...error, password: "" });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#95AAFF",
      }}
    >
      <Card
        sx={{
          maxWidth: 450,
          width: "100%",
          borderRadius: "20px",
          py: 10,
          px: 2,
          boxShadow: 4,
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column", px: 5 }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Login
          </Typography>

          <LoginForm
            email={email}
            password={password}
            showPassword={showPassword}
            error={error}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onShowPasswordToggle={() => setShowPassword(!showPassword)}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={() => setSnack({ ...snack, open: false })}
          severity={snack.severity}
          sx={{ width: "100%" }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
