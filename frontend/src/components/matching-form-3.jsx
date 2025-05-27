import {
    Box,
    LinearProgress,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
  } from "@mui/material";
  import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
  import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
  
  export default function MatchingForm3({
    preference,
    handlePreferenceChange,
    setCurrentPage,
    pets,
    handlePetsChange,
    smokes,
    okayWithSmoking,
    drinks,
    okayWithDrinking,
    handleSmokesChange,
    handleOkayWithSmokingChange,
    handleDrinksChange,
    handleOkayWithDrinkingChange,
    
    
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
            Step 3 of 5
          </Typography>
          <LinearProgress
            variant="determinate"
            value={60}
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
            color: "#4A4C54",
            fontWeight: 700,
            marginBottom: 3,
            marginTop: 1,
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
            sx={{
              color: "#A4A4C54",
              fontWeight: 400,
              fontSize: 20,
              marginTop: 1,
              paddingLeft: 1,
            }}
          >
            How do you feel about pets in your living space?
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
              variant="p"
              sx={{
                color: "#4A4C54",
                fontWeight: 600,
                fontSize: 19,
                marginRight: 1,
                paddingLeft: 1,
              }}
            >
              Uncomfortable
            </Typography>
            <ToggleButtonGroup
              value={pets}
              exclusive
              onChange={handlePetsChange}
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
                value="very-comfortable"
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
              variant="p"
              sx={{
                color: "#4A4C54",
                fontWeight: 600,
                fontSize: 19,
                marginRight: 1,
                paddingLeft: 1,
              }}
            >
              Comfortable
            </Typography>
          </Box>
        </Box>
        

        <Box                    //Yes or No Button 
            sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "flex-start",
            marginTop: 8,
            }}
        >
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
                sx={{ color: "#4A4C54", fontWeight: 400, fontSize: 20, paddingBottom: 1, paddingLeft: 1 }}
            > Do you smoke?
            </Typography>
            <ToggleButtonGroup
                value={smokes}
                exclusive
                onChange={handleSmokesChange}
                sx={{
                display: "flex",
                gap: 2,
                borderRadius: "16px",
                overflow: "hidden",
                border: "none",
                }}
            >
                <ToggleButton
                value="I-smoke"
                sx={{
                    width: "230px",
                    height: "45px",
                    fontSize: "15px",
                    fontWeight: 600,
                    paddingTop: 2,
                    textTransform: "none",
                    backgroundColor: "#E2E8FF",
                    color: "#ffff",
                    border: "none",
                    borderRadius: "30px 0 0 16px", // Round left side
                    "&:not(:last-of-type)": {
                    borderRadius: "30px", // Add border only between buttons
                    },
                    "&.Mui-selected": {
                    backgroundColor: "#96AAFF",
                    color: "#fffff",
                    },
                    "&.Mui-selected:hover": {
                    backgroundColor: "#95AAFF",
                    color: "#fffff",
                    },
                    "&:hover": {
                    backgroundColor: "#95AAFF",
                    color: "#fffff",
                    },
                }}
                >
                Yes
                </ToggleButton>
                <ToggleButton
                value="I-dont-smoke"
                sx={{
                    width: "230px",
                    height: "45px",
                    fontWeight: 600,
                    fontSize: "15px",
                    textTransform: "none",
                    border: "none",
                    borderRadius: "30px", // Round left side
                    "&:not(:first-of-type)": {
                    borderRadius: "30px", // Add a subtle left border
                    },
                    backgroundColor: "#E2E8FF",
                    color: "#fff",
                    "&.Mui-selected": {
                    backgroundColor: "#95AAFF",
                    color: "#fffff",
                    },
                    "&.Mui-selected:hover": {
                    backgroundColor: "#95AAFF",
                    },
                    "&:hover": {
                    backgroundColor: "#95AAFF",
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
                marginLeft: 20,
            }}
            >
            <Typography
                variant="p"
                sx={{ color: "#4A4C54", fontWeight: 400, fontSize: 20, paddingBottom: 1, paddingLeft: 1 }}
            > Are you okay with a roommate who smokes?
            </Typography>
            <ToggleButtonGroup
                value={okayWithSmoking}
                exclusive
                onChange={handleOkayWithSmokingChange}
                sx={{
                display: "flex",
                gap: 2,
                borderRadius: "16px",
                overflow: "hidden",
                border: "none",
                }}
            >
                <ToggleButton
                value="Okay-smoke"
                sx={{
                    width: "230px",
                    height: "45px",
                    fontSize: "15px",
                    fontWeight: 600,
                    paddingTop: 2,
                    textTransform: "none",
                    backgroundColor: "#E2E8FF",
                    color: "#ffff",
                    border: "none",
                    borderRadius: "30px 0 0 16px", // Round left side
                    "&:not(:last-of-type)": {
                    borderRadius: "30px", // Add border only between buttons
                    },
                    "&.Mui-selected": {
                    backgroundColor: "#96AAFF",
                    color: "#fffff",
                    },
                    "&.Mui-selected:hover": {
                    backgroundColor: "#95AAFF",
                    color: "#fffff",
                    },
                    "&:hover": {
                    backgroundColor: "#95AAFF",
                    color: "#fffff",
                    },
                }}
                >
                Yes
                </ToggleButton>
                <ToggleButton
                value="Not-okay-smoke"
                sx={{
                    width: "230px",
                    height: "45px",
                    fontWeight: 600,
                    fontSize: "15px",
                    textTransform: "none",
                    border: "none",
                    borderRadius: "30px", // Round left side
                    "&:not(:first-of-type)": {
                    borderRadius: "30px", // Add a subtle left border
                    },
                    backgroundColor: "#E2E8FF",
                    color: "#fff",
                    "&.Mui-selected": {
                    backgroundColor: "#95AAFF",
                    color: "#fffff",
                    },
                    "&.Mui-selected:hover": {
                    backgroundColor: "#95AAFF",
                    },
                    "&:hover": {
                    backgroundColor: "#95AAFF",
                    },
                }}
                >
                No
                </ToggleButton>
            </ToggleButtonGroup>
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
            right: "1200px",
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
            setCurrentPage(3);
          }}
        >
          <ArrowCircleRightOutlinedIcon
            style={{ fontSize: 40, color: "#4A4C54" }}
          />
        </button>
      </>
    )}