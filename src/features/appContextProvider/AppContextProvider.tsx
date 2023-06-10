import { AppContext } from "../../context/AppContext";
import { useGrid } from "../../hooks/useGrid";
import { useValue } from "../../hooks/useValue";
import { IAppContextProviderProps } from "./IAppContextProviderProps";

export const AppContextProvider: React.FC<IAppContextProviderProps> = (
  props
) => {
  const gridWidth = useValue(20);
  const gridHeight = useValue(20);

  return (
    <AppContext.Provider
      value={{
        gridWidth: gridWidth,
        gridHeight: gridHeight,
        grid: useGrid(gridWidth.value, gridHeight.value, false),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
