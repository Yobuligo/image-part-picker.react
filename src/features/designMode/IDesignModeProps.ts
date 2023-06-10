import { ElementChangeObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";
import { IHaveCoordinateTracker } from "../../types/IHaveCooridnateTracker";

export interface IDesignModeProps<T extends EnumType>
  extends IHaveCoordinateTracker<T> {
  enumName: string;
  enumType: T;
  refOnActivate: (elementChangeObserver: ElementChangeObserver) => void;
  refOnDeactivate: (elementChangeObserver: ElementChangeObserver) => void;
}
