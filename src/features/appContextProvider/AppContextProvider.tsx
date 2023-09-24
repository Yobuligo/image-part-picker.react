import { ImagePartPickerContext } from "../../components/imagePartPicker/context/ImagePartPickerContext";
import { useGrid } from "../../components/imagePartPicker/hooks/useGrid";
import { useValue } from "../../components/imagePartPicker/hooks/useValue";
import { IAppContextProviderProps } from "./IAppContextProviderProps";

export const AppContextProvider: React.FC<IAppContextProviderProps> = (
  props
) => {
  const gridWidth = useValue(20);
  const gridHeight = useValue(20);

  return (
    <ImagePartPickerContext.Provider
      value={{
        gridWidth: gridWidth,
        gridHeight: gridHeight,
        grid: useGrid(gridWidth.value, gridHeight.value, false),
      }}
    >
      {props.children}
    </ImagePartPickerContext.Provider>
  );
};
