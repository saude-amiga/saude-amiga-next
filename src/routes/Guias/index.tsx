import { useRef, useState, useEffect } from "react";

export default function Guias() {
  const emojiRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const botao5Ref = useRef<HTMLButtonElement>(null);
  const [posicaoEmoji, setPosicaoEmoji] = useState<{ top: number; left: number } | null>(null);
  const [posicaoBotao5, setPosicaoBotao5] = useState<{ top: number; left: number } | null>(null);
  const [mostrarPing, setMostrarPing] = useState(false);
  const [mostrarBlur, setMostrarBlur] = useState(false);
  const [mostrarBorda, setMostrarBorda] = useState(false);
  const [mostrarExplosao, setMostrarExplosao] = useState(false);
  const [mostrarCaminho, setMostrarCaminho] = useState(false);
  const [bolinhasVisiveis, setBolinhasVisiveis] = useState<number[]>([]);

  useEffect(() => {
    if (emojiRef.current && botao5Ref.current && containerRef.current) {
      const emojiRect = emojiRef.current.getBoundingClientRect();
      const botaoRect = botao5Ref.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      setPosicaoEmoji({
        top: emojiRect.top - containerRect.top + emojiRect.height / 2,
        left: emojiRect.left - containerRect.left + emojiRect.width / 2,
      });

      setPosicaoBotao5({
        top: botaoRect.top - containerRect.top + botaoRect.height / 2,
        left: botaoRect.left - containerRect.left + botaoRect.width / 2,
      });
    }
  }, [mostrarPing, mostrarBlur, mostrarBorda, mostrarExplosao, mostrarCaminho]);

  const particulas = Array.from({ length: 16 });
  const caminho = Array.from({ length: 30 });
  const botaoBase = "px-4 py-2 rounded w-40 text-center cursor-pointer hover:brightness-110";

  const iniciarCaminho = () => {
    setMostrarCaminho(true);
    setBolinhasVisiveis([]);
    caminho.forEach((_, i) => {
      setTimeout(() => {
        setBolinhasVisiveis((prev) => [...prev, i]);
      }, i * 80);
    });
  };

  return (
    <div ref={containerRef} className="h-screen flex flex-col relative overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <button className={`${botaoBase} bg-blue-600 text-white`} onClick={() => setMostrarPing(true)}>
          Botão 1
        </button>
        <button className={`${botaoBase} bg-green-600 text-white`} onClick={() => setMostrarBlur(true)}>
          Botão 2
        </button>
        <button className={`${botaoBase} bg-red-600 text-white`} onClick={() => setMostrarBorda(true)}>
          Botão 3
        </button>
        <button className={`${botaoBase} bg-yellow-500 text-black`} onClick={() => setMostrarExplosao(true)}>
          Botão 4
        </button>
        <button ref={botao5Ref} className={`${botaoBase} bg-purple-600 text-white`} onClick={iniciarCaminho}>
          Botão 5
        </button>
      </div>

      <div className="grow flex justify-center items-center z-10">
        <span
          ref={emojiRef}
          className="text-9xl cursor-pointer"
          onClick={() => {
            setMostrarPing(false);
            setMostrarBlur(false);
            setMostrarBorda(false);
            setMostrarExplosao(false);
            setMostrarCaminho(false);
            setBolinhasVisiveis([]);
          }}
        >
          🎯
        </span>
      </div>

      {mostrarPing && posicaoEmoji && (
        <div
          className="absolute animate-ping rounded-full bg-blue-600 opacity-60 pointer-events-none z-0"
          style={{
            top: posicaoEmoji.top - 150,
            left: posicaoEmoji.left - 150,
            width: 300,
            height: 300,
          }}
        />
      )}

      {mostrarBlur && posicaoEmoji && (
        <>
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0 pointer-events-none" />
          <div
            className="absolute z-10 pointer-events-none"
            style={{
              top: posicaoEmoji.top - 140,
              left: posicaoEmoji.left - 140,
              width: 280,
              height: 280,
              borderRadius: "50%",
              backgroundColor: "transparent",
              boxShadow: "0 0 0 9999px rgba(0,0,0,0.3)",
            }}
          />
        </>
      )}

      {mostrarBorda && posicaoEmoji && (
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: posicaoEmoji.top - 140,
            left: posicaoEmoji.left - 140,
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "10px solid red",
          }}
        />
      )}

      {mostrarExplosao && posicaoEmoji &&
        particulas.map((_, i) => {
          const angle = (i / particulas.length) * 2 * Math.PI;
          const radius = 140;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={i}
              className="absolute w-5 h-5 rounded-full bg-yellow-400 animate-ping pointer-events-none z-0"
              style={{
                top: posicaoEmoji.top - 10 + y,
                left: posicaoEmoji.left - 10 + x,
              }}
            />
          );
        })}

      {mostrarCaminho && posicaoEmoji && posicaoBotao5 &&
        bolinhasVisiveis.map((i) => {
          const x = posicaoBotao5.left + ((posicaoEmoji.left - posicaoBotao5.left) / caminho.length) * i;
          const y = posicaoBotao5.top + ((posicaoEmoji.top - posicaoBotao5.top) / caminho.length) * i;
          return (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-purple-500 pointer-events-none"
              style={{
                top: y,
                left: x,
              }}
            />
          );
        })}
    </div>
  );
}