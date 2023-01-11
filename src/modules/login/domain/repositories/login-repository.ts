export abstract class LoginRepository {
  abstract login(username: string, password: string): Promise<any>;
}
