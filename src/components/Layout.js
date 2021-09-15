import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { format } from "date-fns";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      backgroundColor: green.A100,
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    dates: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    button: {
      marginRight: theme.spacing(2),
    },
  };
});
export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];

  const handleSignInButton = () => {
    console.log("I am Clicked");
  };
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.dates}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleSignInButton}
          >
            Sign In
          </Button>
          <Typography>Rahul Lokurte</Typography>
          <Avatar src="/rahul-lokurte.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Notely
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
