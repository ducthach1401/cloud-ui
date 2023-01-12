import { Grid } from "@mui/material";
import React from "react";
import { RegisterUi } from "./app/ui/register-ui";

export class RegisterModule extends React.Component {
  componentDidMount(): void {
    document.title = "Register";
  }

  render(): React.ReactNode {
    return (
      <Grid>
        <RegisterUi />;
      </Grid>
    );
  }
}
