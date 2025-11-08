import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "var(--card-bg)",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        fontSize: "var(--user-font-size)",
        fontFamily: "var(--user-font-family)",
        color: "var(--user-font-color)",
      }}
    >
      <h1 style={{ marginBottom: "1.5rem" }}>🏠 Página Inicial</h1>

      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <li>
          <Link to="/contraste" style={estiloLink}>
            🌗 Página de Contraste
          </Link>
        </li>
        <li>
          <Link to="/texto" style={estiloLink}>
            🎨 Configurações de Texto
          </Link>
        </li>
        <li>
          <Link to="/leitor" style={estiloLink}>
            🗣️ Leitor e Transcritor
          </Link>
        </li>
        <li>
          <Link to="/libras" style={estiloLink}>
            🧏 Página Libras
          </Link>
        </li>
      </ul>
    </div>
  );
}

const estiloLink = {
  display: "block",
  padding: "0.8rem 1.2rem",
  backgroundColor: "#0077ff",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};
