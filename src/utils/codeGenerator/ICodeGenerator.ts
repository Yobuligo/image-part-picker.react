import { EnumType } from "../../components/imagePartPicker/types/EnumType";
import { ICoordinateTracker } from "../../components/imagePartPicker/services/ICoordinateTracker";

export interface ICodeGenerator<T extends EnumType> {
  generate(
    coordinateTracker: ICoordinateTracker<T>,
    gridWidth: number,
    gridHeight: number
  ): string;
}
