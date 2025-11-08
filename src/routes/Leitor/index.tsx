import { useState, useRef, useEffect } from "react";
import { FaVolumeUp, FaMicrophone, FaTimes } from "react-icons/fa";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type SpeechRecognition = any;

export default function Leitor() {
  useEffect(() => {
    document.title = "Leitor";
  }, []);

  const [texto, setTexto] = useState("");
  const [ouvindo, setOuvindo] = useState(false);
  const [suporte, setSuporte] = useState(true);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const textoFinalRef = useRef("");
  const textoTempRef = useRef("");

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

    recognition.onresult = (event: any) => {
      let textoFinal = textoFinalRef.current;
      let textoTemp = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcrito = result[0].transcript;

        if (result.isFinal) {
          textoFinal += " " + transcrito;
        } else {
          textoTemp += " " + transcrito;
        }
      }

      textoFinalRef.current = textoFinal.trim();
      textoTempRef.current = textoTemp.trim();
      setTexto((textoFinalRef.current + " " + textoTempRef.current).trim());
    };

    recognition.onerror = (event: any) => {
      console.error("Erro no reconhecimento:", event.error);
    };

    recognition.onend = () => {
      setOuvindo(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const lerTexto = () => {
    const textoParaLer = textoFinalRef.current.trim();
    if (!textoParaLer) return;

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(textoParaLer);
    utterance.lang = "pt-BR";
    speechSynthesis.speak(utterance);
  };

const alternarReconhecimento = () => {
  const recognition = recognitionRef.current;
  if (!recognition) return;

  try {
    if (ouvindo) {
      recognition.stop();
    } else {
      recognition.start();
      setOuvindo(true);
    }
  } catch (error: any) {
    if (error.name === "InvalidStateError") {
      console.warn("Reconhecimento já está ativo.");
    } else {
      console.error("Erro ao alternar reconhecimento:", error);
    }
  }
};

  const limparTexto = () => {
    setTexto("");
    textoFinalRef.current = "";
    textoTempRef.current = "";
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
          marginBottom: "0.5rem",
        }}
      />

      {texto && (
        <div
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "var(--user-font-size)",
            fontFamily: "var(--user-font-family)",
            color: "var(--user-font-color)",
            backgroundColor: "var(--bg-color)",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            whiteSpace: "pre-wrap",
            textAlign: "left",
          }}
        >
          {texto}
        </div>
      )}

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={lerTexto} style={estiloBotao("#0077ff")}>
          <FaVolumeUp />
          Ler em voz alta
        </button>

        <button
          onClick={alternarReconhecimento}
          disabled={!suporte}
          style={estiloBotao(!suporte ? "#cc0000" : ouvindo ? "#999" : "#28a745", !suporte)}
        >
          {!suporte ? <FaTimes /> : <FaMicrophone />}
          {!suporte ? "Não suportado" : ouvindo ? "Parar" : "Falar"}
        </button>

        <button onClick={limparTexto} style={estiloBotao("#ff6600")}>
          🧹 Limpar texto
        </button>
      </div>

      {!suporte && (
        <p style={{ marginTop: "1rem" }}>
          Seu navegador não suporta reconhecimento de voz.
        </p>
      )}
    </div>
  );
}

function estiloBotao(cor: string, desabilitado = false) {
  return {
    padding: "0.8rem 1.6rem",
    fontSize: "1rem",
    borderRadius: "999px",
    backgroundColor: cor,
    color: "#fff",
    border: "none",
    cursor: desabilitado ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };
}