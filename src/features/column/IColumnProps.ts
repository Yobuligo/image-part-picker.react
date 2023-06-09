import { IActivatable } from "../../types/IActivatable";
import { IHaveConfig } from "../../types/IHaveConfig";

export interface IColumnProps extends IHaveConfig, IActivatable {
  y: number;
}
