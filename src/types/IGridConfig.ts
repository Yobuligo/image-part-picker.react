import { EnumType } from "./EnumType";
import { ICoordinate } from "./ICoordinate";

export interface IGridConfig<T extends EnumType> {
  data: Map<T[keyof T], ICoordinate[]>;
  setWidth: (width: number) => void;
  setHeight: (width: number) => void;
}
