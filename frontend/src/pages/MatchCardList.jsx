// src/pages/MatchCardList.jsx
import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import Header from "@/components/header"; // Adjust path as needed
import MatchCard from "@/components/MatchCard"; // Adjust path as needed

// Initial dummy match data
const initialMatches = [
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
  // {
  //   rank: 5,
  //   name: "Test Profile",
  //   age: 20,
  //   livingPreference: "Undecided",
  //   matchScore: 80,
  // },
];

const filterButtons = [
  { name: "Alcohol", color: "#FF6F61", textColor: "white" },
  { name: "Gender", color: "white", textColor: "black" },
  { name: "Pets", color: "#FF6F61", textColor: "white" },
  { name: "Smoking", color: "white", textColor: "black" },
];

function MatchCardList() {
  const [matches, setMatches] = useState(initialMatches);

  // Function to add a new profile at the beginning (left-most)
  const addNewProfile = () => {
    const newProfile = {
      rank: Date.now(), // Unique key based on timestamp
      name: "New Profile",
      age: 25,
      image: "",
      livingPreference: "Friendly",
      matchScore: 95,
    };
    setMatches([newProfile, ...matches]);
  };

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
      <Header />

      <Container maxWidth="lg" disableGutters sx={{ pt: 10, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" color="white" gutterBottom sx={{ fontSize: "3.0rem" }}>
          Find your Perfect Match!
        </Typography>

        {/*
        // Uncomment the block below to display the "Add New Profile" button
        <Box mb={4}>
          <Button
            variant="contained"
            onClick={addNewProfile}
            sx={{
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              ":hover": { backgroundColor: "darkgreen" },
            }}
          >
            Add New Profile
          </Button>
        </Box>
        */}

        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "40px",
            p: 2,
            mb: 6,
            mx: { xs: 2, sm: 14 },
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
                fontSize: "1.2rem", // Increased font size for filter button texts
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

        <Box
          sx={{
            backgroundColor: "white",
            p: 5, // Increased padding between cards and container edge
            borderRadius: "20px",
            mx: { xs: 3, sm: 4 },
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            mb: 6,
          }}
        >
          <Grid container spacing={4} justifyContent="flex-start">
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

        <Box mt={-2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "30px",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              ":hover": { backgroundColor: "#333" },
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
