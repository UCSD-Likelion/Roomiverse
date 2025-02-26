import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";
import MatchCard from "./components/MatchCard"; // ✅ Import MatchCard
import { Container, Grid, Typography, Box, Button } from "@mui/material"; // ✅ Import MUI Components

import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./utils/private-route";
import MatchingForm from "./pages/matchingForm";

// ✅ Dummy match data (No changes)
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
];

// ✅ Define button colors (No changes)
const filterButtons = [
  { name: "Alcohol", color: "#FF6F61", textColor: "white" },
  { name: "Gender", color: "white", textColor: "black" },
  { name: "Pets", color: "#FF6F61", textColor: "white" },
  { name: "Smoking", color: "white", textColor: "black" },
];

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Added Background Color & Padding */}
      <Box sx={{ backgroundColor: "#F77D7D", minHeight: "100vh", paddingBottom: "20px" }}>
        <Header />

        {/* ✅ Ensured Routes are Wrapped Inside Container to Fix "Home" Text Issue */}
        <Container maxWidth="lg">
          <main style={{ paddingTop: "80px", textAlign: "center" }}>
            {/* ✅ Added Title */}
            <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
              Find your Perfect Match!
            </Typography>

            {/* ✅ Added Filter Buttons Section (Rounded with Light Padding) */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "20px", // More rounded corners
                padding: "15px",
                mb: 4,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                background: "#FBB6B6", // Lighter version of #F77D7D
              }}
            >
              <Grid container justifyContent="center" spacing={2}>
                {filterButtons.map((filter, index) => (
                  <Grid item key={index}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: filter.color,
                        color: filter.textColor,
                        fontWeight: "bold",
                        borderRadius: "30px", // Fully rounded buttons
                        padding: "8px 20px",
                        "&:hover": { backgroundColor: filter.color === "#FF6F61" ? "#E6645C" : "#e0e0e0" },
                      }}
                    >
                      {filter.name}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* ✅ Added Match Cards Grid */}
            <Box sx={{ backgroundColor: "white", padding: "20px", borderRadius: "20px" }}>
              <Grid container spacing={3} justifyContent="center">
                {matches.map((match) => (
                  <Grid item key={match.rank}>
                    <MatchCard match={match} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* ✅ Wrapped Routes Inside Container */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/matching-form" element={<MatchingForm />} />
            </Routes>
          </main>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
