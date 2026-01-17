import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header.jsx";
import HomeLandingPage from "./pages/HomeLandingPage";
import Carros from "./pages/Carros";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      {/* Header fixo — aparece em todas as rotas */}
      <Header />

      {/* Conteúdo das rotas */}
      <Routes>
        <Route path="/" element={<HomeLandingPage />} />
        <Route path="/carros" element={<Carros />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
