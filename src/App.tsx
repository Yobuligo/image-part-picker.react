import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { Part } from "./types/Part";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Image
        config={{
          designMode: false,
        }}
        enumName={"Part"}
        enumType={Part}
        gridConfig={(grid) => {
          grid.setWidth(20);
          grid.setHeight(20);

          grid.data.set(Part.Head, [
            { x: 9, y: 1 },
            { x: 10, y: 1 },
            { x: 11, y: 1 },
            { x: 12, y: 1 },
            { x: 12, y: 2 },
            { x: 12, y: 3 },
            { x: 11, y: 3 },
            { x: 11, y: 2 },
            { x: 10, y: 2 },
            { x: 10, y: 3 },
            { x: 9, y: 3 },
            { x: 9, y: 2 },
          ]);

          grid.data.set(Part.Arms, [
            { x: 13, y: 6 },
            { x: 13, y: 5 },
            { x: 13, y: 4 },
            { x: 14, y: 6 },
            { x: 14, y: 5 },
            { x: 14, y: 4 },
            { x: 15, y: 5 },
            { x: 15, y: 4 },
            { x: 15, y: 3 },
            { x: 16, y: 3 },
            { x: 16, y: 4 },
            { x: 16, y: 2 },
            { x: 17, y: 2 },
            { x: 17, y: 3 },
            { x: 17, y: 4 },
            { x: 18, y: 2 },
            { x: 18, y: 1 },
          ]);
          return grid;
        }}
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
