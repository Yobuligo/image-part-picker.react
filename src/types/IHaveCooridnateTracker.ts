import { ICoordinateTracker } from "../utils/coordinateTracker/ICoordinateTracker";
import { EnumType } from "./EnumType";

export interface IHaveCoordinateTracker<T extends EnumType> {
  coordinateTracker: ICoordinateTracker<T>;
}
