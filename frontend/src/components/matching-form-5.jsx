import {
  Box,
  Button,
  FormControl,
  LinearProgress,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

export default function MatchingForm5({
  distance,
  handleDistanceChange,
  rent,
  handleRentChange,
  ethnicity,
  handleEthnicityChange,
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
          value={100}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#E2E8FF",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#95AAFF",
            },
          }}
        />
        <Box component={"offcampus"}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: 700,
              marginBottom: 3,
              marginTop: 9,
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
              marginBottom: 3,
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: 24,
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
                color: "#FF6F61",
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
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                0 miles
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                5 miles
              </Typography>
              <Typography
                sx={{
                  color: "white",
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
              marginBottom: 3,
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: 24,
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
                color: "#FF6F61",
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
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                $ 500
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                $ 1000
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                $ 2500+
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              marginBottom: 3,
            }}
          >
            <Typography
              variant="p"
              sx={{ color: "white", fontWeight: 600, fontSize: 24 }}
            >
              What type of room do you prefer?
            </Typography>
            <FormControl
              sx={{
                minWidth: 500,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderRadius: "10px",
                border: "none",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSelect-select": { padding: "20px" },
              }}
            >
              <Select
                value={ethnicity}
                onChange={handleEthnicityChange}
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
                <MenuItem value="Asian">Asian</MenuItem>
                <MenuItem value="Black">Black or African American</MenuItem>
                <MenuItem value="Hispanic">Hispanic or Latino</MenuItem>
                <MenuItem value="White">White</MenuItem>
                <MenuItem value="Native American">
                  Native American or Alaska Native
                </MenuItem>
                <MenuItem value="Pacific Islander">
                  Native Hawaiian or Pacific Islander
                </MenuItem>
                <MenuItem value="Middle Eastern">
                  Middle Eastern or North African
                </MenuItem>
                <MenuItem value="Mixed">Two or More Races</MenuItem>
                <MenuItem value="Other">Other (Please Specify)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <button
          style={{
            position: "absolute",
            bottom: "30px",
            right: "1200px",
            size: "large",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "2px",
          }}
          onClick={() => {
            setCurrentPage(0);
          }}
        >
          <ArrowCircleLeftOutlinedIcon
            style={{ fontSize: 40, color: "#4A4C54" }}
          />
        </button>
        
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#FF6F61",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "10px 24px",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#FF6F61",
              color: "white",
            },
          }}
          onClick={() => alert("Matching started!")} // Replace with actual function
        >
          Start Matching
        </Button>
      </Box>
    </>
  );
}
