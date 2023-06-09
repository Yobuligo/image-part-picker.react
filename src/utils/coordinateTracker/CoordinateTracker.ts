import { EnumType } from "../../types/EnumType";
import { ICoordinate } from "../../types/ICoordinate";
import { ICoordinateTracker } from "./ICoordinateTracker";

export class CoordinateTracker<T extends EnumType>
  implements ICoordinateTracker<T>
{
  private coordinates = new Map<ICoordinate, T[keyof T]>();

  add(part: T[keyof T], coordinate: ICoordinate): void {
    this.coordinates.set(coordinate, part);
  }

  findByPart(part: T[keyof T]): ICoordinate[] {
    const coordinates: ICoordinate[] = [];
    this.coordinates.forEach((value, coordinate) => {
      if (value === part) {
        coordinates.push(coordinate);
      }
    });
    return coordinates;
  }

  findByCoordinate(coordinate: ICoordinate): T[keyof T] | undefined {
    return this.coordinates.get(coordinate);
  }

  remove(coordinate: ICoordinate): void {
    this.coordinates.delete(coordinate);
  }
}
