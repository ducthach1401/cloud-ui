export abstract class UploadRepository {
  abstract upload(file: any): Promise<void>;
}
