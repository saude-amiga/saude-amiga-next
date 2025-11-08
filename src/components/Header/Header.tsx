import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import logo_saude from "../../img/icones/logo-saude-amiga.png"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className="header-container">
                <img src={logo_saude} alt="Logo da Saúde Amiga" className="w-35 h-auto" />

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
                    <Link to="/guias" onClick={() => setMenuOpen(false)}>Guias</Link>
                    <Link to="/integrantes" onClick={() => setMenuOpen(false)}>Grupo</Link>
                    <button
                        onClick={() => {
                            toggleTheme();
                            setMenuOpen(false);
                        }}
                        className="contrast-toggle"
                    >
                        {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
                    </button>

                </nav>
            </div>
        </header>
    );
}
