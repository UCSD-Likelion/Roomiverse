import { useState, useContext } from "react";
import {
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../context/AuthProvider";

const navItems = ["Home", "About", "Contact"];
const settings = ["Profile", "Logout"];

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { logout, user, loading } = useContext(AuthContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (setting) => {
    if (setting === "Logout") {
      logout();
    }
    handleCloseUserMenu();
  };

  const handleToggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#FF6F61",
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
              size="large"
              aria-label="menu"
              onClick={handleToggleDrawer(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleToggleDrawer(false)}
            >
              <Box sx={{ width: 250 }}>
                <IconButton onClick={handleToggleDrawer(false)}>
                  <CloseIcon />
                </IconButton>
                <List>
                  {navItems.map((item) => (
                    <ListItem
                      button
                      key={item}
                      onClick={handleToggleDrawer(false)}
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <IconButton
              onClick={handleLogoClick}
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
            {user ? (
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
                    color: "#ff6f61",
                    borderRadius: "2rem",
                    backgroundColor: "white",
                    px: 4,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#ff6f61", color: "white" },
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  href="register"
                  sx={{
                    color: "#ff6f61",
                    borderRadius: "2rem",
                    backgroundColor: "white",
                    px: 3,
                    fontWeight: "bold",
                    fontSize: "1rem",
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
