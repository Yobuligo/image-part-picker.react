import { AppContext } from "../../context/AppContext";
import { useValue } from "../../hooks/useValue";
import { IAppContextProviderProps } from "./IAppContextProviderProps";

export const AppContextProvider: React.FC<IAppContextProviderProps> = (
  props
) => {
  return (
    <AppContext.Provider
      value={{
        gridWidth: useValue(props.gridWidth),
        gridHeight: useValue(props.gridHeight),
        grid: useValue([]),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
