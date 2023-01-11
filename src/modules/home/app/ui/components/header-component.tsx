import { AppBar, Grid, Link } from "@mui/material";
import React from "react";
import { UploadComponent } from "./upload-component";

export class HeaderComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <AppBar style={{ padding: "0.5%" }}>
        <Grid container direction="row" alignItems="center">
          <Grid xs={2}>
            <Link
              variant="h4"
              marginLeft="5%"
              href="/"
              style={{ color: "white" }}
              underline="none"
            >
              Private Cloud
            </Link>
          </Grid>
          <Grid>
            <UploadComponent />
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
