import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Register from "./pages/Register";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import ServicoDetalhe from "./pages/ServicoDetalhe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/servico/:id" element={<ServicoDetalhe />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </>
  );
}
export default App;
