import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WorkIcon from "@mui/icons-material/Work";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import {Link} from 'react-router-dom'
import "./Header.css"; // Importing the CSS file

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
  // Menu items inside the drawer
  const menuItems = (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/jobs">
        <ListItemText primary="Jobs" />
      </ListItem>
      <ListItem button component={Link} to="/add-job">
        <ListItemText primary="Add Job" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className="toolbar">
          <WorkIcon fontSize="large" className="logoIcon" />
          <Typography variant="h6" className="typography">
            JobHive
          </Typography>
          {!isSmallScreen && (
            <div className="navButtons">
              <Link to="/">
                <Button color = "inherit" sx={{fontWeight:"bold", fontSize:'15px'}} >Home</Button>
              </Link>
              <Link to="/jobs">
                <Button color="inherit" sx={{fontWeight:"bold", fontSize:'15px'}}>Jobs</Button>
              </Link>
              <Link to="/add-job">
                <Button color="inherit" sx={{fontWeight:"bold", fontSize:'15px'}}>Add Job</Button>
              </Link>
            </div>
          )}
          {isSmallScreen && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              className="menuButton"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            height: 'auto',
            width: '100%',
            backgroundColor: '#9fd3f5'
          }
        }}
      >
        {menuItems}
      </Drawer>
    </>
  );
};

export default Header;
