import { EnumType } from "./types/EnumType";

export interface IImagePartPickerProps<T extends EnumType> {
  onSelect?: (part: T[keyof T]) => void;
}
