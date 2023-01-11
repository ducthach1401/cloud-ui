import { throwError } from "../../../../core/helpers/utils";

export class LoginService {
  private getBaseUrl(): string {
    return process.env.REACT_APP_API_URL ?? throwError();
  }

  async login(username: string, password: string): Promise<any> {
    const response = await fetch(`${this.getBaseUrl()}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
}
