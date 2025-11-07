import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Saúde Amiga</h1>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/contraste" onClick={() => setMenuOpen(false)}>Contraste</Link>
          <Link to="/texto" onClick={() => setMenuOpen(false)}>Texto</Link>
          <Link to="/leitor" onClick={() => setMenuOpen(false)}>Leitor</Link>
          <Link to="/libras" onClick={() => setMenuOpen(false)}>Libras</Link>
        </nav>
      </div>
    </header>
  );
}