import { ICoordinateTracker } from "../components/imagePartPicker/services/ICoordinateTracker";
import { EnumType } from "../components/imagePartPicker/types/EnumType";

export interface IHaveCoordinateTracker<T extends EnumType> {
  coordinateTracker: ICoordinateTracker<T>;
}
