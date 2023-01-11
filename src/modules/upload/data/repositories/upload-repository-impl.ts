import { UploadRepository } from "../../domain/repositories/upload-repository";
import { UploadService } from "../services/upload-service";

export class UploadRepositoryImpl extends UploadRepository {
  private readonly uploadService = new UploadService();

  async upload(file: any): Promise<void> {
    await this.uploadService.upload(file);
  }
}
