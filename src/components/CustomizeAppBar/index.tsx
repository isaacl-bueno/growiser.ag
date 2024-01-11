"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import OutDoor from './OutDoor';
import { TextBox } from "./styles";

function CustomizeAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ height: '1080px', }}>
      {/* Background Overlay */}
      <div style={{ position: 'absolute', zIndex: '1', width: '100%', height: '950px', backgroundColor: '#00384E', opacity: "0.4" }}></div>

      {/* Background Image */}
      <img
        style={{ position: 'absolute', zIndex: '0', width: '100%', height: '950px' }}
        src="/assets/imagemback2.jpg"
        alt="background"
      />

      {/* Logo */}
      <div style={{
        position: "fixed",
        display: 'flex',
        zIndex: '5',
        width: "100%",
        height: "50px",
        justifyContent: "center",
      }}>
        <div style={{
          display: 'flex',
          zIndex: '5',
          width: "1240px",
          height: "50px",
          margin: "auto="
        }}>
          <img
            src="/assets/logogwtransparente.png"
            width={140}
            height={50}
            alt="logo"
          />
        </div>
      </div>

      {/* App Bar */}
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', zIndex: '3' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Menu Icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* Add menu items here */}
              </Menu>
            </Box>

            {/* Logo and Title */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            </Typography>

            {/* Other Items (if needed) */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '2rem' }}>
              {/* Add other items here */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* TextBox with OutDoor component */}
      <TextBox>
        <OutDoor />
      </TextBox>
    </Box>
  );
}

export default CustomizeAppBar;
