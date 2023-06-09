import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { ICoordinate } from "./types/ICoordinate";
import { Part } from "./types/Part";

const App: React.FC = () => {
  const gridData: Map<Part, ICoordinate[]> = new Map();
  gridData.set(Part.Head, [
    [9, 1],
    [10, 1],
    [11, 1],
    [12, 1],
    [9, 2],
    [10, 2],
    [11, 2],
    [12, 2],
    [9, 3],
    [10, 3],
    [11, 3],
    [12, 3],
  ]);

  return (
    <AppContextProvider gridWidth={20} gridHeight={20}>
      <Image
        config={{
          designMode: true,
        }}
        options={Part}
        gridData={gridData}
        onSelect={(part) => {
          switch (part) {
            case Part.Head: {
              console.log(`Head was clicked`);
              break;
            }

            case Part.Arms: {
              console.log(`Arms was clicked`);
            }
          }
        }}
      />
    </AppContextProvider>
  );
};

export default App;
