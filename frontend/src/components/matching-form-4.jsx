import { useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import CheckIcon from "@mui/icons-material/Check";

export default function MatchingForm4({
  progressValue,
  bedtime,
  waketime,
  onBedtimeChange,
  onWaketimeChange,
  sleepImportance,
  onImportanceChange,
  cleaningFrequency,
  onFrequencyChange,
  setCurrentPage,
}) {
  return (
    <>
      <Box
        sx={{
          width: "65vw",
          maxWidth: "1100px",
          marginBottom: 4,
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        {/* Step & Progress */}
        <Typography variant="body1" sx={{ color: "#4A4C54", mb: 1 }}>
          Step 4 of 5
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progressValue}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#E2E8FF",
            "& .MuiLinearProgress-bar": { backgroundColor: "#95AAFF" },
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#4A4C54",
          fontWeight: 700,
          marginBottom: 2,
          marginTop: 1,
          paddingLeft: 3,
        }}
      >
        Daily Routine
      </Typography>

      {/* Bed & Wake Times */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
          paddingLeft: 3,
        }}
      >
        <Typography
          variant="p"
          sx={{
            color: "#4A4C54",
            fontWeight: 400,
            fontSize: 20,
            marginTop: 1,
            paddingLeft: 1,
          }}
        >
          What time do you usually go to bed and wake up?
        </Typography>
        <Box sx={{ display: "flex", gap: 8, mb: 4, width: "90%" }}>
          <TextField
            fullWidth
            placeholder="e.g. 11:00 PM"
            value={bedtime}
            onChange={onBedtimeChange}
            variant="outlined"
            sx={{
              bgcolor: "#E2E8FF",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          />
          <TextField
            fullWidth
            placeholder="e.g. 7:00 AM"
            value={waketime}
            onChange={onWaketimeChange}
            variant="outlined"
            sx={{
              bgcolor: "#E2E8FF",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginLeft: 3,
        }}
      >
        {/* Sleep Schedule Importance */}
        <Typography
          variant="p"
          sx={{
            color: "#A4A4C54",
            fontWeight: 400,
            fontSize: 20,
            marginTop: 1,
            paddingLeft: 1,
          }}
        >
          How important is it that your roommate has a similar sleep schedule?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
            marginLeft: 20,
            marginTop: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#4A4C54",
              fontWeight: 600,
              fontSize: 19,
              marginRight: 2.5,
              paddingLeft: 0.5,
            }}
          >
            Not Important
          </Typography>

          <ToggleButtonGroup
            value={sleepImportance}
            exclusive
            onChange={onImportanceChange}
            sx={{
              display: "flex",
              gap: 2,
              borderRadius: "16px",
              overflow: "hidden",
              border: "none",
              alignItems: "center",
            }}
          >
            {[
              { v: "very-important", size: 73 },
              { v: "important", size: 60 },
              { v: "middle", size: 47 },
              { v: "unimportant", size: 60 },
              { v: "very-unimportant", size: 73 },
            ].map(({ v, size }) => (
              <ToggleButton
                key={v}
                value={v}
                sx={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: "#E2E8FF",
                  marginRight: 2,
                  border: "none",
                  borderRadius: "50px 0 0 16px",
                  "&:not(:last-of-type)": { borderRadius: "50px" },
                  "&:not(:first-of-type)": { borderRadius: "50px" },
                  "&.Mui-selected": {
                    backgroundColor: "#95AAFF",
                    color: "#95AAFF",
                  },
                  "&.Mui-selected:hover": { backgroundColor: "#95AAFF" },
                  "&:hover": { backgroundColor: "#95AAFF" },
                }}
              >
                {sleepImportance === v && <CheckIcon fontSize="small" />}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Typography
            variant="body1"
            sx={{
              color: "#4A4C54",
              fontWeight: 600,
              fontSize: 19,
              marginLeft: 1,
              paddingRight: 0,
            }}
          >
            Very Important
          </Typography>
        </Box>
      </Box>

      {/* Cleaning Frequency */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginLeft: 5,
          marginTop: 3,
        }}
      >
        <Typography
          variant="p"
          sx={{
            color: "#A4A4C54",
            fontWeight: 400,
            fontSize: 20,
            paddingBottom: 1,
          }}
        >
          How often do you clean your room?
        </Typography>
        <ToggleButtonGroup
          value={cleaningFrequency}
          exclusive
          onChange={onFrequencyChange}
          sx={{
            display: "flex",
            gap: 3,
            "& .MuiToggleButton-root": {
              width: "230px",
              height: "45px",
              fontSize: "15px",
              fontWeight: 600,
              textTransform: "none",
              backgroundColor: "#E2E8FF",
              color: "#4A4C54",
              border: "none",
              borderRadius: "30px", // Round left side
              "&.Mui-selected": {
                backgroundColor: "#96AAFF",
                color: "white",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#95AAFF",
                color: "white",
              },
              "&:hover": {
                backgroundColor: "#95AAFF",
                color: "white",
              },
            },
          }}
        >
          {["Daily", "Weekly", "Monthly", "Yearly"].map((opt) => (
            <ToggleButton key={opt} value={opt}>
              {opt}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      {/* Navigation Arrows */}
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
          onClick={() => setCurrentPage(2)}
          sx={{
            position: "absolute",
            bottom: "30px",
            left: "30px",
            size: "large",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "2px",
          }}
        >
          <ArrowCircleLeftOutlinedIcon
            sx={{ fontSize: 40, color: "#4A4C54" }}
          />
        </IconButton>
        <IconButton
          onClick={() => setCurrentPage(4)}
          sx={{
            position: "absolute",
            bottom: "30px",
            right: "30px",
            size: "large",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "2px",
          }}
        >
          <ArrowCircleRightOutlinedIcon
            sx={{ fontSize: 40, color: "#4A4C54" }}
          />
        </IconButton>
      </Box>
    </>
  );
}
