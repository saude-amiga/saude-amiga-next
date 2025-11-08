import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import logo_saude from "../../img/icones/logo-saude-amiga.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkStyle =
    "inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-bold no-underline transition hover:bg-blue-700";
  const contrastStyle =
    "inline-block px-4 py-2 bg-gray-300 text-black dark:bg-gray-700 dark:text-white rounded-md font-bold no-underline transition hover:bg-gray-400 dark:hover:bg-gray-600";

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo_saude} alt="Logo da Saúde Amiga" className="w-36 h-auto" />

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Home
          </Link>
          <Link to="/contraste" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Contraste
          </Link>
          <Link to="/texto" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Texto
          </Link>
          <Link to="/leitor" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Leitor
          </Link>
          <Link to="/libras" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Libras
          </Link>
          <Link to="/guias" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Guias
          </Link>
          <Link to="/integrantes" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Grupo
          </Link>
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className={contrastStyle}
          >
            {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>
        </nav>
      </div>
    </header>
  );
}