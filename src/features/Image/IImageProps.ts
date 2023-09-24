import { ReactNode } from "react";
import { EnumType } from "../../components/imagePartPicker/types/EnumType";
import { IGridConfig } from "../../components/imagePartPicker/types/IGridConfig";
import { IHaveConfig } from "../../types/IHaveConfig";

export interface IImageProps<T extends EnumType> extends IHaveConfig {
  enumType: T;
  enumName: string;
  image: ReactNode;
  gridConfig: (grid: IGridConfig<T>) => IGridConfig<T>;
  onSelect: (part: T[keyof T]) => void;
}
