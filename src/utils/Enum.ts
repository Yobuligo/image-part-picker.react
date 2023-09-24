import { EnumType } from "../components/imagePartPicker/types/EnumType";

class EnumDefault {
  first<T extends EnumType>(enumType: T): T[keyof T] {
    for (let key in enumType) {
      if (this.isKey(key)) {
        return key as T[keyof T];
      }
    }
    throw new Error("Enum contains now values");
  }

  keys<T extends EnumType>(enumType: T): (keyof T)[] {
    let keys: (keyof T)[] = [];
    for (let key in enumType) {
      if (this.isKey(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  toText<T extends EnumType>(enumType: T, key: T[keyof T]): T[keyof T] {
    return enumType[key];
  }

  private isKey(key: string): boolean {
    return !parseInt(key) && key !== "0";
  }
}

export const Enum = new EnumDefault();
