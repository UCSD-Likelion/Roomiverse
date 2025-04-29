// src/components/MatchingPage.jsx
import React from 'react';
import {
  FaCoffee,
  FaMugHot,
  FaMale,
  FaFemale,
  FaDog,
  FaPaw,
  FaSmoking,
  FaBan
} from 'react-icons/fa';
import StarIcon from '@mui/icons-material/Star';
import {
  Card,
  CardMedia,
  Typography,
  Box,
  IconButton
} from '@mui/material';

// Ensure the "M PLUS 1p" font is loaded in index.html or globally in your project
import Portrait from '../assets/images/portrait.png';
const AVATAR_URL = Portrait;
const NUM_MATCHES = 16;

const FILTERS = [
  { id: 'coffee', icon: <FaCoffee />, label: 'Coffee Lover' },
  { id: 'tea', icon: <FaMugHot />, label: 'Tea Drinker' },
  { id: 'male', icon: <FaMale />, label: 'Male' },
  { id: 'female', icon: <FaFemale />, label: 'Female' },
  { id: 'pet', icon: <FaDog />, label: 'Has Pets' },
  { id: 'no-pet', icon: <FaPaw />, label: 'No Pets' },
  { id: 'smoke', icon: <FaSmoking />, label: 'Smoker' },
  { id: 'no-smoke', icon: <FaBan />, label: 'Non-Smoker' }
];

export default function MatchingPage() {
  return (
    <Box
      sx={{
        mt: '63px',
        backgroundColor: '#95AAFF',
        minHeight: '100vh',
        py: 4,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: '"M PLUS 1p", sans-serif'
      }}
    >
      {/* Header: Title + Filters */}
      <Box sx={{ textAlign: 'center', mb: 5, width: '100%' }}>
        <Typography
          component="h1"
          sx={{
            fontFamily: '"M PLUS 1p", sans-serif',
            fontWeight: 800,
            fontSize: '48px',
            lineHeight: '210%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          Find your Perfect Match!
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
          {FILTERS.map(filter => (
            <IconButton
              key={filter.id}
              title={filter.label}
              sx={{
                backgroundColor: '#e0e7ff',
                '&:hover': { backgroundColor: '#c7d2fe' }
              }}
            >
              {filter.icon}
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Cards Container */}
      <Box
        sx={{
          backgroundColor: '#fff',
          maxWidth: 900,
          width: '100%',
          p: 6,
          borderRadius: 10,
          boxShadow: 3,
          fontFamily: '"M PLUS 1p", sans-serif'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(112px, 1fr))',
            columnGap: 4,
            rowGap: 4,
            justifyContent: 'start'
          }}
        >
          {Array.from({ length: NUM_MATCHES }, (_, i) => i + 1).map(rank => (
            <Box key={rank} sx={{ textAlign: 'center' }}>
              <Card
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: 5,
                  overflow: 'hidden',
                  bgcolor: '#D9D9D9'
                }}
              >
                {/* Image fills card */}
                <CardMedia
                  component="img"
                  image={AVATAR_URL}
                  alt={`Match ${rank}`}
                  sx={{ width: '100%', height: '120%', objectFit: 'cover' }}
                />
                {/* Badge overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '11px',
                    left: '11px',
                    width: '100px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#95AAFF',
                    color: '#fff',
                    borderRadius: '10px'
                  }}
                >
                  <StarIcon sx={{ fontSize: 12, mr: 0.5, color: '#fff' }} />
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: '"M PLUS 1p", sans-serif',
                      fontWeight: 800,
                      fontSize: '10px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#fff'
                    }}
                  >
                    Best Match #{rank}
                  </Typography>
                </Box>
              </Card>
              {/* Description below card */}
              <Box sx={{ mt: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '20px' , textAlign: 'left'}}>
                &nbsp;Name {rank}
                </Typography>
                <Typography sx={{ fontSize: '16px', color: 'text.secondary' ,textAlign: 'left'}}>
                &nbsp;Age: {20  + rank}
                </Typography>
                <Typography sx={{ fontSize: '16px', color: 'text.secondary' ,textAlign: 'left'}}>
                &nbsp;Major: M{rank}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}