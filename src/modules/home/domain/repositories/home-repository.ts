export abstract class HomeRepository {
  abstract listImage(
    search: string | undefined,
    page: number,
    limit: number
  ): Promise<any>;
}
