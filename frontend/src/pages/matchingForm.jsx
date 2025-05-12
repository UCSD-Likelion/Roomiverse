import { useState } from "react";
import {
  Box,
  Typography,
  Grid2 as Grid,
  ToggleButton,
  ToggleButtonGroup,
  Slider,
  Button,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import logo from "/src/assets/images/logo.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { LinearProgress } from "@mui/material";

import MatchingForm1 from "../components/matching-form-1";

export default function MatchingForm() {
  const [ethnicity, setEthnicity] = useState("");
  const [major, setMajor] = useState("");
  const [college, setCollege] = useState("");
  const [preference, setPreference] = useState(null); // On-campus / Off-campus
  const [sameGender, setSameGender] = useState(null); // Yes / No Preference
  const [guestFrequency, setGuestFrequency] = useState(""); // Rarely / Often
  const [pets, setPets] = useState(""); // How do you feel about pets?
  const [smokes, setSmokes] = useState(""); // Do you smoke?
  const [okayWithSmoking, setOkayWithSmoking] = useState(""); // Are you okay with a roommate who smokes?
  const [drinks, setDrinks] = useState(""); // Do you drink alcohol?
  const [okayWithDrinking, setOkayWithDrinking] = useState(""); // Are you okay with a roommate who drinks?
  const [sleepImportance, setSleepImportance] = useState(""); // Not Important -> Very Important
  const [roomType, setRoomType] = useState(""); // Preferred room type
  const [rent, setRent] = useState([900, 1100]); // Rent Range
  const [distance, setDistance] = useState([0, 5]); // Distance from Campus

  const handleEthnicityChange = (event) => setEthnicity(event.target.value);

  const handleMajorChange = (event) => setMajor(event.target.value);

  const handleCollegeChange = (event) => setCollege(event.target.value);

  const handlePreferenceChange = (event, newPreference) =>
    setPreference(newPreference);

  const handleSameGenderChange = (event, newValue) => setSameGender(newValue);

  const handleGuestFrequencyChange = (event, newValue) =>
    setGuestFrequency(newValue);

  const handlePetsChange = (event) => setPets(event.target.value);

  const handleSmokesChange = (event) => setSmokes(event.target.value);

  const handleOkayWithSmokingChange = (event, newValue) =>
    setOkayWithSmoking(newValue);

  const handleDrinksChange = (event) => setDrinks(event.target.value);

  const handleOkayWithDrinkingChange = (event, newValue) =>
    setOkayWithDrinking(newValue);

  const handleSleepImportanceChange = (event, newValue) =>
    setSleepImportance(newValue);

  const handleRoomTypeChange = (event) => setRoomType(event.target.value);

  const handleRentChange = (event, newValue) => setRent(newValue);

  const handleDistanceChange = (event, newValue) => setDistance(newValue);

  const valuetext = (value) => {
    return `${value} miles`;
  };

  // progress bar
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5; // Total number of pages
  const progressValue = (currentPage / totalPages) * 100;

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#95AAFF",
        width: "100vw",
      }}
    >
      <Box
        component="form"
        sx={{
          backgroundColor: "white",
          height: "50vh",
          width: "75vw",
          maxWidth: "1200px",
          borderRadius: "30px",
          padding: "2rem",
          paddingLeft: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {currentPage === 0 && (
          <MatchingForm1
            ethnicity={ethnicity}
            handleEthnicityChange={handleEthnicityChange}
            major={major}
            handleMajorChange={handleMajorChange}
            college={college}
            handleCollegeChange={handleCollegeChange}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 1 && (
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
                Step 2 of 4
              </Typography>
              <LinearProgress
                variant="determinate"
                value={50}
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
              Living Preference
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
                  marginBottom: 1,
                }}
              >
                Where do you prefer to live?
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
                    width: "220px",
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
                  On-Campus
                </ToggleButton>

                <ToggleButton
                  value="off-campus"
                  sx={{
                    width: "220px",
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
                  Off-Campus
                </ToggleButton>
              </ToggleButtonGroup>
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
                Do you prefer a roommate of the same gender?
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
                  value="yes"
                  sx={{
                    width: "220px",
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
                  Yes
                </ToggleButton>

                <ToggleButton
                  value="no_preference"
                  sx={{
                    width: "220px",
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
                  No Preference
                </ToggleButton>
              </ToggleButtonGroup>
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
                setCurrentPage(1);
              }}
            >
              <ArrowCircleRightOutlinedIcon
                style={{ fontSize: 40, color: "#4A4C54" }}
              />
            </button>
          </>
        )}

        {currentPage === 2 && (
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
                Step 2 of 4
              </Typography>
              <LinearProgress
                variant="determinate"
                value={50}
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
              Lifestyle & Habbits
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
                How do you feel about pets in your living space?
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
                    selected ? selected : "(Please Select)"
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
                Do you smoke?
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
                    selected ? selected : "(Please Select)"
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
                Are you okay with a roomamte who smokes?
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
                    width: "220px",
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
                  Yes
                </ToggleButton>

                <ToggleButton
                  value="off-campus"
                  sx={{
                    width: "220px",
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
                  No
                </ToggleButton>
              </ToggleButtonGroup>
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
                Do you drink alchol?
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
                    width: "220px",
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
                  Yes
                </ToggleButton>

                <ToggleButton
                  value="off-campus"
                  sx={{
                    width: "220px",
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
                  No
                </ToggleButton>
              </ToggleButtonGroup>
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
                Are you okay with a roommate who drinks?
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
                    width: "220px",
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
                  Yes
                </ToggleButton>

                <ToggleButton
                  value="off-campus"
                  sx={{
                    width: "220px",
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
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

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
        )}

        {currentPage === 3 && (
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
                Step 3 of 4
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                SX={{
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
                    selected
                      ? selected
                      : "(Please Select Your Prefer Wake Up Time)"
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
                How important is it that your roommate has a similar sleep
                schedule?
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
                  How important is it that your roommate has a similar sleep
                  schedule?
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
                right: "30px",
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
              <ArrowCircleRightOutlinedIcon
                style={{ fontSize: 40, color: "#4A4C54" }}
              />
            </button>
          </>
        )}

        {currentPage === 4 && (
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
                Step 4 of 4
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
                    getAriaValueText={valuetext}
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
                      <MenuItem value="Black">
                        Black or African American
                      </MenuItem>
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
        )}
      </Box>
    </Box>
  );
}
