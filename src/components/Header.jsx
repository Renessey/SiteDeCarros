import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="logo">Cars</div>
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/carros" ? "active" : ""}>
            <Link to="/carros">Carros</Link>
          </li>
          <li className={location.pathname === "/contato" ? "active" : ""}>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
