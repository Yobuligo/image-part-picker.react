import { ICoordinate } from "../../types/ICoordinate";
import { IHaveConfig } from "../../types/IHaveConfig";

export interface IElementProps extends IHaveConfig {
  readonly coordinate: ICoordinate;
  onActivate?: (coordinate: ICoordinate) => void;
  onDeactivate?: (coordinate: ICoordinate) => void;
}
