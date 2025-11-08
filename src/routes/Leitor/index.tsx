import { useState, useRef, useEffect } from "react";
import { FaVolumeUp, FaMicrophone, FaTimes } from "react-icons/fa";

export default function LeitorTranscritor() {
  const [texto, setTexto] = useState("");
  const [ouvindo, setOuvindo] = useState(false);
  const [suporte, setSuporte] = useState(true);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSuporte(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let novoTexto = texto;
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcrito = result[0].transcript;
        if (result.isFinal) {
          novoTexto += " " + transcrito;
        } else {
          novoTexto += " " + transcrito;
        }
      }
      setTexto(novoTexto.trim());
    };

    recognition.onerror = (event) => {
      console.error("Erro no reconhecimento:", event.error);
    };

    recognition.onend = () => {
      setOuvindo(false);
    };

    recognitionRef.current = recognition;
  }, [texto]);

  const lerTexto = () => {
    const textoParaLer = texto.trim();
    if (!textoParaLer) return;

    const utterance = new SpeechSynthesisUtterance(textoParaLer);
    utterance.lang = "pt-BR";
    speechSynthesis.speak(utterance);
  };

  const alternarReconhecimento = () => {
    if (!recognitionRef.current) return;

    if (ouvindo) {
      recognitionRef.current.stop();
      setOuvindo(false);
    } else {
      recognitionRef.current.start();
      setOuvindo(true);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "var(--card-bg)",
        borderRadius: "12px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        color: "var(--user-font-color)",
        fontSize: "var(--user-font-size)",
        fontFamily: "var(--user-font-family)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "1.5rem" }}>🗣️ Leitor e Transcritor</h1>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Fale ou digite algo para ser lido..."
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

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
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

        <button
          onClick={alternarReconhecimento}
          disabled={!suporte}
          style={{
            padding: "0.8rem 1.6rem",
            fontSize: "1rem",
            borderRadius: "999px",
            backgroundColor: !suporte ? "#cc0000" : ouvindo ? "#999" : "#28a745",
            color: "#fff",
            border: "none",
            cursor: suporte ? "pointer" : "not-allowed",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (suporte) {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
          }}
        >
          {!suporte ? <FaTimes /> : <FaMicrophone />}
          {!suporte ? "Não suportado" : ouvindo ? "Parar" : "Falar"}
        </button>
      </div>

      {!suporte && (
        <p style={{ marginTop: "1rem"}}>
          Seu navegador não suporta reconhecimento de voz.
        </p>
      )}
    </div>
  );
}