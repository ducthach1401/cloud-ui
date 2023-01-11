import { getCookie, throwError } from "../../../../core/helpers/utils";

export class UploadService {
  private getBaseUrl(): string {
    return process.env.REACT_APP_URL_API ?? throwError();
  }

  async upload(file: any): Promise<void> {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${this.getBaseUrl()}/cloud/upload`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
    });
    await response.json();
  }
}
