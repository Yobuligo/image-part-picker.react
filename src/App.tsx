import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { ICoordinate } from "./types/ICoordinate";
import { Part } from "./types/Part";

const App: React.FC = () => {
  const gridData: Map<Part, ICoordinate[]> = new Map();
  gridData.set(Part.Head, []);

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
