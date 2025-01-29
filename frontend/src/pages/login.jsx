import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Grid2 as Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorEmail("Please fill in all fields");
      setErrorPassword("Please fill in all fields");
      return;
    }
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    setErrorEmail("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setErrorPassword("");
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
            width: 650, // Adjust size of the circle
            height: 650,
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))", // Top-down gradient

            top: "50%", // Adjust vertical position
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
            Rommiverse
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
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          px: "3rem",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
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
                error={errorEmail}
                helperText={errorEmail}
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
                error={errorPassword}
                helperText={errorPassword}
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
                  href="/signup"
                >
                  <Typography>Sign up</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
