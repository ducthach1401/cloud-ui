import { RegisterRepository } from "../../domain/repositories/register-repository";
import { RegisterService } from "../services/register-service";

export class RegisterRepositoryImpl extends RegisterRepository {
  private readonly registerService = new RegisterService();

  async register(
    name: string,
    username: string,
    password: string
  ): Promise<any> {
    return await this.registerService.register(name, username, password);
  }
}
