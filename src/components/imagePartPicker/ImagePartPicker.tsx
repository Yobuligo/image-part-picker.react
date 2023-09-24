import { IImagePartPickerProps } from "./IImagePartPickerProps";
import { ImagePartPickerContext } from "./context/ImagePartPickerContext";
import { ImagePartGrid } from "./features/imagePartGrid/ImagePartGrid";
import { useGrid } from "./hooks/useGrid";
import { useValue } from "./hooks/useValue";
import { EnumType } from "./types/EnumType";

export function ImagePartPicker<T extends EnumType>(
  props: IImagePartPickerProps<T>
) {
  return (
    <ImagePartPickerContext.Provider
      value={{
        gridWidth: useValue(props.gridWidth),
        gridHeight: useValue(props.gridHeight),
        grid: useGrid(props.gridWidth, props.gridHeight, false),
      }}
    >
      <ImagePartGrid
        gridConfig={props.gridConfig}
        image={props.image}
        onSelect={props.onSelect}
      />
    </ImagePartPickerContext.Provider>
  );
}
