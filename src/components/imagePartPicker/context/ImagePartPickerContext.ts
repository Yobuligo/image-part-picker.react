import { createContext } from "react";
import { IImagePartPickerContext } from "./IImagePartPickerContext";

export const ImagePartPickerContext = createContext<IImagePartPickerContext>(
  null!
);
