import { EnumType } from "../../types/EnumType";
import { ICoordinateTracker } from "../coordinateTracker/ICoordinateTracker";

export interface ICodeGenerator<T extends EnumType> {
  generate(
    coordinateTracker: ICoordinateTracker<T>,
    gridWidth: number,
    gridHeight: number
  ): string;
}
