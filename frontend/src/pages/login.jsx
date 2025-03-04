import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Snackbar,
  Grid2 as Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { loginValidation } from "../utils/validators";
import { AuthContext } from "../context/AuthProvider";

export default function Login() {
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

  const navigate = useNavigate();

  if (user) {
    navigate("/dashboard");
  }

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
      setSnack({
        open: true,
        message: "Logged in successfully!",
        severity: "success",
      });

      console.log("Logged in successfully");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error(error);
      setSnack({
        open: true,
        message: "Login failed. Check your credentials.",
        severity: "error",
      });
    } finally {
      navigate("/");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
      }}
    >
      <Box
        component="section"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#FF6F61",
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
          px: "8rem",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 650,
            height: 650,
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
            top: "55%",
            transform: "translateY(-50%)",
            left: "2%",
            zIndex: 1,
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ color: "white", fontWeight: 700 }}>
            Roomiverse
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{ marginTop: 1, fontWeight: 300, color: "white" }}
          >
            Find your vibe,
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{ margin: 0, fontWeight: 300, color: "white" }}
          >
            share your space.
          </Typography>
        </motion.div>
      </Box>
      <Box
        component="section"
        sx={{
          flex: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          px: "6rem",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#283b42" }}>
          Login
        </Typography>
        <Box
          variant="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                variant="outlined"
                color="black"
                onChange={handleEmailChange}
                sx={{ color: "black" }}
                error={!!error.email}
                helperText={error.email}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                fullWidth
                required
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                color="black"
                sx={{ marginBottom: 1, marginTop: 1, color: "black" }}
                onChange={handlePasswordChange}
                error={!!error.password}
                helperText={error.password}
                slotProps={{
                  input: {
                    endAdornment: showPassword ? (
                      <VisibilityIcon
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      />
                    ),
                  },
                }}
              />
              <Link
                href="/forgot-password"
                underline="hover"
                sx={{
                  display: "display",
                  marginTop: 1,
                  fontSize: "0.9rem",
                  alignSelf: "flex-end",
                  color: "#1d6a96",
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography>Forgot password</Typography>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#FF6F61",
                  color: "white",
                  "&:hover": { backgroundColor: "#ff7c70" },
                  borderRadius: "0.5rem",
                  py: "0.75rem",
                }}
                disabled={!email || !password}
              >
                <Typography sx={{ fontSize: 24 }}>Sign In</Typography>
              </Button>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <Typography>Don&apos;t have an account?</Typography>
                <Link
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                  href="/register"
                >
                  <Typography>Signup</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
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
