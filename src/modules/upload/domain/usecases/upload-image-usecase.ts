import { UploadRepositoryImpl } from "../../data/repositories/upload-repository-impl";

export class UploadImageUsecase {
  private readonly uploadRepository = new UploadRepositoryImpl();

  async call(file: any): Promise<void> {
    await this.uploadRepository.upload(file);
  }
}
