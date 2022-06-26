import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </div>
    </header>  );
}
export default App;
