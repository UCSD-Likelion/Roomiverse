// src/components/MatchCard.jsx
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Import the placeholder profile image
import profilePlaceholder from "/src/assets/images/blank-profile-picture-973460_1280.png";

export default function MatchCard({ match }) {
  // Destructure match object (adjust property names as needed)
  const { name, description, image } = match;
  
  return (
    <Card sx={{ maxWidth: 400, borderRadius: "16px", boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "cover" }}
        image={image || profilePlaceholder}
        title={name || "Profile Picture"}
      />
      <CardContent>
        {/* Increase title font size */}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          {name || "Unknown"}
        </Typography>
        {/* Increase body text font size */}
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "1.15rem" }}
        >
          {description ||
            "This user has not provided a description yet. Click to learn more!"}
        </Typography>
      </CardContent>
      <CardActions sx={{position: "relative",
          bottom: 16, // Adjust this value to shift the buttons up or down
          left: 0,
          right: 0,
          justifyContent: "center",}}>
        <Button size="small" variant="contained" color="primary">
          Like
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}
