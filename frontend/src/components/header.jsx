import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Skeleton,
  Tooltip,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../context/AuthProvider";

const settings = ["Profile", "Logout"];

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "100vw",
    maxWidth: "100vw",
    margin: 0,
    left: "0 !important",
    right: "0 !important",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent dark
    color: "#fff",
    padding: theme.spacing(1, 0),
    boxShadow: "none",
    borderRadius: "0",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // subtle hover effect
    fontWeight: 600,
  },
  fontSize: "1.1rem",
  width: "100%",
  padding: theme.spacing(2),
}));

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElLogo, setAnchorElLogo] = useState(null);
  const { logout, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenLogoMenu = (event) => {
    setAnchorElLogo(event.currentTarget);
  };
  const handleCloseLogoMenu = () => {
    setAnchorElLogo(null);
  };

  const handleMenuClick = (setting) => {
    if (setting === "Logout") {
      logout();
      navigate("/login");
    }
    handleCloseUserMenu();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(#8FADEB, #9CB3DB)",
        top: 0,
        left: 0,
        right: 0,
        minHeight: "60px",
      }}
    >
      <Container maxWidth>
        <Toolbar disableGutters>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              left: "-16px",
            }}
          >
            <IconButton
              onClick={handleOpenLogoMenu}
              sx={{ padding: 0, display: "flex", alignItems: "center" }}
              disableRipple
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: 40,
                  height: 40,
                  transform: "translateY(-5px)",
                  cursor: "pointer",
                  marginLeft: 5,
                }}
              />
              <Typography
                variant="h5"
                sx={{ color: "white", marginLeft: 1, fontWeight: "bold" }}
              >
                Roomiverse
              </Typography>
            </IconButton>
            <StyledMenu
              anchorEl={anchorElLogo}
              open={!!anchorElLogo}
              onClose={handleCloseLogoMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <StyledMenuItem onClick={handleCloseLogoMenu}>
                Home
              </StyledMenuItem>
              <StyledMenuItem onClick={handleCloseLogoMenu}>
                Find Roomies
              </StyledMenuItem>
              <StyledMenuItem onClick={handleCloseLogoMenu}>
                My Preferences
              </StyledMenuItem>
            </StyledMenu>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 0,
              position: "absolute",
              right: "0px",
            }}
          >
            {loading ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Skeleton
                  width={50}
                  height={70}
                  sx={{ borderRadius: "100%" }}
                />
                <Skeleton width={150} height={40} />
              </Box>
            ) : user ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Profile" />
                  </IconButton>
                </Tooltip>
                <Typography variant="h6" sx={{ color: "white", marginLeft: 1 }}>
                  {user.name}
                </Typography>
                <Menu
                  sx={{ mt: "5px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleMenuClick(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                  variant="contained"
                  href="/login"
                  sx={{
                    color: "#164863",
                    borderRadius: "2rem",
                    backgroundColor: "white",
                    px: 4,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#95AAFF", color: "white" },
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  href="register"
                  sx={{
                    color: "#164863",
                    borderRadius: "2rem",
                    backgroundColor: "white",
                    px: 3,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#95AAFF", color: "white" },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
