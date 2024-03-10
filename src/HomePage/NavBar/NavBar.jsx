import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "/handyjobslogo.jpg";
import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const pages = [
  { title: "Home", link: "" },
  { title: "All Jobs", link: "all-jobs" },
  { title: "Blogs", link: "blogs" },
];

const settings = [
  { title: "Add Job", link: "add-job" },
  { title: "My Jobs", link: "my-jobs" },
  { title: "Applied Jobs", link: "applied-jobs" },
];

function NavBar(props) {
  const { window } = props;
  const { user, logOut } = useAuth();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async () => {
    const res = await logOut();
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {pages.map((page) => (
          <Link key={page.title} to={`/${page.link}`}>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                mx: "auto",
              }}
            >
              {page.title}
            </Button>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar component="nav" position="sticky" sx={{ background: "inherit" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={logo} alt="logo" style={{ width: 150, height: 70 }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <img src={logo} alt="logo" style={{ width: 150, height: 70 }} />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                gap: 18,
              },
            }}
          >
            {pages.map((page) => (
              <NavLink key={page.title} to={`/${page.link}`}>
                <Button
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: 18,
                  }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={user?.displayName}>
              {user ? (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{
                      width: { sx: 50, sm: 55 },
                      height: { sx: 40, sm: 50 },
                    }}
                    alt={user?.displayName}
                    src={user?.photoURL}
                  />
                </IconButton>
              ) : (
                <Link to="SignIn">
                  <Button
                    sx={{ fontSize: 18, color: "black" }}
                    variant="outlined"
                  >
                    Login
                  </Button>
                </Link>
              )}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={`/${setting.link}`}>{setting.title}</Link>
                </MenuItem>
              ))}
              {user && <Button onClick={handleLogout}>Logout</Button>}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 200,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
}
export default NavBar;
