import { EnumType } from "../types/EnumType";
import { ICoordinate } from "../types/ICoordinate";

export interface ICoordinateTracker<T extends EnumType> {
  add(part: T[keyof T], coordinate: ICoordinate): void;
  fill(data: Map<T[keyof T], ICoordinate[]>): void;
  findAll(): Map<T, ICoordinate[]>;
  findByPart(part: T[keyof T]): ICoordinate[];
  findByCoordinate(coordinate: ICoordinate): T[keyof T] | undefined;
  remove(coordinate: ICoordinate): void;
}
