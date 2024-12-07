/**
 * @returns A complete public URL prefixed with the public static assets base
 * path.
 * @param path - path to prepend prefix to
 */
export function publicUrl(path: string): string {
  let baseUrl: string = import.meta.env.BASE_URL;
  if (!baseUrl.endsWith("/")) {
    baseUrl += "/";
  }

  let isBaseAbsolute: boolean = false;
  try {
    new URL(baseUrl);
    isBaseAbsolute = true;
  } catch {
    /* empty */
  }

  return new URL(
    path.replace(/^\/+/, ""),
    isBaseAbsolute ? baseUrl : window.location.origin + baseUrl,
  ).toString();
}
