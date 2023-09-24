import { EnumType } from "../types/EnumType";
import { ICoordinate } from "../types/ICoordinate";
import { ICoordinateTracker } from "./ICoordinateTracker";

export class CoordinateTracker<T extends EnumType>
  implements ICoordinateTracker<T>
{
  private coordinates = new Map<string, T[keyof T]>();

  add(part: T[keyof T], coordinate: ICoordinate): void {
    this.coordinates.set(this.fromCoordinate(coordinate), part);
  }

  fill(data: Map<T[keyof T], ICoordinate[]>): void {
    data.forEach((coordinates, key) =>
      coordinates.forEach((coordinate) => this.add(key, coordinate))
    );
  }

  findAll(): Map<T, ICoordinate[]> {
    const map = new Map<T, ICoordinate[]>();
    this.coordinates.forEach((value, serializedCoordinate) => {
      const coordinates = map.get(value);
      if (coordinates === undefined) {
        map.set(value, [this.toCoordinate(serializedCoordinate)]);
      } else {
        coordinates.push(this.toCoordinate(serializedCoordinate));
      }
    });
    return map;
  }

  findByPart(part: T[keyof T]): ICoordinate[] {
    const coordinates: ICoordinate[] = [];
    this.coordinates.forEach((value, coordinate) => {
      if (value === part) {
        coordinates.push(this.toCoordinate(coordinate));
      }
    });
    return coordinates;
  }

  findByCoordinate(coordinate: ICoordinate): T[keyof T] | undefined {
    return this.coordinates.get(this.fromCoordinate(coordinate));
  }

  remove(coordinate: ICoordinate): void {
    this.coordinates.delete(this.fromCoordinate(coordinate));
  }

  private fromCoordinate(coordinate: ICoordinate): string {
    return `${coordinate.x},${coordinate.y}`;
  }

  private toCoordinate(coordinate: string): ICoordinate {
    const values = coordinate.split(",");
    return { x: +values.at(0)!, y: +values.at(1)! };
  }
}
