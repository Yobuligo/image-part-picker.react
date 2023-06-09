import { ElementChangeObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";

export interface IDesignModeProps<T extends EnumType> {
  options: T;
  refOnActivate: (elementChangeObserver: ElementChangeObserver) => void;
  refOnDeactivate: (elementChangeObserver: ElementChangeObserver) => void;
}
