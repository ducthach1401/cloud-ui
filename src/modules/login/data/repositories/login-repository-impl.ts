import { LoginRepository } from "../../domain/repositories/login-repository";
import { LoginService } from "../services/login-service";

export class LoginRepositoryImpl extends LoginRepository {
  private readonly loginService: LoginService = new LoginService();

  async login(username: string, password: string): Promise<any> {
    return await this.loginService.login(username, password);
  }
}
