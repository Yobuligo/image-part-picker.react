import { useState } from "react";
import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { Title } from "./features/title/Title";
import { Part } from "./types/Part";

const App: React.FC = () => {
  const [title, setTitle] = useState("");
  return (
    <AppContextProvider>
      <Title title={title} />
      <Image
        config={{
          designMode: true,
        }}
        enumName={"Part"}
        enumType={Part}
        gridConfig={(grid) => {
          return grid;
        }}
        onSelect={(part) => {
          setTitle(`${Part[part]} was clicked`);
        }}
      />
    </AppContextProvider>
  );
};

export default App;
