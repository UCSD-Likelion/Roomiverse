import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function RegisterForm({
  firstName,
  handleFirstNameChange,
  lastName,
  handleLastNameChange,
  email,
  password,
  confirmPassword,
  showConfirmPassword,
  showPassword,
  error,
  onEmailChange,
  onPasswordChange,
  onShowPasswordToggle,
  onShowConfirmPasswordToggle,
  onConfirmPasswordChange,
  handleDOBChange,
  handleGenderChange,
  gender,
  onSubmit,
}) {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Grid container spacing={2} flexDirection="column">
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
        >
          <TextField
            fullWidth
            label="First"
            variant="filled"
            size="small"
            value={firstName}
            onChange={handleFirstNameChange}
            error={!!error.firstName}
            helperText={error.firstName}
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
          <TextField
            fullWidth
            label="Last"
            variant="filled"
            size="small"
            value={lastName}
            onChange={handleLastNameChange}
            error={!!error.lastName}
            helperText={error.lastName}
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
            label="Confirm Password"
            variant="filled"
            size="small"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
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
                      onClick={onShowConfirmPasswordToggle}
                      edge="end"
                      size="small"
                    >
                      {showConfirmPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
              inputLabel: {
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
        <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              onChange={handleDOBChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  variant: "filled",
                  size: "small",
                  InputProps: {
                    disableUnderline: true,
                    sx: {
                      bgcolor: "#E6E9FF",
                      borderRadius: 2,
                      pl: 1,
                      fontSize: "16px",
                    },
                  },
                  InputLabelProps: {
                    sx: {
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "text.primary",
                      mb: 0.5,
                    },
                  },
                  error: !!error.birthdate,
                  helperText: error.birthdate,
                  sx: {
                    mt: 1,
                  },
                },
              }}
            />
          </LocalizationProvider>
          <FormControl
            fullWidth
            variant="filled"
            sx={{
              mt: 1,
              bgcolor: "#E6E9FF",
              borderRadius: 2,
              "& .MuiFilledInput-root": {
                borderRadius: 2,
                pl: 1,
                fontSize: "16px",
                backgroundColor: "#E6E9FF",
                boxShadow: "none",
                "&:before, &:after": { display: "none" },
                height: "40px",
              },
              "& .MuiInputLabel-root": {
                fontWeight: 600,
                fontSize: "14px",
                color: "text.primary",
                mb: 0.5,
              },
            }}
          >
            <InputLabel id="gender-label" shrink>
              Gender
            </InputLabel>

            <Select
              labelId="gender-label"
              label="Gender"
              value={gender}
              disableUnderline
              displayEmpty
              variant="filled"
              onChange={handleGenderChange}
            >
              <MenuItem value="" disabled>
                Select Gender
              </MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
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
          Register
        </Button>
      </Box>

      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
