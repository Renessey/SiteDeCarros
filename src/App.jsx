import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header.jsx";
import HomeLandingPage from "./pages/HomeLandingPage";
import Carros from "./pages/Carros";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>
      {/* Header fixo — aparece em todas as rotas */}
      <Header />

      {/* Conteúdo das rotas */}
      <Routes>
        <Route path="/" element={<HomeLandingPage />} />
        <Route path="/carros" element={<Carros />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
