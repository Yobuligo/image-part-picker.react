import { IImagePartGridProps } from "./features/imagePartGrid/IImagePartGridProps";
import { EnumType } from "./types/EnumType";

export interface IImagePartPickerProps<T extends EnumType>
  extends IImagePartGridProps<T> {
  gridWidth: number;
  gridHeight: number;
}
