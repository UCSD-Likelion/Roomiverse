import React from "react";
import { Box, Typography, Button } from "@mui/material";
// Feature icons replaced with images
import RoomiverseHomeIcon from "../assets/images/roomiverse-home.png";
import ArrowHomeIcon from "../assets/images/arrow-home.png";
import HumanHomeIcon from "../assets/images/human-home.png";

export default function HomePage() {
  return (
    <>
      {/* Hero Container including Features */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #95AAFF 0%, #284463 100%)",
          minHeight: "120vh",
          color: "#fff",
          fontFamily: '"M PLUS 1p", sans-serif',
          position: 'relative'
        }}
      >
        {/* Hero Content */}
        <Box sx={{ position: "relative", textAlign: "center", pt: 8, pb: 54}}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: -190,
              right: -190,
              height: '207.5vh',
              mt: 12,
              backgroundColor: "#FFFFFF33",
              borderRadius: "100% 100% 0 0",
              zIndex: 0
            }}
          />
          <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 40, md: 60 },
                lineHeight: 1.1,
                mb: 4,
                mt:23
              }}
            >
              Find Your Vibe,<br /> Share Your Space
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#164863",
                textTransform: "none",
                borderRadius: 30,
                px: 10,
                py: 1,
                mt: 3,
                fontSize: 26,
                fontWeight: 700
              }}
            >
              Find your Roomie
            </Button>
          </Box>
        </Box>

        {/* Features Section - now inside hero container */}
        <Box sx={{ px: { xs: 2, md: 8 }, py: 10 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 15,
              alignItems: 'center'
            }}
          >
            {/* About Us */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: .5, width: 190 }}
              >
                <Box
                  component="img"
                  src={RoomiverseHomeIcon}
                  alt="About Us"
                  sx={{ width: 100, height: 100 }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: 22, color: "#fff" }}
                >
                  About Us
                </Typography>
              </Box>
              <Typography sx={{ color: "#fff", mt: 5, fontSize: 18, maxWidth: 600 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              </Typography>
            </Box>

            {/* Perfect Match */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.1, width: 190 }}
              >
                <Box
                  component="img"
                  src={ArrowHomeIcon}
                  alt="Perfect Match"
                  sx={{ width: 100, height: 100 }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: 22, color: "#fff" }}
                >
                  Perfect Match
                </Typography>
              </Box>
              <Typography sx={{ color: "#fff", mt: 5, fontSize: 18, maxWidth: 600 }}>
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
              </Typography>
            </Box>

            {/* Trustworthy */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: 190 }}
              >
                <Box
                  component="img"
                  src={HumanHomeIcon}
                  alt="Trustworthy"
                  sx={{ width: 100, height: 75 }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: 22, color: "#fff" }}
                >
                  Trustworthy
                </Typography>
              </Box>
              <Typography sx={{ color: "#fff", mt: 5, fontSize: 18, maxWidth: 600 }}>
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
