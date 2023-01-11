import { AppBar, Grid, Typography } from "@mui/material";
import React from "react";
import { UploadModule } from "../../../../upload/upload-module";

export class HeaderComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <AppBar style={{ padding: "0.5%" }}>
        <Grid container direction="row" alignItems="center">
          <Grid xs={2}>
            <Typography component="h1" variant="h4" marginLeft="5%">
              Private Cloud
            </Typography>
          </Grid>
          <Grid>
            <UploadModule />
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
