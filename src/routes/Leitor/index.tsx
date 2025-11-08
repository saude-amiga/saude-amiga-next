import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";

export default function Leitor() {
    const [texto, setTexto] = useState("");

    const lerTexto = () => {
        if (!texto.trim()) return;

        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = "pt-BR";
        speechSynthesis.speak(utterance);
    };

    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "2rem auto",
                padding: "2rem",
                backgroundColor: "var(--card-bg)", // respeita tema
                borderRadius: "12px",
                border: "1px solid rgba(0, 0, 0, 0.05)", // borda leve
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)", // sombra mais profunda
                color: "var(--user-font-color)",
                fontSize: "var(--user-font-size)",
                fontFamily: "var(--user-font-family)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >

            <h1 style={{ marginBottom: "1.5rem" }}>🗣️ Leitor de Texto</h1>

            <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Digite algo para ser lido..."
                rows={6}
                style={{
                    width: "100%",
                    padding: "1rem",
                    fontSize: "var(--user-font-size)",
                    fontFamily: "var(--user-font-family)",
                    color: "var(--user-font-color)",
                    backgroundColor: "var(--bg-color)",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    resize: "none",
                    marginBottom: "1rem",
                }}
            />

            <button
                onClick={lerTexto}
                style={{
                    padding: "0.8rem 1.6rem",
                    fontSize: "1rem",
                    borderRadius: "999px",
                    backgroundColor: "#0077ff",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
                }}
            >
                <FaVolumeUp />
                Ler em voz alta
            </button>
        </div>
    );
}