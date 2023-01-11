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
import { notification } from "../../../../core/helpers/utils";
import { RegisterUserUsecase } from "../../domain/usecases/register-user-usecase";

export class RegisterUi extends React.Component<any, any> {
  private readonly registerUserUsecase = new RegisterUserUsecase();
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
    };
  }

  async register(name: string, username: string, password: string) {
    const token = await this.registerUserUsecase.call(name, username, password);
    if (token.error_code) {
      return notification(
        "error",
        "Register Failed!",
        token.error_message,
        1000
      );
    }
    window.location.href = "/login";
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
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
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
                      this.register(
                        this.state.name,
                        this.state.username,
                        this.state.password
                      )
                    }
                  >
                    Register
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
