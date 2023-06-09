import { ICoordinate } from "./ICoordinate";

export interface IActivatable {
  onActivate?: (coordinate: ICoordinate) => void;
  onDeactivate?: (coordinate: ICoordinate) => void;
}
