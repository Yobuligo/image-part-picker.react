import { EnumType } from "../types/EnumType";

class EnumDefault {
  first<T extends EnumType, K extends keyof T>(enumType: T): K {
    for (let key in enumType) {
      if (!parseInt(key)) {
        return key as unknown as K;
      }
    }
    throw new Error("Enum contains now values");
  }

  keys<T extends EnumType, K extends keyof T>(enumType: T): K[] {
    let keys: K[] = [];
    for (let key in enumType) {
      if (!parseInt(key)) {
        keys.push(key as unknown as K);
      }
    }
    return keys;
  }
}

export const Enum = new EnumDefault();
