import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Link,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function LoginForm({
  email,
  password,
  showPassword,
  error,
  onEmailChange,
  onPasswordChange,
  onShowPasswordToggle,
  onSubmit,
}) {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Grid container spacing={2} flexDirection="column">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            size="small"
            value={email}
            onChange={onEmailChange}
            error={!!error.email}
            helperText={error.email}
            slotProps={{
              input: {
                sx: {
                  bgcolor: "#E6E9FF",
                  borderRadius: 2,
                  pl: 1,
                  fontSize: "16px",
                },
                disableUnderline: true,
              },
              inputLabel: {
                shrink: true,
                sx: {
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "text.primary",
                  mb: 0.5,
                },
              },
            }}
            sx={{ mt: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            variant="filled"
            size="small"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={onPasswordChange}
            error={!!error.password}
            helperText={error.password}
            slotProps={{
              input: {
                sx: {
                  bgcolor: "#E6E9FF",
                  borderRadius: 2,
                  pl: 1,
                  fontSize: "16px",
                },
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={onShowPasswordToggle}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
              inputLabel: {
                shrink: true,
                sx: {
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "text.primary",
                  mb: 0.5,
                },
              },
            }}
            sx={{ mt: 1 }}
          />
        </Grid>
      </Grid>

      <Box mt={3} textAlign="center">
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{
            borderRadius: "30px",
            px: 3,
            width: "50%",
            backgroundColor: "#A9B8FF",
            color: "#fff",
            ":hover": { backgroundColor: "#91A3E0" },
          }}
        >
          Login
        </Button>
      </Box>

      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          Don't have an account?{" "}
          <Link href="/register" underline="hover">
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
