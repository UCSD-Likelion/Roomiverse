import {
  Box,
  LinearProgress,
  Typography,
  FormControl,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,

} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

export default function MatchingForm2({
  preference,
  handlePreferenceChange,
  setCurrentPage,
  sameGender,
  handleSameGenderChange,
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
          Step 2 of 5
        </Typography>
        <LinearProgress
          variant="determinate"
          value={40}
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
        vvariant="h3"
        sx={{
          color: "#4A4C54",
          fontWeight: 700,
          marginBottom: 3,
          marginTop: 1,
        }}
      >
        Living Preference
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 3,
          gap: 8,
        }}
      >
        <Typography
          variant="p"
          sx={{
            color: "#4A4C54",
            ffontWeight: 400,
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
            <MenuItem value="On-Campus">On-Campus</MenuItem>
            <MenuItem value="Off-Campus">Off-Campus</MenuItem>
          </Select>
        </FormControl>
      </Box>

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
            How often do you prefer having guests over?
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
                fontWeight: 700,
                fontSize: 22,
                marginRight: 1,
              }}
            >
              Rarely
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
                value="so-rare"
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
                value="rare"
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
                value="middle"
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
                value="often"
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
                value="so-often"
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
                fontWeight: 700,
                fontSize: 22,
                marginLeft: 1,
              }}
            >
              Often
            </Typography>
          </Box>
        </Box>

      {/* Other components and sections are similar */}
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
          setCurrentPage(2);
        }}
      >
        <ArrowCircleRightOutlinedIcon
          style={{ fontSize: 40, color: "#4A4C54" }}
        />
      </button>
    </>
  );
}
