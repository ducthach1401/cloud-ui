import { Grid } from "@mui/material";
import React from "react";
import { LoginUi } from "./app/ui/login-ui";

export class LoginModule extends React.Component {
  componentDidMount(): void {
    document.title = "Login";
  }

  render(): React.ReactNode {
    return (
      <Grid>
        <LoginUi />;
      </Grid>
    );
  }
}
