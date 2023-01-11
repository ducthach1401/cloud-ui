import { AppBar, Typography } from "@mui/material";
import React from "react";

export class HeaderComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <AppBar style={{ padding: "0.5%" }}>
        <Typography component="h1" variant="h4" marginLeft="5%">
          Private Cloud
        </Typography>
      </AppBar>
    );
  }
}
