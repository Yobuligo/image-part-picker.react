import { ICoordinate } from "./ICoordinate";

export interface IGrid<T> {
  find(coordinate: ICoordinate): T | undefined;
  set(coordinate: ICoordinate, setter: (previous: T | undefined) => T): void;
  setAll(value: T): void;
}
