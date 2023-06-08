import { EnumType } from "../../types/EnumType";

export interface IDesignModeProps<T extends EnumType> {
  options: T;
}
