import { LoginRepositoryImpl } from "../../data/repositories/login-repository-impl";

export class LoginUsecase {
  private readonly loginRepository = new LoginRepositoryImpl();

  async call(username: string, password: string): Promise<any> {
    return await this.loginRepository.login(username, password);
  }
}
