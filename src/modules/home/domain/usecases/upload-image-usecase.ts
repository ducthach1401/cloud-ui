import { HomeRepositoryImpl } from "../../data/repositories/home-repository-impl";

export class UploadImageUsecase {
  private readonly homeRepository = new HomeRepositoryImpl();

  async call(file: any): Promise<void> {
    await this.homeRepository.upload(file);
  }
}
