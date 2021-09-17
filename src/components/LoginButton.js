import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import React from "react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => loginWithRedirect()}
        >
          Sign In
        </Button>
      </div>
    )
  );
}

export default LoginButton;
