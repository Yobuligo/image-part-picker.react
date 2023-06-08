import { Image } from "./components/Image/Image";

const App: React.FC = () => {
  return (
    <>
      <Image config={{ devMode: false, size: { x: 20, y: 20 } }} />
    </>
  );
};

export default App;
