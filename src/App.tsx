import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { Part } from "./types/Part";
import { Enum } from "./utils/Enum";

const App: React.FC = () => {
  return (
    <AppContextProvider gridWidth={20} gridHeight={20}>
      <Image
        config={{
          designMode: true,
        }}
        options={Part}
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
