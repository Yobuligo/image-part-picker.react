import { ICoordinate } from "../components/imagePartPicker/types/ICoordinate";

export interface IActivatable {
  onActivate?: (coordinate: ICoordinate) => void;
  onClick: (coordinate: ICoordinate) => void;
  onDeactivate?: (coordinate: ICoordinate) => void;
}
