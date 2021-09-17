import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={() => logout()}>
        Signout
      </Button>
    </div>
  );
}

export default LogoutButton;
