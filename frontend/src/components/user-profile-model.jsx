import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  Box,
  Modal,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PropTypes from "prop-types";

const UserProfileModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        onClick={onClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          onClick={(e) => e.stopPropagation()}
          sx={{
            maxWidth: "55vw",
            width: "100%",
            borderRadius: "24px",
            textAlign: "center",
            padding: 3,
            position: "relative",
            overflow: "visible",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 24,
            backgroundColor: "white",
          }}
        >
          <Avatar
            sx={{
              width: 160,
              height: 160,
              backgroundColor: "#d9d9d9",
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
            }}
          >
            <PersonIcon sx={{ fontSize: 90, color: "#757575" }} />
          </Avatar>

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              paddingTop: 13,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="#FF6F61">
              First Last (21)
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF6F61",
                color: "white",
                borderRadius: 5,
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#e65a50" },
              }}
            >
              Send Like
            </Button>

            <Typography
              variant="body1"
              fontWeight="bold"
              maxWidth={750}
              sx={{ marginTop: "-10px" }}
            >
              Add a little bit of body text. Add a little bit of body text. Add
              a little bit of body text. This is an extended description about
              the user. It could contain hobbies, interests, or anything else
              that gives more insight about them.
            </Typography>

            <Box
              sx={{
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

            {/* Close Button */}
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Close
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};
UserProfileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserProfileModal;
