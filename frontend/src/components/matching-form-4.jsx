import React, { useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
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
  importance: initialImportance,
  onImportanceChange,
  frequency: initialFrequency,
  onFrequencyChange,
  setCurrentPage,
}) {
  // local state for toggles
  const [importance, setImportance] = useState(initialImportance || "");
  const [frequency, setFrequency] = useState(initialFrequency || "");

  const handleImportanceToggle = (_e, val) => {
    const next = val === importance ? "" : val;
    setImportance(next);
    onImportanceChange(next);
  };

  const handleFrequencyToggle = (_e, val) => {
    const next = val === frequency ? "" : val;
    setFrequency(next);
    onFrequencyChange(next);
  };

  return (
    <Box
      sx={{
        width: "65vw",
        maxWidth: "1100px",
        bgcolor: "white",
        borderRadius: 4,
        p: 0,
        mx: "auto",
      }}
    >
      {/* Step & Progress */}
      <Typography
        variant="body1"
        sx={{ color: "#4A4C54", fontWeight: 500, mb: 1 }}
      >
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

      {/* Title */}
      <Typography
        variant="h4"
        sx={{ color: "#333333", fontWeight: 700, mt: 4, mb: 3 }}
      >
        Daily Routine
      </Typography>

      {/* Bed & Wake Times */}
      <Typography
        variant="subtitle1"
        sx={{ color: "#4A4C54", fontWeight: 600, mb: 2 }}
      >
        What time do you usually go to bed and wake up?
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
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

      {/* Sleep Schedule Importance */}
      <Typography
        variant="subtitle1"
        sx={{ color: "#4A4C54", fontWeight: 600, mb: 2 }}
      >
        How important is it that your roommate has a similar sleep schedule?
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
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
          value={importance}
          exclusive
          onChange={handleImportanceToggle}
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
            { v: "very-important", size: 70 },
            { v: "pretty-important", size: 57 },
            { v: "important", size: 44 },
            { v: "middle", size: 31 },
            { v: "unimportant", size: 44 },
            { v: "pretty-unimportant", size: 57 },
            { v: "very-unimportant", size: 70 },
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
              {importance === v && <CheckIcon fontSize="small" />}
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

      {/* Cleaning Frequency */}
      <Typography
        variant="subtitle1"
        sx={{ color: "#4A4C54", fontWeight: 600, mb: 2 }}
      >
        How often do you clean your room?
      </Typography>
      <ToggleButtonGroup
        value={frequency}
        exclusive
        onChange={handleFrequencyToggle}
        sx={{
          display: "flex",
          gap: 3,
          "& .MuiToggleButton-root": {
            width: "280px",
            height: "40px",
            border: "none",
            borderRadius: "30px !important",
            bgcolor: "#E2E8FF",
            fontFamily: "'Mplus 1p'",
            fontWeight: 800,
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#4A4C54",
            "&.Mui-selected": { backgroundColor: "#95AAFF", color: "#FFFFFF" },
            "&:hover": { backgroundColor: "#95AAFF", color: "#FFFFFF" },
          },
        }}
      >
        {["Daily", "Weekly", "Monthly", "Whenever it feels necessary"].map(
          (opt) => (
            <ToggleButton key={opt} value={opt}>
              {opt}
            </ToggleButton>
          )
        )}
      </ToggleButtonGroup>

      {/* Navigation Arrows */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
        }}
      >
        <ArrowCircleLeftOutlinedIcon
          onClick={() => setCurrentPage(2)}
          sx={{ fontSize: 40, color: "#4A4C54", cursor: "pointer" }}
        />
        <ArrowCircleRightOutlinedIcon
          onClick={() => setCurrentPage(4)}
          sx={{ fontSize: 40, color: "#4A4C54", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
}
