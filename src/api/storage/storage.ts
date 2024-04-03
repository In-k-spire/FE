type KeyType = "accessToken" | "refreshToken";
export class Storage {
  static getItem(key: KeyType) {
    return typeof window !== "undefined" ? localStorage.getItem(key) : null;
  }

  static setItem(key: KeyType, value: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  }
}
