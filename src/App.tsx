import { useState } from "react";
import { ReactComponent as PersonImage } from "./assets/person.svg";
import { ImagePartPicker } from "./components/imagePartPicker/ImagePartPicker";
import { Image } from "./features/Image/Image";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { Title } from "./features/title/Title";
import { Part } from "./types/Part";

const App: React.FC = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <AppContextProvider>
        <Title title={title} />
        <Image
          config={{
            designMode: true,
          }}
          enumName={"Part"}
          enumType={Part}
          image={<PersonImage style={{ width: "30rem", height: "auto" }} />}
          gridConfig={(grid) => grid}
          onSelect={(part) => {
            setTitle(`${Part[part]} was clicked`);
          }}
        />
      </AppContextProvider>

      <ImagePartPicker<typeof Part>
        gridConfig={(grid) => {
          grid.setWidth(20);
          grid.setHeight(20);

          grid.data.set(Part.Head, [
            { x: 8, y: 0 },
            { x: 9, y: 0 },
            { x: 13, y: 2 },
          ]);
          grid.data.set(Part.LeftArm, [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 6, y: 3 },
          ]);
          return grid;
        }}
        gridHeight={20}
        gridWidth={20}
        image={<PersonImage style={{ width: "30rem", height: "auto" }} />}
        onSelect={(part) => {
          switch (part) {
            case Part.Body: {
              // ...
            }
          }
        }}
      />
    </>
  );
};

export default App;
