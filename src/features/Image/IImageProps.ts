import { ICoordinate } from "../../types/ICoordinate";
import { IHaveConfig } from "../../types/IHaveConfig";
import { EnumType } from "./../../types/EnumType";

export interface IImageProps<T extends EnumType> extends IHaveConfig {
  gridData: (
    data: Map<T[keyof T], ICoordinate[]>
  ) => Map<T[keyof T], ICoordinate[]>;
  enumType: T;
  enumName: string;
  onSelect: (part: T[keyof T]) => void;
}
