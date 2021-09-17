import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography, makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    name: {
      marginRight: theme.spacing(2),
    },
    avatar: {
      marginRight: theme.spacing(2),
    },
    root: {
      display: "flex",
    },
  };
});

function LogoutButton() {
  const classes = useStyles();
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    isAuthenticated && (
      <div className={classes.root}>
        <Typography className={classes.name}>{user.name}</Typography>
        <Avatar src={user.picture} className={classes.avatar} />
        <Button variant="contained" color="secondary" onClick={() => logout()}>
          Signout
        </Button>
      </div>
    )
  );
}

export default LogoutButton;
