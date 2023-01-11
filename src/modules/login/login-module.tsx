import { Grid } from "@mui/material";
import React from "react";
import { LoginUi } from "./ui/login-ui";

export class LoginModule extends React.Component {
  render(): React.ReactNode {
    return (
      <Grid>
        <LoginUi />;
      </Grid>
    );
  }
}
