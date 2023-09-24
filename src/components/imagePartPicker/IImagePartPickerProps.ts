import { EnumType } from "./types/EnumType";
import { IGridConfig } from "./types/IGridConfig";

export interface IImagePartPickerProps<T extends EnumType> {
  gridConfig: (grid: IGridConfig<T>) => IGridConfig<T>;
  onSelect?: (part: T[keyof T]) => void;
}
