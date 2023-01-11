import { HomeRepositoryImpl } from "../../data/repositories/home-repository-impl";

export class LogoutUsecase {
  private readonly homeRepository = new HomeRepositoryImpl();

  async call(): Promise<void> {
    await this.homeRepository.logout();
  }
}
