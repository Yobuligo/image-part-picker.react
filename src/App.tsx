import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { Part } from "./types/Part";

const App: React.FC = () => {
  return (
    <AppContextProvider gridWidth={20} gridHeight={20}>
      <Image
        config={{
          designMode: true,
        }}
        enumType={Part}
        enumName={"Part"}
        gridData={(data) => {
          return data;
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
