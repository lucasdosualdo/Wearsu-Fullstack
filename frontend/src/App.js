import Home from "./pages/Home";
import { ModalsProvider } from "./contexts/ModalsContext";

function App() {
  return (
    <>
      <ModalsProvider>
        <Home />
      </ModalsProvider>
    </>
  );
}

export default App;
