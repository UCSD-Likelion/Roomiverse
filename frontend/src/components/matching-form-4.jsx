import {
  Box,
  Typography,
  LinearProgress,
  FormControl,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

export default function MatchingForm4({
  ethnicity,
  handleEthnicityChange,
  preference,
  handlePreferenceChange,
  setCurrentPage,
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
          Step 4 of 5
        </Typography>
        <LinearProgress
          variant="determinate"
          value={80}
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

      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: 700,
          marginBottom: 3,
          marginTop: 9,
        }}
      >
        Daily Routine
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
          sx={{ color: "white", fontWeight: 600, fontSize: 24 }}
        >
          What time do you usually go to bed and wake up?
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
              selected ? selected : "(Please Select Your Prefer Bed Time)"
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
        <FormControl
          sx={{
            marginTop: 1,
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
              selected ? selected : "(Please Select Your Prefer Wake Up Time)"
            } // ✅ Adds Placeholder
            sx={{
              color: "white", // ✅ Text color for selected value
              fontSize: "20px", // ✅ Make text larger
              "& .MuiSelect-select": {
                padding: "14px", // ✅ Adjust padding
                paddingLeft: "20px", // ✅ Adjust padding
              },
              "& .MuiSvgIcon-root": {
                color: "white", // ✅ Makes dropdown arrow white
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
            marginBottom: 1,
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
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: 20,
              marginRight: 1,
            }}
          >
            Not Important
          </Typography>
          <ToggleButtonGroup
            value={preference}
            exclusive
            onChange={handlePreferenceChange}
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
              value="0"
              sx={{
                width: "73px",
                height: "73px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            ></ToggleButton>
            <ToggleButton
              value="1"
              sx={{
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            ></ToggleButton>
            <ToggleButton
              value="2"
              sx={{
                width: "47px",
                height: "47px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            ></ToggleButton>

            <ToggleButton
              value="3"
              sx={{
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            ></ToggleButton>
            <ToggleButton
              value="4"
              sx={{
                width: "73px",
                height: "73px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "50px", // Add border only between buttons
                },
                "&:not(:first-of-type)": {
                  borderRadius: "50px", // Add a subtle left border
                },
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            ></ToggleButton>
          </ToggleButtonGroup>
          <Typography
            variant="p"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: 20,
              marginLeft: 1,
            }}
          >
            Very Important
          </Typography>
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
              color: "white",
              fontWeight: 600,
              fontSize: 24,
              marginBottom: 1,
            }}
          >
            How important is it that your roommate has a similar sleep schedule?
          </Typography>
          <ToggleButtonGroup
            value={preference}
            exclusive
            onChange={handlePreferenceChange}
            sx={{
              display: "flex",
              gap: 2,
              borderRadius: "16px",
              overflow: "hidden",
              border: "none",
            }}
          >
            <ToggleButton
              value="on-campus"
              sx={{
                width: "180px",
                fontSize: "20px",
                fontWeight: 600,
                textTransform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "30px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "30px", // Add border only between buttons
                },
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            >
              Daily
            </ToggleButton>
            <ToggleButton
              value="on-campus"
              sx={{
                width: "180px",
                fontSize: "20px",
                fontWeight: 600,
                textTransform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "30px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "30px", // Add border only between buttons
                },
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            >
              Weekly
            </ToggleButton>
            <ToggleButton
              value="on-campus"
              sx={{
                width: "180px",
                fontSize: "20px",
                fontWeight: 600,
                textTransform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "30px 0 0 16px", // Round left side
                "&:not(:last-of-type)": {
                  borderRadius: "30px", // Add border only between buttons
                },
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            >
              Montly
            </ToggleButton>

            <ToggleButton
              value="off-campus"
              sx={{
                width: "370px",
                fontWeight: 600,
                fontSize: "20px",
                textTransform: "none",
                border: "none",
                borderRadius: "30px", // Round left side
                "&:not(:first-of-type)": {
                  borderRadius: "30px", // Add a subtle left border
                },
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                color: "#fff",
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "#FF6F61",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            >
              Whenever it feels necessary
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

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
          setCurrentPage(2);
        }}
      >
        <ArrowCircleLeftOutlinedIcon
          style={{ fontSize: 40, color: "#4A4C54" }}
        />
      </button>

      <button
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          size: "large",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "2px",
        }}
        onClick={() => {
          setCurrentPage(4);
        }}
      >
        <ArrowCircleRightOutlinedIcon
          style={{ fontSize: 40, color: "#4A4C54" }}
        />
      </button>
    </>
  );
}
