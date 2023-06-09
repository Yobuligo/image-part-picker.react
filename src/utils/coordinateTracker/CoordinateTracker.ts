import { EnumType } from "../../types/EnumType";
import { ICoordinate } from "../../types/ICoordinate";
import { ICoordinateTracker } from "./ICoordinateTracker";

export class CoordinateTracker<T extends EnumType>
  implements ICoordinateTracker<T>
{
  private coordinates = new Map<ICoordinate, keyof T>();

  add<K extends keyof T>(part: K, coordinate: ICoordinate): void {
    this.coordinates.set(coordinate, part);
  }

  findByPart<K extends keyof T>(part: K): ICoordinate[] {
    const coordinates: ICoordinate[] = [];
    this.coordinates.forEach((value, coordinate) => {
      if (value === part) {
        coordinates.push(coordinate);
      }
    });
    return coordinates;
  }

  remove(coordinate: ICoordinate): void {
    this.coordinates.delete(coordinate);
  }
}
