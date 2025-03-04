import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
  Input,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
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
  // State for signup fields
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

  // Optional profile-related state (if needed in signup)
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [instagram, setInstagram] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [age, setAge] = useState(21);

  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDoneEditing = () => {
    console.log("Profile updated:", { firstName, lastName, age, instagram, aboutMe });
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = {};

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      err.password = "Passwords do not match";
      setError(err);
      return; // Stop submission if passwords don't match
    }

    const userData = {
      name: `${firstName} ${lastName}`,
      email,
      password,
      birthdate: dob,
      gender,
    };

    const validationErrors = formValidation(userData);
    err = { ...err, ...validationErrors };
    setError(err);

    if (Object.keys(err).length > 0) {
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
      console.error("Failed to upload user:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        backgroundColor: "#FF6F61",
        padding: "2rem",
        borderRadius: "1rem",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      {/* Profile Photo Section (if needed) */}
      <Box sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar src={profilePhoto} sx={{ width: 120, height: 120, mb: 1, backgroundColor: "#fff" }} />
        <Input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          sx={{ display: "none" }}
          id="profile-photo-input"
        />
        <label htmlFor="profile-photo-input">
          <Button component="span" variant="contained" sx={{ backgroundColor: "#ff7c70" }}>
            Change Photo
          </Button>
        </label>
      </Box>

      {/* Signup Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "80%" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={handleFirstNameChange}
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={handleLastNameChange}
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
              error={!!error.email}
              helperText={error.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
              error={!!error.password}
              helperText={error.password}
              InputProps={{
                endAdornment: showPassword ? (
                  <VisibilityIcon onClick={() => setShowPassword(!showPassword)} sx={{ cursor: "pointer" }} />
                ) : (
                  <VisibilityOffIcon onClick={() => setShowPassword(!showPassword)} sx={{ cursor: "pointer" }} />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Confirm Password"
              variant="outlined"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
              InputProps={{
                endAdornment: showConfirmPassword ? (
                  <VisibilityIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)} sx={{ cursor: "pointer" }} />
                ) : (
                  <VisibilityOffIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)} sx={{ cursor: "pointer" }} />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of Birth"
                value={dob}
                onChange={(newValue) => setDob(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={!!error.birthdate}
                    helperText={error.birthdate}
                    sx={{ backgroundColor: "white", borderRadius: "8px" }}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                label="Gender"
                value={gender}
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
                borderRadius: "0.5rem",
                py: "0.75rem",
                "&:hover": { backgroundColor: "#ff7c70" },
              }}
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
          </Grid>
        </Grid>
      </Box>

      {/* Optional About Me / Welcome Section */}
      <Box
        sx={{
          width: "100%",
          p: "1rem",
          border: "2px solid white",
          borderRadius: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          mt: 3,
          position: "relative",
        }}
      >
        <Typography variant="h6" sx={{ color: "white" }}>
          About Me
        </Typography>
        <TextField
          fullWidth
          multiline
          minRows={4}
          variant="outlined"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            mt: "0.5rem",
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
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography>
          Already have an account?{" "}
          <Link href="/login" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline", cursor: "pointer" } }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
