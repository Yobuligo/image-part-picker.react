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
          designMode: false,
        }}
        enumName={"Part"}
        enumType={Part}
        gridConfig={(grid) => {
          grid.setWidth(20);
          grid.setHeight(20);

          grid.data.set(Part.Arms, [
            { x: 13, y: 4 },
            { x: 13, y: 5 },
            { x: 13, y: 6 },
            { x: 14, y: 6 },
            { x: 14, y: 5 },
            { x: 14, y: 4 },
            { x: 15, y: 5 },
            { x: 15, y: 4 },
            { x: 15, y: 3 },
            { x: 16, y: 4 },
            { x: 16, y: 3 },
            { x: 17, y: 3 },
            { x: 17, y: 2 },
            { x: 18, y: 2 },
            { x: 18, y: 1 },
            { x: 8, y: 6 },
            { x: 8, y: 5 },
            { x: 6, y: 4 },
            { x: 7, y: 4 },
            { x: 7, y: 5 },
            { x: 7, y: 6 },
            { x: 6, y: 6 },
            { x: 6, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 4 },
            { x: 4, y: 4 },
            { x: 4, y: 3 },
            { x: 3, y: 4 },
            { x: 3, y: 3 },
            { x: 2, y: 3 },
            { x: 2, y: 2 },
          ]);

          grid.data.set(Part.Head, [
            { x: 9, y: 1 },
            { x: 9, y: 2 },
            { x: 9, y: 3 },
            { x: 10, y: 3 },
            { x: 11, y: 3 },
            { x: 12, y: 3 },
            { x: 12, y: 2 },
            { x: 11, y: 2 },
            { x: 10, y: 2 },
            { x: 10, y: 1 },
            { x: 11, y: 1 },
            { x: 12, y: 1 },
          ]);

          grid.data.set(Part.Body, [
            { x: 9, y: 8 },
            { x: 9, y: 9 },
            { x: 8, y: 10 },
            { x: 9, y: 10 },
            { x: 10, y: 10 },
            { x: 8, y: 9 },
            { x: 11, y: 10 },
            { x: 12, y: 10 },
            { x: 13, y: 10 },
            { x: 13, y: 9 },
            { x: 12, y: 9 },
            { x: 11, y: 9 },
            { x: 10, y: 9 },
            { x: 10, y: 8 },
            { x: 11, y: 8 },
            { x: 12, y: 8 },
            { x: 13, y: 8 },
          ]);

          grid.data.set(Part.Chest, [
            { x: 9, y: 7 },
            { x: 10, y: 7 },
            { x: 11, y: 7 },
            { x: 12, y: 7 },
            { x: 13, y: 7 },
            { x: 9, y: 6 },
            { x: 10, y: 6 },
            { x: 11, y: 6 },
            { x: 12, y: 6 },
            { x: 12, y: 5 },
            { x: 11, y: 5 },
            { x: 10, y: 5 },
            { x: 9, y: 5 },
          ]);

          grid.data.set(Part.Legs, [
            { x: 8, y: 11 },
            { x: 9, y: 11 },
            { x: 10, y: 11 },
            { x: 11, y: 11 },
            { x: 12, y: 11 },
            { x: 7, y: 11 },
            { x: 7, y: 12 },
            { x: 8, y: 12 },
            { x: 9, y: 12 },
            { x: 10, y: 12 },
            { x: 11, y: 12 },
            { x: 12, y: 12 },
            { x: 12, y: 13 },
            { x: 11, y: 13 },
            { x: 10, y: 13 },
            { x: 10, y: 14 },
            { x: 11, y: 14 },
            { x: 12, y: 14 },
            { x: 12, y: 15 },
            { x: 10, y: 15 },
            { x: 11, y: 15 },
            { x: 10, y: 16 },
            { x: 11, y: 16 },
            { x: 10, y: 17 },
            { x: 11, y: 17 },
            { x: 10, y: 18 },
            { x: 9, y: 18 },
            { x: 9, y: 19 },
            { x: 6, y: 13 },
            { x: 7, y: 13 },
            { x: 8, y: 13 },
            { x: 9, y: 13 },
            { x: 6, y: 14 },
            { x: 7, y: 14 },
            { x: 5, y: 14 },
            { x: 5, y: 15 },
            { x: 6, y: 15 },
            { x: 4, y: 15 },
            { x: 4, y: 16 },
            { x: 5, y: 16 },
            { x: 3, y: 16 },
          ]);
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
