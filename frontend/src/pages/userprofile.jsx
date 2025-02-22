import { Card, CardContent, Typography, Button, Avatar, Chip, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";

const UserProfile = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#FF6F61",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden", 
      }}
    >
      <Card 
        sx={{ 
            maxWidth: "80vw", 
            width: "100%", 
            borderRadius: "24px 24px 0 0", 
            textAlign: "center", 
            padding: 3,
            position: "absolute",
            bottom: 0,
            overflow: "visible",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "65vh", 
        }}
      >
        <Avatar
          sx={{ 
            width: 160, 
            height: 160, 
            backgroundColor: "#d9d9d9",
            position: "absolute",
            top: -90, 
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <PersonIcon sx={{ fontSize: 90, color: "#757575" }} />
        </Avatar>

        <CardContent sx={{ paddingTop: 9, maxWidth: 750 }}> 
          <Typography variant="h5" fontWeight="bold" mt={-1} mb={2} color="#FF6F61">
            First Last (21)
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6F61",
              color: "white",
              mb: 2, 
              borderRadius: 5,
              fontWeight: "bold", 
              "&:hover": { backgroundColor: "#e65a50" },
            }}
          >
            Send Like
          </Button>

          <Typography variant="body1" mt={1} maxWidth={750}>
            Add a little bit of body text Add a little bit of body text Add a little bit of body text. 
            This is an extended description about the user. It could contain hobbies, interests, or anything 
            else that gives more insight about them.
          </Typography>

          <Box sx={{ marginTop: 3, maxWidth: 750 }}> 
            <Card
              sx={{
                maxWidth: 750, 
                width: "100%",
                borderRadius: 12, 
                backgroundColor: "#FF6F61",
                margin: "0 auto",
                padding: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="white" mb={4} textAlign="left">
                  My Preferences
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap", 
                    gap: 1,
                    justifyContent: "flex-start",
                    maxWidth: "100%", 
                  }}
                >
                  <Chip label="Off-Campus" 
                    sx={{ 
                      backgroundColor: "white", 
                      color: "#FF6F61", 
                      fontWeight: "bold", 
                      marginY: 0.5,
                    }} 
                  />
                  <Chip label="Non-Smoker" 
                    sx={{ 
                      backgroundColor: "white", 
                      color: "#FF6F61", 
                      fontWeight: "bold",
                      marginY: 0.5, 
                    }} 
                  />
                  <Chip label="Sleep time: 11:00-12:00" 
                    sx={{ 
                      backgroundColor: "white", 
                      color: "#FF6F61", 
                      fontWeight: "bold",
                      marginY: 0.5, 
                    }} 
                  />
                  <Chip label="Wakeup time: 8:00-9:00" 
                    sx={{ 
                      backgroundColor: "white", 
                      color: "#FF6F61", 
                      fontWeight: "bold",
                      marginY: 0.5, 
                    }} 
                  />
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
