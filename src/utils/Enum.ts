import { EnumType } from "../types/EnumType";

class EnumDefault {
  first<T extends EnumType>(enumType: T): T[keyof T] {
    for (let key in enumType) {
      if (!parseInt(key)) {
        return key as T[keyof T];
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

  toText<T extends EnumType>(enumType: T, key: T[keyof T]): T[keyof T] {
    return enumType[key];
  }
}

export const Enum = new EnumDefault();
