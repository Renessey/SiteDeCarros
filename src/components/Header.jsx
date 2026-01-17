import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./header.css";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="logo">EliteCar</div>
      <button className="hamburger" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}>
        ☰
      </button>
      <nav ref={navRef} className={isOpen ? "open" : ""}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className={location.pathname === "/carros" ? "active" : ""}>
            <Link to="/carros" onClick={() => setIsOpen(false)}>Carros</Link>
          </li>
          <li className={location.pathname === "/Sobre" ? "active" : ""}>
            <Link to="/Sobre" onClick={() => setIsOpen(false)}>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
