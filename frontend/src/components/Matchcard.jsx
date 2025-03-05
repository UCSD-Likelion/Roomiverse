import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Import the placeholder profile image
import profilePlaceholder from "/src/assets/images/blank-profile-picture-973460_1280.png";

export default function MatchCard({ name, description, image }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "16px", boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "cover" }}
        image={image || profilePlaceholder} // Use user image or default profile
        title={name || "Profile Picture"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name || "Unknown"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description ||
            "This user has not provided a description yet. Click to learn more!"}
        </Typography>
      </CardContent>
      <CardActions>
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