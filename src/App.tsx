import { Image } from "./features/Image/Image";

const App: React.FC = () => {
  return (
    <>
      <Image config={{ devMode: true, size: { x: 20, y: 20 } }} />
    </>
  );
};

export default App;
