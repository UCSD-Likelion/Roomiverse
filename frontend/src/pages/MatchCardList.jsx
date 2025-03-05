// src/pages/MatchCardList.jsx
import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import Header from "@/components/header"; // Adjust path as needed
import MatchCard from "@/components/MatchCard"; // Adjust path as needed

// Dummy match data
const matches = [
  {
    rank: 1,
    name: "Emily Johnson",
    age: 22,
    image: "",
    livingPreference: "Quiet & Clean",
    matchScore: 92,
  },
  {
    rank: 2,
    name: "Michael Chen",
    age: 24,
    image: null,
    livingPreference: "Social & Friendly",
    matchScore: 88,
  },
  {
    rank: 3,
    name: "Sophia Lee",
    age: 21,
    livingPreference: "Early Riser & Pet Friendly",
    matchScore: 85,
  },
  {
    rank: 4,
    name: "Unknown",
    age: 20,
    livingPreference: "Undecided",
    matchScore: 80,
  },
];

// Define filter button colors
const filterButtons = [
  { name: "Alcohol", color: "#FF6F61", textColor: "white" },
  { name: "Gender", color: "white", textColor: "black" },
  { name: "Pets", color: "#FF6F61", textColor: "white" },
  { name: "Smoking", color: "white", textColor: "black" },
];

function MatchCardList() {
  return (
    <Box
      sx={{
        backgroundColor: "#ff6f61", // Full-width pink background
        minHeight: "100vh",
        width: "100%",
        m: 0,
        p: 0,
      }}
    >
      {/* Optional Header */}
      <Header />

      <Container maxWidth="lg" disableGutters sx={{ pt: 10, textAlign: "center" }}>
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
          Find your Perfect Match!
        </Typography>

        {/* Filter Buttons Section */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "40px",
            p: 2,
            mb: 6, // Increased gap after filter buttons
            mx: { xs: 2, sm: 4 },
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            background: "#FBB6B6",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {filterButtons.map((filter, index) => (
            <Button
              key={index}
              variant="contained"
              sx={{
                backgroundColor: filter.color,
                color: filter.textColor,
                fontWeight: "bold",
                borderRadius: "30px",
                px: 5,
                py: 1.5,
                ":hover": {
                  backgroundColor:
                    filter.color === "#FF6F61" ? "#E6645C" : "#e0e0e0",
                },
              }}
            >
              {filter.name}
            </Button>
          ))}
        </Box>

        {/* Match Cards Grid */}
        <Box
          sx={{
            backgroundColor: "white",
            p: 5, // Increased padding between cards and container edge
            borderRadius: "20px",
            mx: { xs: 2, sm: 4 },
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            mb: 6, // Extra bottom margin if needed
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {matches.map((match) => (
              <Grid item xs={12} sm={6} md={3} key={match.rank}>
                <Box
                  sx={{
                    transform: "scale(0.9)", // Each card scaled down by 10%
                    transformOrigin: "top center",
                    display: "inline-block",
                  }}
                >
                  <MatchCard match={match} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* "View More Roomies" Button */}
        <Box mt={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "30px",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              ":hover": {
                backgroundColor: "#333",
              },
            }}
          >
            View More Roomies
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default MatchCardList;
