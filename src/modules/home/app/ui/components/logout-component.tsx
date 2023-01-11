import { Button, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import React from "react";
import { deleteCookie } from "../../../../../core/helpers/utils";
import { Cookie } from "../../../../../core/enums/cookies";
import { LogoutUsecase } from "../../../domain/usecases/logout-usecase";

export class LogoutComponent extends React.Component<any, any> {
  private readonly logoutUsecase = new LogoutUsecase();

  async logout() {
    await this.logoutUsecase.call();
    deleteCookie(Cookie.AccessToken);
    window.location.reload();
  }

  render(): React.ReactNode {
    return (
      <IconButton color="primary" aria-label="logout" component="label">
        <Logout style={{ color: "white" }} fontSize="large" />
        <Button hidden onClick={() => this.logout()} />
      </IconButton>
    );
  }
}
