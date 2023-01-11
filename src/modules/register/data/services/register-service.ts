import { MethodType } from "../../../../core/enums/method-type";
import { request, throwError } from "../../../../core/helpers/utils";

export class RegisterService {
  private getBaseUrl(): string {
    return process.env.REACT_APP_API_URL ?? throwError();
  }

  async register(
    name: string,
    username: string,
    password: string
  ): Promise<any> {
    const payload = {
      name: name,
      username: username,
      password: password,
    };
    return await request(
      `${this.getBaseUrl()}/user/register`,
      MethodType.Post,
      payload,
      undefined
    );
  }
}
