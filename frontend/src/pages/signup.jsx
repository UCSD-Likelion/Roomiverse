import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Typography,
  Card,
  Snackbar,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

import RegisterForm from "../components/register-form";
import { registerUser } from "../api";
import { formValidation } from "../utils/validators";

export default function Signup() {
  const [dob, setDob] = useState(new Date());
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, setGender] = useState("");
  const [error, setError] = useState({});
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error.email) {
      setError({ ...error, email: "" });
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (error.firstName) {
      setError({ ...error, firstName: "" });
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (error.lastName) {
      setError({ ...error, lastName: "" });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error.password) {
      setError({ ...error, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (error.password) {
      setError({ ...error, password: "" });
    }
  };

  const handleDOBChange = (newValue) => {
    setDob(newValue);
    if (error.dob) {
      setError({ ...error, dob: "" });
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = {};

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      error.password = "Passwords do not match";
      setError(error);
    }

    if (firstName === "") {
      console.error("First name is required");
      error.firstName = "First name is required";
      setError(error);
    }
    if (lastName === "") {
      console.error("Last name is required");
      error.lastName = "Last name is required";
      setError(error);
    }

    const userData = {
      name: `${firstName} ${lastName}`,
      email: email,
      password: password,
      birthdate: dob,
      gender: gender,
    };

    const validationErrors = formValidation(userData);
    error = { ...error, ...validationErrors };

    setError(error);

    if (Object.keys(error).length > 0) {
      setSnack({
        open: true,
        message: "Please Enter Valid Response.",
        severity: "error",
      });
      return;
    }

    try {
      const createdUser = await registerUser(userData);

      if (!createdUser) {
        setSnack({
          open: true,
          message: "Failed to register. Please try again.",
          severity: "error",
        });
        throw new Error("Cannot create user");
      }

      console.log(createdUser);
      navigate("/login", {
        state: {
          successMessage:
            "You're all set! Login to your new account and explore your potential match!",
        },
      });
    } catch (error) {
      console.error("Faild to upload user: ", error);
      setSnack({
        open: true,
        message: error.message || "Registration failed.",
        severity: "error",
      });
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
          py: 3,
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
            Sign Up
          </Typography>
          <RegisterForm
            firstName={firstName}
            handleFirstNameChange={handleFirstNameChange}
            lastName={lastName}
            handleLastNameChange={handleLastNameChange}
            email={email}
            password={password}
            showPassword={showPassword}
            confirmPassword={confirmPassword}
            showConfirmPassword={showConfirmPassword}
            error={error}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onShowPasswordToggle={() => setShowPassword(!showPassword)}
            handleDOBChange={handleDOBChange}
            onConfirmPasswordChange={handleConfirmPasswordChange}
            onShowConfirmPasswordToggle={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            onSubmit={handleSubmit}
            handleGenderChange={handleGenderChange}
            gender={gender}
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
