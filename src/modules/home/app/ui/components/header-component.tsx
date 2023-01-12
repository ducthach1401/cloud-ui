import { AppBar, Grid, Link } from "@mui/material";
import React from "react";
import { LogoutComponent } from "./logout-component";
import { UploadComponent } from "./upload-component";

export class HeaderComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <AppBar style={{ padding: "0.5%" }}>
        <Grid container direction="row" alignItems="center">
          <Grid xs={3} textAlign="center">
            <Link
              variant="h4"
              marginLeft="10%"
              href="/"
              style={{ color: "white" }}
              underline="none"
            >
              Private Cloud
            </Link>
          </Grid>
          <Grid xs={4}>
            <UploadComponent />
          </Grid>
          <Grid xs={5} textAlign="right">
            <LogoutComponent />
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
