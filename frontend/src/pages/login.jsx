import {
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Grid2 as Grid,
} from "@mui/material";

export default function Login() {
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
        }}
      >
        <Typography variant="h4" sx={{ margin: 0 }}>
          Rommiverse
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Find your vibe, share your space
        </Typography>
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
        <Typography
          variant="h3"
          sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
        >
          Login
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email address"
                variant="outlined"
                color="black"
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
                type="password"
                label="Password"
                variant="outlined"
                color="black"
                sx={{ marginBottom: 1, marginTop: 1, color: "black" }}
              />
              <Link
                href="#"
                underline="hover"
                sx={{
                  display: "display",
                  marginTop: 1,
                  fontSize: "0.9rem",
                  alignSelf: "flex-end",
                }}
              >
                <Typography variant="body">Forgot password</Typography>
              </Link>
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
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
