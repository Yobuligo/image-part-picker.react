import { ReactNode } from "react";
import { EnumType } from "../../types/EnumType";
import { IGridConfig } from "../../types/IGridConfig";

export interface IImagePartGridProps<T extends EnumType> {
  image: ReactNode;
  gridConfig: (grid: IGridConfig<T>) => IGridConfig<T>;
  onSelect?: (part: T[keyof T]) => void;
}
