import {
  Box,
  Button,
  FormControl,
  LinearProgress,
  MenuItem,
  Select,
  Slider,
  Typography,
  IconButton,
} from "@mui/material";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

export default function MatchingForm5({
  progressValue,
  distance,
  handleDistanceChange,
  rent,
  handleRentChange,
  roomType,
  handleRoomTypeChange,
  setCurrentPage,
  handleSubmit,
}) {
  return (
    <>
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
          Step 5 of 5
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
        <Box
          component={"offcampus"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#4A4C54",
              fontWeight: 700,
              marginBottom: 2,
              marginTop: 3,
            }}
          >
            Off Campus
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "#4A4C54",
                fontSize: 20,
                fontWeight: 400,
                width: 600,
                marginBottom: 1,
              }}
            >
              What type of room do you prefer?
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
                value={roomType}
                onChange={handleRoomTypeChange}
                displayEmpty
                renderValue={(selected) =>
                  selected
                    ? selected
                    : "(Please Select Your Prefered room type)"
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
                <MenuItem value="Triple">Triple</MenuItem>
                <MenuItem value="Double">Double</MenuItem>
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Master Bedroom">Master Bedroom</MenuItem>
                <MenuItem value="Don't Mind">Don't Mind</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "#4A4C54",
                fontWeight: 400,
                fontSize: 20,
                width: 600,
              }}
            >
              How far are you willing to live from campus?
            </Typography>
            <Box
              sx={{
                top: 0, // Adjust to move it above the slider
                left: `${(distance[0] / 10) * 100}%`, // Dynamically position based on slider value
                position: "relative",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                color: "#4A4C54",
                padding: "5px 10px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                marginLeft: "50px",
              }}
            >
              {`${distance[0]} - ${distance[1]} miles`}
            </Box>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={distance}
              onChange={handleDistanceChange}
              valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              step={1}
              min={0}
              max={10}
              sx={{
                "& .MuiSlider-thumb": {
                  width: 24, // Makes the slider thumb larger
                  height: 24,
                  color: "white",
                },
                "& .MuiSlider-track": {
                  height: 20, // Makes the track thicker
                },
                "& .MuiSlider-rail": {
                  height: 20, // Makes the inactive track thicker
                  backgroundColor: "#95AAFF",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#4A4C54",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                0 miles
              </Typography>
              <Typography
                sx={{
                  color: "#4A4C54",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                10+ miles
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "#4A4C54",
                fontWeight: 400,
                fontSize: 20,
                width: 600,
              }}
            >
              What is your preferred rent range?
            </Typography>
            <Box
              sx={{
                top: 0, // Adjust to move it above the slider
                left: `${((rent[0] - 500) / (2500 - 500)) * 100}%`,
                position: "relative",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                color: "#4A4C54",
                padding: "5px 10px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                marginLeft: "50px",
              }}
            >
              {`$${rent[0]} - $${rent[1]}`}
            </Box>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={rent}
              onChange={handleRentChange}
              valueLabelDisplay="auto"
              getAriaValueText={(value) => `$${value}`}
              step={100}
              min={500}
              max={2500}
              sx={{
                "& .MuiSlider-thumb": {
                  width: 24, // Makes the slider thumb larger
                  height: 24,
                  color: "white",
                },
                "& .MuiSlider-track": {
                  height: 20, // Makes the track thicker
                },
                "& .MuiSlider-rail": {
                  height: 20, // Makes the inactive track thicker
                  backgroundColor: "#95AAFF",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#4A4C54",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                $ 500
              </Typography>
              <Typography
                sx={{
                  color: "#4A4C54",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                $ 2500+
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

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
          onClick={() => {
            setCurrentPage(3);
          }}
        >
          <ArrowCircleLeftOutlinedIcon
            style={{ fontSize: 40, color: "#4A4C54" }}
          />
        </IconButton>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E2E8FF",
            color: "#4A4C54",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "10px 24px",
            borderRadius: "30px",
            boxShadow: "none",
            position: "absolute",
            bottom: "30px",
            right: "30px",
            size: "large",
            border: "none",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#95AAFF",
              color: "white",
              boxShadow: "none",
            },
          }}
          onClick={handleSubmit}
        >
          Start Matching
        </Button>
      </Box>
    </>
  );
}
