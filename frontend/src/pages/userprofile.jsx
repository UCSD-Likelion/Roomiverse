import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";

const UserProfile = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#FF6F61",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowY: "auto",
        overflowX: "hidden",
        paddingBottom: "5vh",
        paddingTop: "10vh",
      }}
    >
      <Card
        sx={{
          maxWidth: "80vw",
          width: "100%",
          borderRadius: "24px",
          textAlign: "center",
          padding: 3,
          position: "relative",
          overflow: "visible",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "70vh",
          marginTop: "5vh",
        }}
      >
        <Avatar
          sx={{
            width: 160,
            height: 160,
            backgroundColor: "#d9d9d9",
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        >
          <PersonIcon sx={{ fontSize: 90, color: "#757575" }} />
        </Avatar>

        <CardContent sx={{ paddingTop: 12, maxWidth: 750 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mt={2}
            mb={4}
            color="#FF6F61"
            sx={{ marginTop: "20px" }}
          >
            First Last (21)
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6F61",
              color: "white",
              mb: 4,
              borderRadius: 5,
              fontWeight: "bold",
              marginTop: "0px",
              "&:hover": { backgroundColor: "#e65a50" },
            }}
          >
            SEND LIKE
          </Button>

          <Typography
            variant="body1"
            fontWeight="bold"
            maxWidth={750}
            sx={{ marginTop: "-10px", marginBottom: 2 }}
          >
            Add a little bit of body text. Add a little bit of body text. Add a
            little bit of body text. This is an extended description about the
            user. It could contain hobbies, interests, or anything else that
            gives more insight about them.
          </Typography>

          <Box
            sx={{
              marginTop: 2,
              maxWidth: 750,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                maxWidth: 750,
                width: "100%",
                borderRadius: 12,
                backgroundColor: "#FF6F61",
                margin: "0 auto",
                padding: 4,
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="white"
                  mb={5}
                  textAlign="center"
                >
                  My Preferences
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  {[
                    "Off-Campus",
                    "Non-Smoker",
                    "Sleep time: 11:00-12:00",
                    "Wakeup time: 8:00-9:00",
                  ].map((preference) => (
                    <Chip
                      key={preference}
                      label={preference}
                      sx={{
                        backgroundColor: "white",
                        color: "#FF6F61",
                        fontWeight: "bold",
                        marginY: 0.5,
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;
