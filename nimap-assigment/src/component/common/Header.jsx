import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button";
import TextField from "./TextField";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { name: "Popular", path: "/" },
  { name: "Top Rated", path: "/top-rated" },
  { name: "Upcoming", path: "/upcoming" },
];

const Header = ({search, handleSearchChange}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MovieDb
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <Link key={item.name} to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          px: { xs: 2, sm: 5, lg: 10 }, 
          py: 2,
          bgcolor: "#34393F",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#fff",
            }}
          >
            MovieDb
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.path} style={{ textDecoration: "none" }}>
                <Button
                  key={index}
                  sx={{ color: "#989C9E", textTransform: "none", fontSize: "16px" }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <TextField placeholder="Search" size="small" value={search} onChange={handleSearchChange} />
            <Button
              sx={{
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#989C9E",
                textTransform: "none",
              }}
            >
              Search
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default React.memo(Header);
