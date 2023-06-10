import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { Part } from "./types/Part";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Image
        config={{
          designMode: true,
        }}
        enumName={"Part"}
        enumType={Part}
        gridData={(grid) => {
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
