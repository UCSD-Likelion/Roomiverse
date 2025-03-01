import { Box, Typography, Container, GlobalStyles } from "@mui/material";
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "#FF6F61",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 10, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 550,
              height: 550,
              background:
                "linear-gradient(to top, white, rgba(255,111,81,0.4))",
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "48px", md: "120px" },
              zIndex: 3,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Roomiverse
          </Typography>
        </motion.div>
      </Box>

      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "white",
                }}
              >
                {feature.title}
              </Typography>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
                    borderRadius: 3,
                    padding: 4,
                    color: "white",
                    height: "100%",
                    boxShadow: "none",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "16px", md: "20px" }, // 반응형 폰트 크기 적용
                      lineHeight: 1.6, // 가독성을 위해 줄 간격 추가
                      color: "white",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const features = [
  {
    title: "AI Matching",
    description:
      "Our AI-powered system meticulously analyzes your lifestyle preferences, daily habits, and personal values to match you with the most compatible roommate. By leveraging advanced machine learning algorithms, we ensure that your living experience is seamless and comfortable.",
  },
  {
    title: "Compatibility",
    description:
      "Utilizing sophisticated compatibility algorithms, we evaluate key factors such as sleep patterns, cleanliness standards, noise tolerance, and shared interests. This ensures that you and your roommate have a harmonious living environment.",
  },
  {
    title: "Verified Profiles",
    description:
      "Security and trust are at the heart of our platform. Each user goes through a thorough verification process to confirm their identity and background. Community reviews and a rating system help you make informed decisions.",
  },
];

export default LandingPage;
