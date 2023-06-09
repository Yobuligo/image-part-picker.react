import { IHaveConfig } from "../../types/IHaveConfig";
import { EnumType } from "./../../types/EnumType";

export interface IImageProps<T extends EnumType> extends IHaveConfig {
  options: T;
  onSelect: (part: T[keyof T]) => void;
}
