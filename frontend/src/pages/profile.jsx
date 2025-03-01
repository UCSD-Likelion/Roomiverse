import { Box, Typography, Avatar, Button, TextField, Card, CardContent, Chip } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "@mui/icons-material";
import { useState } from "react";

export default function ProfileCard() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("입력된 값:", inputValue);
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
        justifyContent: "flex-start",
        height: "100vh",
        width: "100vw",
        px: "4rem",
        backgroundColor: "#FF6F61", // Unified background color
      }}
    >
      {/* Left Section - Profile Card */}
      <Box
        component="section"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // Ensures no white gaps
        }}
      >
        {/* Background Shape - Narrowed Half Circle + Rectangle */}
        <Box
          sx={{
            position: "absolute",
            width: "90%", // Narrowed width
            height: "80%", // Adjusted height
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0))",
            borderTopLeftRadius: "50%",
            borderTopRightRadius: "50%",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            zIndex: 0,
          }}
        />

        {/* Profile Card Positioned within Background Shape */}
        <Box
          sx={{
            position: "relative",
            width: 280,
            height: 380,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          {/* Enlarged Profile Image using Material UI Avatar */}
          <Avatar
            sx={{
              width: 200, // Increased size
              height: 200, // Increased size
              mb: 2,
            }}
            alt="Profile Image"
            src="/broken-image.jpg" // Replace with actual image path or state variable
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, paddingTop: "0.2rem" }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "white", whiteSpace:"nowrap" }}>
              Profile Name
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "white" }}>
              21
            </Typography>
          </Box>

          {/* Edit Profile Button */}
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              sx={{
                backgroundColor: "white",
                color: "#5a5d5e",
                borderRadius: "8px",
                px: 6,
                whiteSpace: "nowrap",
                fontWeight: 600,
                textTransform: "none",
              }}
              size="large"
            >
              Edit My Profile
            </Button>
            <Button
              sx={{
                backgroundColor: "white",
                color: "#5a5d5e",
                borderRadius: "8px",
                px: 9,
                whiteSpace: "nowrap",
                fontWeight: 600,
                textTransform: "none",
              }}
              size="large"
            >
              My Likes
            </Button>
          </Box>

          {/* Social Links */}
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2, paddingTop: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                padding: "0.75rem",
                borderRadius: "8px",
                width: "400px",
              }}
            >
              <Instagram sx={{ color: "white" }} />
              <Typography variant="body1" color="white" fontWeight={500}>
                @yourhandle
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                padding: "0.75rem",
                borderRadius: "8px",
                width: "400px",
              }}
            >
              <Facebook sx={{ color: "#ffffff" }} />
              <Typography
                variant="body1"
                color="white"
                fontWeight={500}
                component="a"
                href="https://facebook.com/yourprofile"
                sx={{ textDecoration: "none" }}
              >
                Facebook Profile
              </Typography>
            </Box>
          </Box>

          {/* Edit My Preference Button */}
          <Box sx={{ mt: 4, paddingTop: "1rem" }}>
            <Button
              sx={{
                backgroundColor: "white",
                color: "#FF6F61",
                fontWeight: 800,
                px: 5,
                borderRadius: "8px",
                textTransform: "none",
              }}
              size="large"
            >
              Edit My Preference
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Right Section - About Me & My Preferences */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: "4rem",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, color: "white" }}>
          About Me
        </Typography>
        <Typography variant="h5" sx={{ color: "white", mt: 1, mb: 3 }}>
          A short bio about the user goes here.
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, color: "white" }}>
          My Preferences
        </Typography>

        <Box sx={{ maxWidth: 700 }}>
          <Box
            sx={{
              maxWidth: 750,
              width: "90%",
              borderRadius: 12,
              backgroundColor: "#FF6F61",
              margin: "0 auto",
              padding: 4,
              minHeight: "200px",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                justifyContent: "center",
                maxWidth: "100%",
              }}
            >
              {["Off-Campus", "Non-Smoker", "Sleep time: 11:00-12:00", "Wakeup time: 8:00-9:00", "No Pets Allowed"].map(
                (preference) => (
                  <Chip
                    key={preference}
                    label={preference}
                    sx={{
                      backgroundColor: "white",
                      color: "#FF6F61",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      padding: "10px",
                      height: "50px",
                      borderRadius: "30px",
                    }}
                  />
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
