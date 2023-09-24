import { ICoordinate } from "../../types/ICoordinate";

export interface IElementProps {
  readonly coordinate: ICoordinate;
  onClick: (coordinate: ICoordinate) => void;
}
