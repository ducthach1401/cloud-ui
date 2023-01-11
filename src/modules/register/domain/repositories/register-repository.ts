export abstract class RegisterRepository {
  abstract register(
    name: string,
    username: string,
    password: string
  ): Promise<any>;
}
