import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { ICoordinate } from "./types/ICoordinate";
import { Part } from "./types/Part";
import { Enum } from "./utils/Enum";

const App: React.FC = () => {
  const gridData: Map<Part, ICoordinate[]> = new Map();
  gridData.set(Part.Head, [
    { x: 9, y: 1 },
    { x: 10, y: 1 },
    { x: 11, y: 1 },
    { x: 12, y: 1 },
    { x: 9, y: 2 },
    { x: 10, y: 2 },
    { x: 11, y: 2 },
    { x: 12, y: 2 },
    { x: 9, y: 3 },
    { x: 10, y: 3 },
    { x: 11, y: 3 },
    { x: 12, y: 3 },
  ]);

  return (
    <AppContextProvider gridWidth={20} gridHeight={20}>
      <Image
        config={{
          designMode: false,
        }}
        options={Part}
        gridData={gridData}
        onSelect={(part) => {
          switch (part) {
            case Part.Head: {
              console.log(`Head was ${Enum.toText(Part, Part.Head)} clicked`);
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
