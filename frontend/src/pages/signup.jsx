import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Grid2 as Grid,
  Select,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Signup() {
  const [dob, setDob] = useState(new Date());

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        component="section"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#FF6F61",
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
          px: "8rem",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 650,
            height: 650,
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",

            top: "50%",
            transform: "translateY(-50%)",
            left: "2%",
            zIndex: 1,
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ color: "white", fontWeight: 700 }}>
            Welcome to Roomiverse!
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{ marginTop: 1, fontWeight: 300, color: "white" }}
          >
            Find your vibe,
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{ margin: 0, fontWeight: 300, color: "white" }}
          >
            share your space.
          </Typography>
        </motion.div>
      </Box>
      <Box
        component="section"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          px: "3rem",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#283b42" }}>
          Signup
        </Typography>
        <Box
          variant="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Grid
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
            >
              <TextField
                required
                fullWidth
                label="First Name"
                variant="outlined"
                color="black"
                sx={{ color: "black" }}
              />
              <TextField
                required
                fullWidth
                label="Last Name"
                variant="outlined"
                color="black"
                sx={{ color: "black" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                variant="outlined"
                color="black"
                sx={{ color: "black" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                fullWidth
                required
                label="Password"
                variant="outlined"
                color="black"
                sx={{ color: "black" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                fullWidth
                required
                label="Confirm Password"
                variant="outlined"
                color="black"
                sx={{ color: "black" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Date of Birth</Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  onChange={(newValue) => setDob(newValue)}
                  slotProps={{
                    textField: { fullWidth: true },
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item sx={12}>
              <Typography variant="h6">Gender</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#FF6F61",
                  color: "white",
                  "&:hover": { backgroundColor: "#ff7c70" },
                  borderRadius: "0.5rem",
                  py: "0.75rem",
                }}
              >
                <Typography sx={{ fontSize: 24 }}>Sign In</Typography>
              </Button>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <Typography>Don&apos;t have an account?</Typography>
                <Link
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                  href="/signup"
                >
                  <Typography>Sign up</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
