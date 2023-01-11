import { HomeRepository } from "../../domain/repositories/home-repository";
import { HomeService } from "../services/home-service";

export class HomeRepositoryImpl extends HomeRepository {
  private readonly homeService: HomeService = new HomeService();

  async listImage(
    search: string | undefined,
    page: number,
    limit: number
  ): Promise<any> {
    return await this.homeService.list(search, page, limit);
  }
  async upload(file: any): Promise<void> {
    await this.homeService.upload(file);
  }
}
