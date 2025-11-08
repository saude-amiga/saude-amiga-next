import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  useEffect(() => {
    document.title = "404 - Não encontrada";
  }, []);
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>😕 Oops! Página não encontrada</h1>
        <p>A página que você tentou acessar não existe ou foi movida.</p>
        <Link to="/" className="error-button">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}