import { IGrid } from "../types/IGrid";
import { IValue } from "../types/IValue";

export interface IAppContext {
  grid: IGrid<boolean>;
  gridWidth: IValue<number>;
  gridHeight: IValue<number>;
}
