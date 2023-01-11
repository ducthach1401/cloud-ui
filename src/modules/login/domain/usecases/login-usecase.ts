import { setCookie } from "../../../../core/helpers/utils";
import { LoginRepositoryImpl } from "../../data/repositories/login-repository-impl";

export class LoginUsecase {
  private readonly loginRepository: LoginRepositoryImpl =
    new LoginRepositoryImpl();

  async call(username: string, password: string): Promise<void> {
    const token = await this.loginRepository.login(username, password);
    setCookie("access_token", token.access_token);
    document.location.href = "/";
  }
}
