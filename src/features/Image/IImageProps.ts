import { IHaveConfig } from "../../types/IHaveConfig";
import { EnumType } from "./../../types/EnumType";

export interface IImageProps<T extends EnumType> extends IHaveConfig {
  options: T;
  onSelect: <K extends keyof T>(part: T[K]) => void;
}
