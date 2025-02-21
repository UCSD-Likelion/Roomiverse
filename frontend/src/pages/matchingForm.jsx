import { useState } from "react";
import {
  Box,
  Typography,
  Grid2 as Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import logo from '/src/assets/images/logo.png';



export default function MatchingForm() {
    const [ethnicity, setEthnicity] = useState('');  // ✅ Fixed typo in useState

    const handleEthnicityChange = (event) => {  // ✅ Renamed function
        setEthnicity(event.target.value);
    };

    const [preference, setPreference] = useState(null);

    const handlePreferenceChange = (event, newPreference) => {
        if (newPreference !== null) {
            setPreference(newPreference); // Ensure we don't clear selection on click
        }
    };

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
        height: "94.1vh",
        backgroundColor: "#FF6F61",
        width: "100vw",
      }}
    >
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1.5,
        }}>
        <Typography variant="h3" sx={{ color: 'white', marginLeft: 1, fontWeight: 'bold' }}>Roomiverse</Typography>
        <img src={logo} alt="Logo" style={{ width: 60, height: 60, transform: 'translateY(-3px)', cursor: 'pointer', marginLeft: 0 }} />
        </Box>
        
        <Box
            component="form"
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                height: "66vh",
                maxWidth: "1100px",
                borderRadius: "30px",
                padding: "2rem",
                overflow: "auto",
                px: "10rem",
            }}
        >
            <Typography variant="h4" sx={{ color: "white", fontWeight: 700, marginBottom: 3.5 }}>
                Academic & Background
          </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "flex-start",
                    marginBottom: 3,
                }}>
                <Typography variant="p" sx={{ color: "white", fontWeight: 600, fontSize: 24 }}>
                    Ethnicity
                </Typography>
                <FormControl sx={{  minWidth: 500, backgroundColor: "rgba(255, 255, 255, 0.4)", borderRadius: "10px", border: "none","& .MuiOutlinedInput-notchedOutline": { border: "none" }, 
            "& .MuiSelect-select": { padding: "20px" }, }}>
                <Select
                    value={ethnicity}
                    onChange={handleEthnicityChange}
                    displayEmpty
                    renderValue={(selected) => (selected ? selected : "(Please Select Your Ethnicity)")} // ✅ Adds Placeholder
                    sx={{
                        color: "white",  // ✅ Text color for selected value
                        fontSize: "20px", // ✅ Make text larger
                        "& .MuiSelect-select": {
                            padding: "14px",  // ✅ Adjust padding
                            paddingLeft: "20px",  // ✅ Adjust padding
                        },
                        "& .MuiSvgIcon-root": {
                            color: "white",  // ✅ Makes dropdown arrow white
                        }
                    }}
                >
                <MenuItem value="Asian">Asian</MenuItem>
                <MenuItem value="Black">Black or African American</MenuItem>
                <MenuItem value="Hispanic">Hispanic or Latino</MenuItem>
                <MenuItem value="White">White</MenuItem>
                <MenuItem value="Native American">Native American or Alaska Native</MenuItem>
                <MenuItem value="Pacific Islander">Native Hawaiian or Pacific Islander</MenuItem>
                <MenuItem value="Middle Eastern">Middle Eastern or North African</MenuItem>
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
                }}>
                <Typography variant="p" sx={{ color: "white", fontWeight: 600, fontSize: 24 }}>
                    What's your Major?
                </Typography>
                <FormControl sx={{  minWidth: 500, backgroundColor: "rgba(255, 255, 255, 0.4)", borderRadius: "10px", border: "none","& .MuiOutlinedInput-notchedOutline": { border: "none" }, 
            "& .MuiSelect-select": { padding: "20px" }, }}>
                <Select
                    value={ethnicity}
                    onChange={handleEthnicityChange}
                    displayEmpty
                    renderValue={(selected) => (selected ? selected : "(Please Select Your Major)")} // ✅ Adds Placeholder
                    sx={{
                        color: "white",  // ✅ Text color for selected value
                        fontSize: "20px", // ✅ Make text larger
                        "& .MuiSelect-select": {
                            padding: "14px",  // ✅ Adjust padding
                            paddingLeft: "20px",  // ✅ Adjust padding
                        },
                        "& .MuiSvgIcon-root": {
                            color: "white",  // ✅ Makes dropdown arrow white
                        }
                    }}
                >
                <MenuItem value="Asian">Asian</MenuItem>
                <MenuItem value="Black">Black or African American</MenuItem>
                <MenuItem value="Hispanic">Hispanic or Latino</MenuItem>
                <MenuItem value="White">White</MenuItem>
                <MenuItem value="Native American">Native American or Alaska Native</MenuItem>
                <MenuItem value="Pacific Islander">Native Hawaiian or Pacific Islander</MenuItem>
                <MenuItem value="Middle Eastern">Middle Eastern or North African</MenuItem>
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
                    marginBottom: 2,
                }}>
                <Typography variant="p" sx={{ color: "white", fontWeight: 600, fontSize: 24 }}>
                    Which College are you in?
                </Typography>
                <FormControl sx={{  minWidth: 500, backgroundColor: "rgba(255, 255, 255, 0.4)", borderRadius: "10px", border: "none","& .MuiOutlinedInput-notchedOutline": { border: "none" }, 
            "& .MuiSelect-select": { padding: "20px" }, }}>
                <Select
                    value={ethnicity}
                    onChange={handleEthnicityChange}
                    displayEmpty
                    renderValue={(selected) => (selected ? selected : "(Please Select Your College)")} // ✅ Adds Placeholder
                    sx={{
                        color: "white",  // ✅ Text color for selected value
                        fontSize: "20px", // ✅ Make text larger
                        "& .MuiSelect-select": {
                            padding: "14px",  // ✅ Adjust padding
                            paddingLeft: "20px",  // ✅ Adjust padding
                        },
                        "& .MuiSvgIcon-root": {
                            color: "white",  // ✅ Makes dropdown arrow white
                        }
                    }}
                >
                <MenuItem value="Asian">Asian</MenuItem>
                <MenuItem value="Black">Black or African American</MenuItem>
                <MenuItem value="Hispanic">Hispanic or Latino</MenuItem>
                <MenuItem value="White">White</MenuItem>
                <MenuItem value="Native American">Native American or Alaska Native</MenuItem>
                <MenuItem value="Pacific Islander">Native Hawaiian or Pacific Islander</MenuItem>
                <MenuItem value="Middle Eastern">Middle Eastern or North African</MenuItem>
                <MenuItem value="Mixed">Two or More Races</MenuItem>
                <MenuItem value="Other">Other (Please Specify)</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <Typography variant="h4" sx={{ color: "white", fontWeight: 700, marginBottom: 3.5, marginTop: 9 }}>
                Living Preference
          </Typography>
          <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "flex-start",
                    marginBottom: 3,
                }}>
                <Typography variant="p" sx={{ color: "white", fontWeight: 600, fontSize: 24, marginBottom: 1 }}>
                    Where do you prefer to live?
                </Typography>
                <ToggleButtonGroup
                    value={preference}
                    exclusive
                    onChange={handlePreferenceChange}
                    sx={{ display: "flex", gap: 2, borderRadius: "16px", overflow: "hidden", border: "none"}}
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
                            borderRadius: "30px 0 0 16px",  // Round left side
                            "&:not(:last-of-type)": {
                                borderRadius: "30px" // Add border only between buttons
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
                            }
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
                            borderRadius: "30px",  // Round left side
                            border: "none",
                            "&:not(:first-of-type)": {
                                borderRadius: "30px"  // Add a subtle left border
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
                            }
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
                }}>
                <Typography variant="p" sx={{ color: "white", fontWeight: 600, fontSize: 24, marginBottom: 1 }}>
                    Do you prefer a roommate of the same gender?
                </Typography>
                <ToggleButtonGroup
                    value={preference}
                    exclusive
                    onChange={handlePreferenceChange}
                    sx={{ display: "flex", gap: 2, borderRadius: "16px", overflow: "hidden", border: "none" }}
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
                            borderRadius: "30px 0 0 16px",  // Round left side
                            "&:not(:last-of-type)": {
                                borderRadius: "30px" // Add border only between buttons
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
                            }
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
                            borderRadius: "30px",  // Round left side
                            border: "none",
                            "&:not(:first-of-type)": {
                                borderRadius: "30px"  // Add a subtle left border
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
                            }
                        }}
                    >
                        No Preference
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        </Box>
                      
    </Box>
  );
}
