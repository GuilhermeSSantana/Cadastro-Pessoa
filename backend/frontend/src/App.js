import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Registros from "./pages/Registros";

function App() {
  return (
    <header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Registros" element={<Registros />} />
          </Routes>
        </BrowserRouter>
      </div>
    </header>  );
}
export default App;
