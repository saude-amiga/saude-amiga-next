import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; Todos os direitos reservados - Saúde Amiga - {new Date().getFullYear()}</p>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/contraste">Contraste</Link>
          <Link to="/texto">Texto</Link>
          <Link to="/leitor">Leitor</Link>
          <Link to="/libras">Libras</Link>
          <Link to="/guias">Guias</Link>
          <Link to="/integrantes">Grupo</Link>
        </nav>
      </div>
    </footer>
  );
}