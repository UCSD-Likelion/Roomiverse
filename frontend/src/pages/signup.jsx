import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
  Input,
  Grid,
} from "@mui/material";

export default function EditProfile() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [firstName, setFirstName] = useState("First");
  const [lastName, setLastName] = useState("Last");
  const [age, setAge] = useState(21);
  const [instagram, setInstagram] = useState("");
  const [aboutMe, setAboutMe] = useState("");

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
        width: "80%",
        margin: "auto",
      }}
    >
      {/* Profile Image Upload */}
      <Box sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar
          src={profilePhoto}
          sx={{ width: 120, height: 120, marginBottom: 1, backgroundColor: "#fff" }}
        />
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

      {/* Centered Name and Age Fields */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ width: "60%" }}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              label="Age"
              type="number"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* "Done Editing" Button */}
      <Button
        onClick={handleDoneEditing}
        sx={{
          backgroundColor: "#D94F42",
          color: "white",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#C73F33" },
        }}
      >
        Done Editing
      </Button>

      {/* Social Media Links */}
      <TextField
        fullWidth
        label="Instagram ID"
        variant="outlined"
        color="primary"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
        sx={{ backgroundColor: "white", borderRadius: "8px" }}
      />

      {/* About Me Section */}
      <Box
        sx={{
          width: "100%",
          padding: "1rem",
          border: "2px solid white",
          borderRadius: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
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
          color="primary"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            marginTop: "0.5rem",
          }}
        />
      </Box>
    </Box>
  );
}
