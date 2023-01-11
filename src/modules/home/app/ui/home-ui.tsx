import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, Grid } from "@mui/material";
import React from "react";
import { HeaderComponent } from "./components/header-component";
import { ImageComponent } from "./components/image-component";

export class HomeUi extends React.Component {
  render(): React.ReactNode {
    return (
      <ThemeProvider theme={createTheme()}>
        <HeaderComponent />
        <Container>
          <Grid container>
            <ImageComponent />
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}
