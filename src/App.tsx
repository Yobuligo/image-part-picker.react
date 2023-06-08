import { Image } from "./features/Image/Image";
import { Part } from "./types/Part";

const App: React.FC = () => {
  return (
    <>
      <Image
        config={{ designMode: true, gridSize: { width: 20, height: 20 } }}
        options={Part}
        onSelect={() => {}}
      />
    </>
  );
};

export default App;
