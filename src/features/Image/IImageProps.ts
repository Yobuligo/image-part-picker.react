import { IGridConfig } from "../../types/IGridConfig";
import { IHaveConfig } from "../../types/IHaveConfig";
import { EnumType } from "../../components/imagePartPicker/types/EnumType";

export interface IImageProps<T extends EnumType> extends IHaveConfig {
  enumType: T;
  enumName: string;
  gridConfig: (grid: IGridConfig<T>) => IGridConfig<T>;
  onSelect: (part: T[keyof T]) => void;
}
