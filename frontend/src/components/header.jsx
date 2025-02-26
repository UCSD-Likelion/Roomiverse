import * as React from "react";
import {
  AppBar,
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
  Button //added logout button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "/src/assets/images/logo.png";

const navItems = ["Home", "About", "Contact"];
const settings = ["Profile", "Logout"];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

   const handleLogout = () => {
    console.log("User logged out");
    // Redirect or handle logout logic
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
          {/* === SHIFTED RIGHT SECTION: Open Settings & First Last === */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: 0, 
              position: 'absolute', 
              right: '120px'  // <-- Shifted to the left to avoid overlap with Logout button
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Profile" />
              </IconButton>
            </Tooltip>

            <Typography variant="h6" sx={{ color: 'white', marginLeft: 1, marginRight: 1 }}>
              First Last
            </Typography>

            {/* Settings Menu */}
            <Menu
              sx={{ mt: '5px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* === END OF SHIFTED SECTION === */}

          {/* === NEW LOGOUT BUTTON (Most Upper-Right) === */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#FF6F61",
              fontWeight: "bold",
              borderRadius: "30px", // Fully rounded button
              padding: "8px 25px", // Same size as "Alcohol" button
              textTransform: "none",
              position: "absolute",
              right: 16, // Ensure it’s fully aligned to the right
              top: 10, // Position at the top
              "&:hover": { backgroundColor: "#ffdddd" },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
          {/* === END OF NEW LOGOUT BUTTON === */}

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;