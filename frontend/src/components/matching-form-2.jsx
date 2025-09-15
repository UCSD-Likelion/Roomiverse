import {
  Box,
  LinearProgress,
  Typography,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

export default function MatchingForm2({
  progressValue,
  preference,
  handlePreferenceChange,
  sameGender,
  handleSameGenderChange,
  guestFrequency,
  handleGuestFrequencyChange,
  setCurrentPage,
}) {
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
          value={progressValue}
          sx={{
            height: 10,
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
        sx={{
          color: "#4A4C54",
          fontWeight: 700,
          marginBottom: 3,
          marginTop: 1,
          paddingLeft: 3,
        }}
      >
        Living Preference
      </Typography>

      {/* Selects */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 3,
          gap: 8,
          paddingLeft: 3,
        }}
      >
        {/* Living Preference */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
            Where do you prefer to live?
          </Typography>
          <FormControl
            sx={{
              minWidth: 500,
              backgroundColor: "#95AAFF",
              opacity: 0.5,
              borderRadius: "5px",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiSelect-select": { padding: "20px" },
            }}
          >
            <Select
              value={preference}
              onChange={handlePreferenceChange}
              displayEmpty
              renderValue={(selected) =>
                selected ? selected : "(Please Select Your Preference)"
              }
              sx={{
                color: "white",
                fontSize: "20px",
                "& .MuiSelect-select": {
                  padding: "14px",
                  paddingLeft: "20px",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              <MenuItem value="on-campus">On-Campus</MenuItem>
              <MenuItem value="off-campus">Off-Campus</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Same Gender */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginLeft: 5,
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
            Do you prefer a roommate of the same gender?
          </Typography>
          <FormControl
            sx={{
              minWidth: 500,
              backgroundColor: "#95AAFF",
              opacity: 0.5,
              borderRadius: "5px",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiSelect-select": { padding: "20px" },
            }}
          >
            <Select
              value={sameGender}
              onChange={handleSameGenderChange}
              displayEmpty
              renderValue={(selected) =>
                selected ? selected : "(Please Select Your Preference)"
              }
              sx={{
                color: "white",
                fontSize: "20px",
                "& .MuiSelect-select": {
                  padding: "14px",
                  paddingLeft: "20px",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
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
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: "18px", color: "#4A4C54" }}
          >
            Rarely
          </Typography>

          <ToggleButtonGroup
            value={guestFrequency}
            exclusive
            onChange={handleGuestFrequencyChange}
            sx={{
              display: "flex",
              gap: 2,
              borderRadius: "16px",
              overflow: "hidden",
              border: "none",
              alignItems: "center",
            }}
          >
            <ToggleButton
              value="very-uncomfortable"
              sx={{
                width: "73px",
                height: "73px",
                backgroundColor: "#E2E8FF",
                marginRight: 2,

                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&:not(:first-of-type)": {
                  borderRadius: "50px", // Add a subtle left border
                },
                "&.Mui-selected": {
                  backgroundColor: "#95AAFF",
                  color: "#95AAFF",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#95AAFF",
                },
                "&:hover": {
                  backgroundColor: "#95AAFF",
                },
              }}
            ></ToggleButton>
            <ToggleButton
              value="uncomfortable"
              sx={{
                width: "60px",
                height: "60px",
                backgroundColor: "#E2E8FF",
                marginRight: 2,

                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&:not(:first-of-type)": {
                  borderRadius: "50px", // Add a subtle left border
                },
                "&.Mui-selected": {
                  backgroundColor: "#95AAFF",
                  color: "#95AAFF",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#95AAFF",
                },
                "&:hover": {
                  backgroundColor: "#95AAFF",
                },
              }}
            ></ToggleButton>
            <ToggleButton
              value="middle"
              sx={{
                width: "47px",
                height: "47px",
                backgroundColor: "#E2E8FF",
                marginRight: 2,

                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&:not(:first-of-type)": {
                  borderRadius: "50px", // Add a subtle left border
                },
                "&.Mui-selected": {
                  backgroundColor: "#95AAFF",
                  color: "#95AAFF",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#95AAFF",
                },
                "&:hover": {
                  backgroundColor: "#95AAFF",
                },
              }}
            ></ToggleButton>

            <ToggleButton
              value="comfortable"
              sx={{
                width: "60px",
                height: "60px",
                backgroundColor: "#E2E8FF",
                marginRight: 2,

                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&:not(:first-of-type)": {
                  borderRadius: "50px", // Add a subtle left border
                },
                "&.Mui-selected": {
                  backgroundColor: "#95AAFF",
                  color: "#95AAFF",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#95AAFF",
                },
                "&:hover": {
                  backgroundColor: "#95AAFF",
                },
              }}
            ></ToggleButton>
            <ToggleButton
              value="veryComfortable"
              sx={{
                width: "73px",
                height: "73px",
                backgroundColor: "#E2E8FF",
                marginRight: 2,

                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&:not(:first-of-type)": {
                  borderRadius: "50px", // Add a subtle left border
                },
                "&.Mui-selected": {
                  backgroundColor: "#95AAFF",
                  color: "#95AAFF",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#95AAFF",
                },
                "&:hover": {
                  backgroundColor: "#95AAFF",
                },
              }}
            ></ToggleButton>
          </ToggleButtonGroup>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: "18px", color: "#4A4C54" }}
          >
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
          onClick={() => setCurrentPage(2)}
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
