import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function throwError(errorMessage?: string): never {
  throw new Error(errorMessage);
}

export function setCookie(key: string, value: string): void {
  document.cookie = `${key}=${value}`;
}

export function getCookie(key: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);
  if (parts.length === 2) {
    const cookie = parts.pop();
    if (!cookie) {
      return cookie;
    }
    return cookie.split(";").shift();
  }
}

export function deleteCookie(key: string) {
  document.cookie = key + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function notification(
  icon: SweetAlertIcon,
  title: string | undefined,
  text: string | undefined,
  timer: number | undefined
) {
  const swal = withReactContent(Swal);
  swal.fire({
    icon: icon,
    title: title,
    text: text,
    timer: timer,
  });
}
