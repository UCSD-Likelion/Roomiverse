import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
  Input,
  Snackbar,
  Alert,
} from "@mui/material";

export default function EditProfile() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [firstName, setFirstName] = useState("First");
  const [lastName, setLastName] = useState("Last");
  const [age, setAge] = useState(21);
  const [instagram, setInstagram] = useState("");
  const [aboutMe, setAboutMe] = useState(
    "dsfkjlakdjflkajsdlkfjlkasjdflkjaslkdfjkasjdlfkjaskldfklasjdklfjklasdjfklasjdkfljaskldfjlkasdjflksajflkjalkfjklasdjfklasjdlfkjaksdfjkasjflkajdkfjaksdjfksajkfjaksdfjkakjdsfkajskdfjakdsjfkasjdkfjaksdfjkak. " +
      "dsfkjlakdj flkajsdlkfjlkasjdflkja slkdfjkasj dlfkjaskldfklasj dklfjklasdj fklasjdkfljaskldfjlkasdjflksaj flkjalkfjklasdjfklasjdlfkjaks dfjkasjflkajdkfjaksdjfksaj kfjaksdfjkakjdsfkajskdfjakdsjfkasjdkfjaksdfjkak."
  );
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDoneEditing = () => {
    console.log("Profile updated:", {
      firstName,
      lastName,
      age,
      instagram,
      aboutMe,
    });
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FF6F61",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      {/* Main Content Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* LEFT COLUMN:*/}
        <Box
          sx={{
            width: "33.33%",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0))",
            borderTopLeftRadius: "200px",
            borderTopRightRadius: "200px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Avatar
            src={profilePhoto}
            sx={{ width: 120, height: 120, backgroundColor: "#fff" }}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            sx={{ display: "none" }}
            id="profile-photo-input"
          />
          <label htmlFor="profile-photo-input">
            <Button
              component="span"
              variant="contained"
              sx={{ backgroundColor: "#ff7c70" }}
            >
              Change Photo
            </Button>
          </label>

          {/* First Name, Last Name, and Age */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TextField
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{
                backgroundColor: "transparent",
                borderRadius: "8px",
                width: "150px",
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{
                backgroundColor: "transparent",
                borderRadius: "8px",
                width: "150px",
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
            <TextField
              label="Age"
              type="number"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              sx={{
                backgroundColor: "transparent",
                borderRadius: "8px",
                width: "80px",
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
          </Box>

          {/* Done Editing Button */}
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

          {/* Instagram ID */}
          <TextField
            label="Instagram ID"
            variant="outlined"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "250px",
            }}
          />
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            width: "66.66%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* About Me */}
          <Box
            sx={{
              p: 2,
              border: "2px solid white",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", mb: 1 }}
            >
              About Me
            </Typography>
            <TextField
              fullWidth
              multiline
              minRows={12}
              variant="outlined"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              sx={{
                backgroundColor: "#FF6F61",
                borderRadius: "8px",
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
          </Box>

          {/* Example Info Boxes Under About Me with Translucent Background */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.7)",
                color: "white",
                p: "0.3rem 0.8rem",
                borderRadius: "16px",
              }}
            >
              Sleep time: 11:00-12:00
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.7)",
                color: "white",
                p: "0.3rem 0.8rem",
                borderRadius: "16px",
              }}
            >
              Korean
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.7)",
                color: "white",
                p: "0.3rem 0.8rem",
                borderRadius: "16px",
              }}
            >
              OnCampus
            </Box>
            {/* Extra Empty Boxes for Adding More Info */}
            {Array(6)
              .fill("+")
              .map((plus, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.7)",
                    color: "white",
                    p: "0.3rem 0.8rem",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "80px",
                  }}
                >
                  {plus}
                </Box>
              ))}
          </Box>
        </Box>
      </Box>

      {/* Snackbar for Pop-up Message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Your profile is successfully edited!
        </Alert>
      </Snackbar>
    </Box>
  );
}