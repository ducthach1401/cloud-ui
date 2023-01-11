import { HomeRepositoryImpl } from "../../data/repositories/home-repository-impl";

export class GetImageListUsecase {
  private readonly homeRepository: HomeRepositoryImpl =
    new HomeRepositoryImpl();

  async call(
    search: string | undefined,
    page: number,
    limit: number
  ): Promise<any> {
    return await this.homeRepository.listImage(search, page, limit);
  }
}
