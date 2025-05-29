import {
  Box,
  LinearProgress,
  Typography,
  FormControl,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useState } from "react";

export default function MatchingForm2({
  preference,
  handlePreferenceChange,
  sameGender,
  handleSameGenderChange,
  guestFrequency,
  handleGuestFrequencyChange,
  setCurrentPage,
}) {
  const [selectedGuestLevel, setSelectedGuestLevel] = useState(guestFrequency || "");

  const guestLevels = [
    "so-rare",
    "rare",
    "less-middle",
    "middle",
    "more-middle",
    "often",
    "so-often",
  ];

  const circleSizes = [60, 50, 40, 30, 40, 50, 60];

  return (
    <>
      {/* Step & Progress */}
      <Box
        sx={{
          width: "65vw",
          maxWidth: "1100px",
          marginBottom: 5,
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <Typography variant="body1" sx={{ color: "#4A4C54", mb: 1 }}>
          Step 2 of 5
        </Typography>
        <LinearProgress
          variant="determinate"
          value={40}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: "#E2E8FF",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#95AAFF",
            },
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, marginBottom: 3, marginTop: 3, color: "#4A4C54"}}
>
        Living Preference
      </Typography>

      {/* Selects */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          paddingLeft: 3,
          paddingRight: 3,
          mb: 4,
        }}
      >
        {/* Living Preference */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              width: 600,
              color: "#4A4C54",
            }}
          >
            Where do you prefer to live?
          </Typography>
          <FormControl fullWidth>
            <Select
              value={preference}
              onChange={handlePreferenceChange}
              displayEmpty
              renderValue={(selected) =>
                selected ? selected : "(Please Select Your Preference)"
              }
              sx={{
                backgroundColor: "#D8DFFF",
                borderRadius: 2,
                height: 56,
                color: "white",
                "& .MuiSelect-icon": { display: "none" },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="On-Campus">On-Campus</MenuItem>
              <MenuItem value="Off-Campus">Off-Campus</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Same Gender */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              width: 600,
              color: "#4A4C54",
              marginBottom: 1,
            }}
          >
            Do you prefer a roommate of the same gender?
          </Typography>
          <FormControl fullWidth>
            <Select
              value={sameGender}
              onChange={handleSameGenderChange}
              displayEmpty
              renderValue={(selected) =>
                selected ? selected : "(Please Select Your Preference)"
              }
              sx={{
                backgroundColor: "#D8DFFF",
                borderRadius: 2,
                height: 56,
                color: "white",
                "& .MuiSelect-icon": { display: "none" },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
              <MenuItem value="No Preference">No Preference</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Guest Frequency */}
      <Box sx={{ paddingLeft: 3, paddingRight: 3 }}>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 400,
            width: 600,
            color: "#4A4C54",
            marginBottom: 2,
          }}
        >
          How often do you prefer to have guests?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 4,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "18px", color: "#4A4C54" }}>
            Rarely
          </Typography>

          {guestLevels.map((level, idx) => {
            const isSelected = selectedGuestLevel === level;
            const circleSize = circleSizes[idx];

            return (
              <Box
                key={level}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedGuestLevel(level);
                  handleGuestFrequencyChange(level);
                }}
                sx={{
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                  borderRadius: "50%",
                  backgroundColor: isSelected ? "#6B7FFF" : "#D8DFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: isSelected ? "3px solid white" : "3px solid transparent",
                  "&:hover": {
                    backgroundColor: isSelected ? "#6B7FFF" : "#C4D1FF",
                  },
                }}
              ></Box>
            );
          })}

          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "18px", color: "#4A4C54" }}>
            Often
          </Typography>
        </Box>
      </Box>

      {/* Navigation buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 3,
          paddingRight: 3,
          mt: 12,
        }}
      >
        <IconButton
          onClick={() => setCurrentPage(0)}
          sx={{
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
          }}
        >
          <ArrowCircleLeftOutlinedIcon sx={{ fontSize: 40, color: "#4A4C54" }} />
        </IconButton>

        <IconButton
          onClick={() => setCurrentPage(2)}
          sx={{
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
          }}
        >
          <ArrowCircleRightOutlinedIcon sx={{ fontSize: 40, color: "#4A4C54" }} />
        </IconButton>
      </Box>
    </>
  );
}
