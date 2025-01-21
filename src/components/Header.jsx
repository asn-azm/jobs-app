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

  const menuItems = (
    <List>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Jobs" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Add Job" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="sticky" className="appBar">
        <Toolbar className="toolbar">
          <WorkIcon fontSize="large" className="logoIcon" />
          <Typography variant="h6" className="typography">
            JobHive
          </Typography>
          {!isSmallScreen && (
            <div className="navButtons">
              <Link to="/" color="white">
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/jobs" color="inherit">
                <Button color="inherit">Jobs</Button>
              </Link>
              <Link to="/add-job" color="inherit">
                <Button color="inherit">Add Job</Button>
              </Link>
              {/* <Button  color="inherit">Home</Button>
              <Button color="inherit">Jobs</Button>
              <Button color="inherit">Add Job</Button> */}
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
