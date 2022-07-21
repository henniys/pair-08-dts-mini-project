import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout, Movie } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
// logo
import logo from "../assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#141414" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: 25 }} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{ display: "block" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    borderBottom: "solid 2px black",
                  }}
                >
                  <Typography
                    textAlign="start"
                    borderBottom={"solid 2px black"}
                    marginBottom={2}
                  >
                    Home
                  </Typography>
                </Link>
                <Link
                  to="/trending"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    borderBottom: "solid 2px black",
                  }}
                >
                  <Typography
                    textAlign="start"
                    borderBottom={"solid 2px black"}
                    marginBottom={2}
                  >
                    Trending
                  </Typography>
                </Link>
                <Link
                  to="/upcoming"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    borderBottom: "solid 2px black",
                  }}
                >
                  <Typography
                    textAlign="start"
                    borderBottom={"solid 2px black"}
                    marginBottom={2}
                  >
                    Up Coming
                  </Typography>
                </Link>
                <Link
                  to="/nowplaying"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    borderBottom: "solid 2px black",
                  }}
                >
                  <Typography
                    textAlign="start"
                    borderBottom={"solid 2px black"}
                    marginBottom={2}
                  >
                    Now Playing
                  </Typography>
                </Link>
                <Link
                  to="/mylist"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    borderBottom: "solid 2px black",
                  }}
                >
                  <Typography
                    textAlign="start"
                    borderBottom={"solid 2px black"}
                    marginBottom={2}
                  >
                    My List
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Typography textAlign="center">Home</Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/trending"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography textAlign="center">Trending</Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/upcoming"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography textAlign="center">up coming</Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/nowplaying"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography textAlign="center">now playing</Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/mylist"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography textAlign="center">my list</Typography>
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" src="/static/images/avatar/3.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Avatar />
                <Typography textAlign="center">Profil</Typography>
              </MenuItem>
              <MenuItem onClick={onLogout}>
                <Logout />
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography sx={{ m: "10px" }}>
            Welcome {auth.currentUser?.email}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
