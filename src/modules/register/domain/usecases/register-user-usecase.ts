import { RegisterRepositoryImpl } from "../../data/repositories/register-repository-impl";

export class RegisterUserUsecase {
  private readonly registerRepository = new RegisterRepositoryImpl();

  async call(name: string, username: string, password: string): Promise<any> {
    return await this.registerRepository.register(name, username, password);
  }
}
