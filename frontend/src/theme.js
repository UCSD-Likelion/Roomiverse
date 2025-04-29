import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#95AAFF",
    },
    secondary: {
      main: "#FF6F61",
    },
    text: {
      primary: "#4A4C54",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

export default theme;
