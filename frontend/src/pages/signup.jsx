import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Grid2 as Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { motion } from "framer-motion";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = {};

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      error.password = "Passwords do not match";
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
      return;
    }

    try {
      const createdUser = await registerUser(userData);

      if (!createdUser) {
        throw new Error("Cannot create user");
      }
      
      console.log(createdUser);
      navigate("/login");
    } catch (error) {
      console.error("Faild to upload user: ", error);
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
            Welcome to Roomiverse!
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
          Signup
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
            <Grid
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
            >
              <TextField
                required
                fullWidth
                label="First Name"
                variant="outlined"
                color="black"
                onChange={handleFirstNameChange}
                sx={{ color: "black" }}
              />
              <TextField
                required
                fullWidth
                label="Last Name"
                variant="outlined"
                color="black"
                onChange={handleLastNameChange}
                sx={{ color: "black" }}
              />
            </Grid>
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
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                color="black"
                onChange={handlePasswordChange}
                error={!!error.password}
                helperText={error.password}
                sx={{ color: "black" }}
                slotProps={{
                  input: {
                    endAdornment: showPassword ? (
                      <VisibilityIcon
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{
                          "&:hover": { cursor: "pointer" },
                        }}
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
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                fullWidth
                required
                label="Confirm Password"
                variant="outlined"
                color="black"
                type={showConfirmPassword ? "text" : "password"}
                sx={{ color: "black" }}
                onChange={handleConfirmPasswordChange}
                slotProps={{
                  input: {
                    endAdornment: showConfirmPassword ? (
                      <VisibilityIcon
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      />
                    ),
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  onChange={(newValue) => setDob(newValue)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!error.birthdate,
                      helperText: error.birthdate,
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item sx={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                  Gender
                </InputLabel>

                <Select
                  fullWidth
                  labelId="demo-simple-select-standard-label"
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#FF6F61",
                  color: "white",
                  "&:hover": { backgroundColor: "#ff7c70" },
                  borderRadius: "0.5rem",
                  py: "0.75rem",
                }}
                onClick={handleSubmit}
                disabled={
                  !firstName ||
                  !lastName ||
                  !email ||
                  !password ||
                  !confirmPassword ||
                  !dob ||
                  !gender
                }
              >
                <Typography sx={{ fontSize: 24 }}>Sign Up</Typography>
              </Button>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <Typography>Already have an account?</Typography>
                <Link
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                  href="/login"
                >
                  <Typography>Login</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
