import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Home/Footer";
import { EstiloGlobal } from "./styles/main";
import Rotas from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
