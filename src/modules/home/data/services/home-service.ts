import { Cookie } from "../../../../core/enums/cookies";
import { getCookie, throwError } from "../../../../core/helpers/utils";

export class HomeService {
  private getBaseUrl(): string {
    return process.env.REACT_APP_API_URL ?? throwError();
  }

  async list(
    search: string | undefined,
    page: number,
    limit: number
  ): Promise<any> {
    const params: any = {
      page: page,
      limit: limit,
    };

    if (search) {
      params.search = search;
    }

    const paramUrl = new URLSearchParams(params);
    const response = await fetch(
      `${this.getBaseUrl()}/cloud?${paramUrl.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie(Cookie.AccessToken)}`,
        },
      }
    );
    return await response.json();
  }

  async upload(file: any): Promise<void> {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${this.getBaseUrl()}/cloud/upload`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${getCookie(Cookie.AccessToken)}`,
      },
    });
    await response.json();
  }

  async logout(): Promise<void> {
    const response = await fetch(`${this.getBaseUrl()}/auth/logout`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookie(Cookie.AccessToken)}`,
      },
    });
    await response.json();
  }
}
