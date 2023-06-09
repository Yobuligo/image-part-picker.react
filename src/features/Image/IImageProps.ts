import { ICoordinate } from "../../types/ICoordinate";
import { IHaveConfig } from "../../types/IHaveConfig";
import { EnumType } from "./../../types/EnumType";

export interface IImageProps<T extends EnumType> extends IHaveConfig {
  gridData: Map<any, ICoordinate[]>;
  options: T;
  onSelect: (part: T[keyof T]) => void;
}
