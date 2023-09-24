import { ICoordinateTracker } from "../components/imagePartPicker/utils/coordinateTracker/ICoordinateTracker";
import { EnumType } from "../components/imagePartPicker/types/EnumType";

export interface IHaveCoordinateTracker<T extends EnumType> {
  coordinateTracker: ICoordinateTracker<T>;
}
