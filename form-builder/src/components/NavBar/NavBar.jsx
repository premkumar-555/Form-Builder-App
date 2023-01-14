import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logout from "../logout/Logout";
import Profile from "../UserProfile/Profile";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { firebase } from "../../Firebase/Config.js";
import CustomizedDialogs from "../Reusable-assets/Modal";
import { logIn, logOut } from "../Redux/User/action.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const navItems = [
  { name: "Create form", path: "create_form" },
  { name: "Profile", path: "profile" },
  { name: "Logout", path: "logout" },
];

function NavBar(props) {
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;
  const navigate = useNavigate();
  const element = React.useRef("");
  const auth = getAuth(firebase);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClicks = (value) => {
    switch (value) {
      case "create_form":
        navigate(item?.path);
        break;
      case "profile":
        setOpen(true);
        element.current = <Profile setOpen={setOpen} />;
        break;
      default:
        setOpen(true);
        element.current = <Logout setOpen={setOpen} signOut={sinOut} />;
        break;
    }
  };
  const sinOut = () => {
    signOut(auth)
      .then((result) => {
        dispatch(logOut());
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />
      <CustomizedDialogs
        open={open}
        setOpen={setOpen}
        element={element.current}
      />
      <AppBar
        component="nav"
        sx={{
          padding: {
            xs: "0 0.5rem",
            sm: "0 1.5rem",
            md: "0 2rem",
            lg: "0 3rem",
          },
          background: "#1c2424",
        }}
      >
        <Toolbar>
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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            FORM BUILDER
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item?.name}
                onClick={() => {
                  handleClicks(item?.path);
                }}
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  ml: "1.5rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                  borderBottom: "2px solid transparent",
                  "&:hover  ": {
                    color: "yellow",
                    borderBottom: "2px solid yellow",
                    borderRadius: "0",
                  },
                }}
              >
                {item?.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
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
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
