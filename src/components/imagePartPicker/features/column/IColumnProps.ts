import { ICoordinate } from "../../types/ICoordinate";

export interface IColumnProps {
  onClick: (coordinate: ICoordinate) => void;
  y: number;
}
