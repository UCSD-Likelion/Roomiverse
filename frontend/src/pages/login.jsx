import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Alert,
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Snackbar,
  Grid2 as Grid,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { loginValidation } from "../utils/validators";
import { AuthContext } from "../context/AuthProvider";

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
          maxWidth: 400,
          width: "100%",
          borderRadius: "20px",
          py: 10,
          px: 2,
          boxShadow: 4,
          border: "1px solid #4A4C54",
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

          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                variant="filled"
                size="small"
                onChange={handleEmailChange}
                error={!!error.email}
                helperText={error.email}
                value={email}
                slotProps={{
                  input: {
                    sx: {
                      bgcolor: "#E6E9FF",
                      borderRadius: 2,
                      pl: 1,
                      fontSize: "16px",
                    },
                    disableUnderline: true,
                  },
                  inputLabel: {
                    shrink: true,
                    sx: {
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "text.primary",
                      mb: 0.5,
                    },
                  },
                }}
                sx={{
                  mt: 1,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Password"
                variant="filled"
                onChange={handlePasswordChange}
                error={!!error.password}
                helperText={error.password}
                value={password}
                size="small"
                type={showPassword ? "text" : "password"}
                slotProps={{
                  input: {
                    sx: {
                      bgcolor: "#E6E9FF",
                      borderRadius: 2,
                      pl: 1,
                      fontSize: "16px",
                    },
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                  inputLabel: {
                    shrink: true,
                    sx: {
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "text.primary",
                      mb: 0.5,
                    },
                  },
                }}
                sx={{
                  mt: 1,
                }}
              />
            </Grid>
          </Grid>

          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              sx={{
                borderRadius: "30px",
                px: 3,
                width: "50%",
                backgroundColor: "#A9B8FF",
                color: "#fff",
                ":hover": {
                  backgroundColor: "#91A3E0",
                },
              }}
            >
              Login
            </Button>
          </Box>

          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Don't have an account{" "}
              <Link href="/signup" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Box>
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
