import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <AppBar
      sx={{ 
        backgroundColor: '#FF6F61', 
        width: '100%', 
        margin: 0,
        padding: 0 
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '0 20px' // 좌우 여백 조절
        }}
      >
        {/* 왼쪽: 메뉴 아이콘 + 로고 */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
        </Box>

        {/* 오른쪽: 사용자 정보 (당겨서 위치 조정) */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            minWidth: '150px', // 최소 너비 증가
            justifyContent: 'flex-end',
            marginRight: '40px' // 오른쪽으로 당김
          }}
        >
          <Avatar alt="User Profile" sx={{ mr: 1, width: 36, height: 36 }} />
          <Typography variant="h6" noWrap sx={{ fontSize: '1rem' }}>First Last</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;