import { IHaveConfig } from "../../types/IHaveConfig";

export interface IImageProps extends IHaveConfig {
  options: any;
  onSelect: (part: any) => void;
}
