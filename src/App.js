import { Route, Routes } from "react-router-dom";
import Horarios from "./pages/horarios/Horarios";
import Home from "./pages/home/Home";
import NovosFilmes from "./pages/novos/NovosFilmes";
import Eventos from "./pages/eventos/Eventos";
import Promocoes from "./pages/promocoes/Promocoes";
import Notas from "./pages/notas/Notas";
import EscolherAssento from "./pages/assentos/EscolherAssunto";

function App() {
  return (
    <Routes>
      <Route element={<Home />} index />
      <Route path="/horarios" element={<Horarios />} />
      <Route path="/novos_filmes" element={<NovosFilmes />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/promocoes" element={<Promocoes />} />
      <Route path="/notas" element={<Notas />} />
      <Route path="/assento" element={<EscolherAssento />} />
    </Routes>
  );
}

export default App;
