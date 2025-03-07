import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import { useState } from "react";
import UserProfileModal from "../components/user-profile-model";

const UserProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ textAlign: "center", marginTop: "20vh" }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF6F61",
          color: "white",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#e65a50" },
        }}
        onClick={() => setOpen(true)}
      >
        Open User Profile
      </Button>

      <UserProfileModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default UserProfile;
