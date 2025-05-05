// src/components/MatchingPage.jsx
import React, { useState } from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
// src/components/MatchingPage.jsx
import React, { useState } from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import StarIcon from "@mui/icons-material/Star";
import { Card, CardMedia, Typography, Box, IconButton } from "@mui/material";

// Ensure the "M PLUS 1p" font is loaded in index.html or globally in your project
// Ensure the "M PLUS 1p" font is loaded in index.html or globally in your project
import Portrait from "../assets/images/portrait.png";
import YesPetsIcon from "../assets/images/yes-pets.png";
import NoPetsIcon from "../assets/images/no-pets.png";

import YesPetsIcon from "../assets/images/yes-pets.png";
import NoPetsIcon from "../assets/images/no-pets.png";

const AVATAR_URL = Portrait;
const NUM_MATCHES = 16;

// Filters grouped in pairs with manual icon sizing
const FILTER_GROUPS = [
  [
    { id: "alcohol",    icon: <LocalBarIcon sx={{ fontSize: 28 }} />, label: "Alcohol" },
    { id: "no-alcohol", icon: <NoDrinksIcon sx={{ fontSize: 28 }} />, label: "No Alcohol" }
  ],
  [
    { id: "male",       icon: <MaleIcon sx={{ fontSize: 28 }} />,       label: "Male" },
    { id: "female",     icon: <FemaleIcon sx={{ fontSize: 28 }} />,     label: "Female" }
  ],
  [
    {
      id: "pets",
      icon: (
        <Box
          component="img"
          src={YesPetsIcon}
          alt="Pets"
          sx={{ width: 26, height: 26, filter: 'invert(1)' }}
        />
      ),
      label: "Has Pets"
    },
    {
      id: "no-pets",
      icon: (
        <Box
          component="img"
          src={NoPetsIcon}
          alt="No Pets"
          sx={{ width: 26, height: 26, filter: 'invert(1)' }}
        />
      ),
      label: "No Pets"
    }
  ],
  [
    { id: "smoke",    icon: <SmokingRoomsIcon sx={{ fontSize: 28 }} />, label: "Smoker" },
    { id: "no-smoke", icon: <SmokeFreeIcon sx={{ fontSize: 28 }} />,    label: "Non-Smoker" }
  ]
];

// Filters grouped in pairs with manual icon sizing
const FILTER_GROUPS = [
  [
    { id: "alcohol",    icon: <LocalBarIcon sx={{ fontSize: 28 }} />, label: "Alcohol" },
    { id: "no-alcohol", icon: <NoDrinksIcon sx={{ fontSize: 28 }} />, label: "No Alcohol" }
  ],
  [
    { id: "male",       icon: <MaleIcon sx={{ fontSize: 28 }} />,       label: "Male" },
    { id: "female",     icon: <FemaleIcon sx={{ fontSize: 28 }} />,     label: "Female" }
  ],
  [
    {
      id: "pets",
      icon: (
        <Box
          component="img"
          src={YesPetsIcon}
          alt="Pets"
          sx={{ width: 26, height: 26, filter: 'invert(1)' }}
        />
      ),
      label: "Has Pets"
    },
    {
      id: "no-pets",
      icon: (
        <Box
          component="img"
          src={NoPetsIcon}
          alt="No Pets"
          sx={{ width: 26, height: 26, filter: 'invert(1)' }}
        />
      ),
      label: "No Pets"
    }
  ],
  [
    { id: "smoke",    icon: <SmokingRoomsIcon sx={{ fontSize: 28 }} />, label: "Smoker" },
    { id: "no-smoke", icon: <SmokeFreeIcon sx={{ fontSize: 28 }} />,    label: "Non-Smoker" }
  ]
];

export default function MatchingPage() {
  // Maintain selected per group
  const [selected, setSelected] = useState({});

  // Toggle selection: deselect if clicking again
  // Toggle selection: deselect on second click
  const handleSelect = (groupIndex, id) => {
    setSelected(prev => ({
      ...prev,
      [groupIndex]: prev[groupIndex] === id ? null : id
    }));
  };

  // Maintain selected per group
  const [selected, setSelected] = useState({});

  // Toggle selection: deselect if clicking again
  // Toggle selection: deselect on second click
  const handleSelect = (groupIndex, id) => {
    setSelected(prev => ({
      ...prev,
      [groupIndex]: prev[groupIndex] === id ? null : id
    }));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#95AAFF",
        minHeight: "100vh",
        py: 10,
        px: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: '"M PLUS 1p", sans-serif'
      }}
    >
      {/* Header: Title + Filter Container */}
      <Box sx={{ textAlign: 'center', mb: 5, width: '100%' }}>
      {/* Header: Title + Filter Container */}
      <Box sx={{ textAlign: 'center', mb: 5, width: '100%' }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: '48px',
            lineHeight: '210%',
            textAlign: 'center',
            color: '#fff'
            fontSize: '48px',
            lineHeight: '210%',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          Find your Perfect Match!
        </Typography>

        {/* Outer transparent oval container */}

        {/* Outer transparent oval container */}
        <Box
          sx={{
            width: 900,
            height: 80,
            backgroundColor: 'rgba(234,238,255,0.5)',
            borderRadius: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto'
          }}
        >
          {/* Inner filter button groups */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {FILTER_GROUPS.map((group, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#95AAFF',
                  borderRadius: 20,
                  height: 50,
                  width: 180,
                  px: 0,
                  gap: 0
                }}
              >
                {group.map(({ id, icon, label }) => {
                  const isSelected = selected[idx] === id;
                  return (
                    <IconButton
                      key={id}
                      title={label}
                      onClick={() => handleSelect(idx, id)}
                      sx={{
                        width: 95,
                        height: 48,
                        borderRadius: '40px',
                        backgroundColor: isSelected ? '#4663DA' : 'transparent',
                        color: isSelected ? '#fff' : '#FFFFFF',
                        p: 0,
                        '&:hover': { backgroundColor: '#4663DA', color: '#fff' }
                      }}
                    >
                      {icon}
                    </IconButton>
                  );
                })}
              </Box>
            ))}
          </Box>
            width: 900,
            height: 80,
            backgroundColor: 'rgba(234,238,255,0.5)',
            borderRadius: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto'
          }}
        >
          {/* Inner filter button groups */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {FILTER_GROUPS.map((group, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#95AAFF',
                  borderRadius: 20,
                  height: 50,
                  width: 180,
                  px: 0,
                  gap: 0
                }}
              >
                {group.map(({ id, icon, label }) => {
                  const isSelected = selected[idx] === id;
                  return (
                    <IconButton
                      key={id}
                      title={label}
                      onClick={() => handleSelect(idx, id)}
                      sx={{
                        width: 95,
                        height: 48,
                        borderRadius: '40px',
                        backgroundColor: isSelected ? '#4663DA' : 'transparent',
                        color: isSelected ? '#fff' : '#FFFFFF',
                        p: 0,
                        '&:hover': { backgroundColor: '#4663DA', color: '#fff' }
                      }}
                    >
                      {icon}
                    </IconButton>
                  );
                })}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Cards Container */}
      <Box
        sx={{
          backgroundColor: '#fff',
          backgroundColor: '#fff',
          maxWidth: 900,
          width: '100%',
          width: '100%',
          p: 6,
          borderRadius: 10,
          boxShadow: 3
          boxShadow: 3
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(112px, 1fr))',
            gap: 4,
            justifyContent: 'start'
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(112px, 1fr))',
            gap: 4,
            justifyContent: 'start'
          }}
        >
          {Array.from({ length: NUM_MATCHES }, (_, i) => i + 1).map(rank => (
            <Box key={rank} sx={{ textAlign: 'left', cursor: 'pointer' }}>
          {Array.from({ length: NUM_MATCHES }, (_, i) => i + 1).map(rank => (
            <Box key={rank} sx={{ textAlign: 'left', cursor: 'pointer' }}>
              <Card
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1',
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: 5,
                  overflow: 'hidden',
                  bgcolor: '#D9D9D9',
                  '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }
                  overflow: 'hidden',
                  bgcolor: '#D9D9D9',
                  '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }
                }}
              >
                <CardMedia
                  component="img"
                  image={AVATAR_URL}
                  alt={`Match ${rank}`}  
                  sx={{ width: '100%', height: '120%', objectFit: 'cover' }}
                  alt={`Match ${rank}`}  
                  sx={{ width: '100%', height: '120%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 11,
                    left: 11,
                    width: 100,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#95AAFF',
                    color: '#fff',
                    borderRadius: 2
                    position: 'absolute',
                    top: 11,
                    left: 11,
                    width: 100,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#95AAFF',
                    color: '#fff',
                    borderRadius: 2
                  }}
                >
                  <StarIcon sx={{ fontSize: 14, mr: 0.5, color: '#fff' }} />
                  <Typography component="span" sx={{ fontWeight: 800, fontSize: '10px', color: '#fff' }}>
                  <StarIcon sx={{ fontSize: 14, mr: 0.5, color: '#fff' }} />
                  <Typography component="span" sx={{ fontWeight: 800, fontSize: '10px', color: '#fff' }}>
                    Best Match #{rank}
                  </Typography>
                </Box>
              </Card>
              <Box sx={{ mt: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
                  Name {rank}
                </Typography>
                <Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>
                  Age: {20 + rank}
                </Typography>
                <Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>
                  Major: M{rank}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
