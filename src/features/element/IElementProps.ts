import { IActivatable } from "../../types/IActivatable";
import { ICoordinate } from "../../components/imagePartPicker/types/ICoordinate";
import { IHaveConfig } from "../../types/IHaveConfig";

export interface IElementProps extends IHaveConfig, IActivatable {
  readonly coordinate: ICoordinate;
}
