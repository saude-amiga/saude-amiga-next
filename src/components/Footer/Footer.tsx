export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; Todos os direitos reservados - Saúde Amiga {new Date().getFullYear()}</p>
        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/contraste">Contraste</a>
          <a href="/texto">Texto</a>
          <a href="/leitor">Leitor</a>
          <a href="/libras">Libras</a>
        </nav>
      </div>
    </footer>
  );
}
