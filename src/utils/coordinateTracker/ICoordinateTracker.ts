import { EnumType } from "../../types/EnumType";
import { ICoordinate } from "../../types/ICoordinate";

export interface ICoordinateTracker<T extends EnumType> {
  add<K extends keyof T>(part: K, coordinate: ICoordinate): void;
  findByPart<K extends keyof T>(part: K): ICoordinate[];
  remove(coordinate: ICoordinate): void;
}
