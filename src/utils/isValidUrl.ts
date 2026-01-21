export const isValidUrl = (url: string) => {
  try {
    new URL(url.trim());
    return true;
  } catch {
    return false;
  }
}