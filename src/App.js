import { Header } from "./components/Header";
import { UUIDGenerator } from "./components/UUIDGenerator";

export const App = () => {
  return (
    <>
      <Header
        title="UUID Generator"
        subTitle="Simple online UUID generator tool"
      />
      <UUIDGenerator />
    </>
  );
};
