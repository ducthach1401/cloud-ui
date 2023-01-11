import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LoginUsecase } from "../domain/usecases/login-usecase";

export class LoginUi extends React.Component<any, any> {
  private readonly loginUsecase: LoginUsecase = new LoginUsecase();
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render(): React.ReactNode {
    return (
      <ThemeProvider theme={createTheme()}>
        <Container>
          <CssBaseline>
            <Grid container justifyContent="center" paddingTop="7%">
              <Grid container item xs={4} direction="column">
                <Grid>
                  <Typography component="h1" variant="h4" textAlign="center">
                    Private Cloud
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={(event) =>
                      this.setState({ username: event.target.value })
                    }
                  />
                </Grid>
                <Grid>
                  <TextField
                    margin="normal"
                    fullWidth
                    required
                    id="password"
                    label="password"
                    name="password"
                    autoComplete="password"
                    type="password"
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </Grid>
                <Grid marginTop="10px" textAlign="center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{ width: "40%" }}
                    onClick={() =>
                      this.loginUsecase.call(
                        this.state.username,
                        this.state.password
                      )
                    }
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CssBaseline>
        </Container>
      </ThemeProvider>
    );
  }
}