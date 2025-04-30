import StarIcon from "@mui/icons-material/Star";
import { Card, CardMedia, Typography, Box, IconButton } from "@mui/material";

import Portrait from "../assets/images/portrait.png";
const AVATAR_URL = Portrait;
const NUM_MATCHES = 16;

export default function MatchingPage() {
  return (
    <Box
      sx={{
        mt: "63px",
        backgroundColor: "#95AAFF",
        minHeight: "100vh",
        py: 10,
        px: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header: Title + Filters */}
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontFamily: '"M PLUS 1p", sans-serif',
            fontWeight: 800,
            fontSize: "48px",
            lineHeight: "210%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Find your Perfect Match!
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            flexWrap: "wrap",
            justifyContent: "center",
            width: "75%",
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 2,
          }}
        >
          <Typography>This is for icons</Typography>
        </Box>
      </Box>

      {/* Cards Container */}
      <Box
        sx={{
          backgroundColor: "#fff",
          maxWidth: 900,
          width: "100%",
          p: 6,
          borderRadius: 10,
          boxShadow: 3,
          fontFamily: '"M PLUS 1p", sans-serif',
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(112px, 1fr))",
            columnGap: 4,
            rowGap: 4,
            justifyContent: "start",
          }}
        >
          {Array.from({ length: NUM_MATCHES }, (_, i) => i + 1).map((rank) => (
            <Box key={rank} sx={{ textAlign: "center", cursor: "pointer" }}>
              <Card
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: 5,
                  overflow: "hidden",
                  bgcolor: "#D9D9D9",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                {/* Image fills card */}
                <CardMedia
                  component="img"
                  image={AVATAR_URL}
                  alt={`Match ${rank}`}
                  sx={{ width: "100%", height: "120%", objectFit: "cover" }}
                />
                {/* Badge overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "11px",
                    left: "11px",
                    width: "100px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#95AAFF",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <StarIcon sx={{ fontSize: 12, mr: 0.5, color: "#fff" }} />
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: '"M PLUS 1p", sans-serif',
                      fontWeight: 800,
                      fontSize: "10px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#fff",
                    }}
                  >
                    Best Match #{rank}
                  </Typography>
                </Box>
              </Card>
              {/* Description below card */}
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "20px", textAlign: "left" }}
                >
                  &nbsp;Name {rank}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "text.secondary",
                    textAlign: "left",
                  }}
                >
                  &nbsp;Age: {20 + rank}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "text.secondary",
                    textAlign: "left",
                  }}
                >
                  &nbsp;Major: M{rank}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
