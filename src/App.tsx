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
        options={Part}
        onSelect={() => {}}
      />
    </AppContextProvider>
  );
};

export default App;
