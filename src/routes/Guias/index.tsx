import { useRef, useState, useEffect } from "react";

export default function Guias() {
  const emojiRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [posicao, setPosicao] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [mostrarPing, setMostrarPing] = useState(false);
  const [mostrarBlur, setMostrarBlur] = useState(false);
  const [mostrarBorda, setMostrarBorda] = useState(false);

  useEffect(() => {
    if (emojiRef.current && containerRef.current) {
      const emojiRect = emojiRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setPosicao({
        top: emojiRect.top - containerRect.top,
        left: emojiRect.left - containerRect.left,
        width: emojiRect.width,
        height: emojiRect.height,
      });
    }
  }, [mostrarPing, mostrarBlur, mostrarBorda]);

  return (
    <div ref={containerRef} className="h-screen flex flex-col relative overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded w-40 text-center"
          onClick={() => setMostrarPing(true)}
        >
          Botão 1
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded w-40 text-center"
          onClick={() => setMostrarBlur(true)}
        >
          Botão 2
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded w-40 text-center"
          onClick={() => setMostrarBorda(true)}
        >
          Botão 3
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-black rounded w-40 text-center">Botão 4</button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded w-40 text-center">Botão 5</button>
      </div>

      <div className="grow flex justify-center items-center z-10">
        <span
          ref={emojiRef}
          className="text-9xl cursor-pointer"
          onClick={() => {
            setMostrarPing(false);
            setMostrarBlur(false);
            setMostrarBorda(false);
          }}
        >
          🎯
        </span>
      </div>

      {mostrarPing && posicao && (
        <div
          className="absolute animate-ping rounded-full bg-blue-600 opacity-60 pointer-events-none z-0"
          style={{
            top: posicao.top + posicao.height / 2 - 150,
            left: posicao.left + posicao.width / 2 - 150,
            width: 300,
            height: 300,
          }}
        />
      )}

      {mostrarBlur && posicao && (
        <>
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0 pointer-events-none" />
          <div
            className="absolute z-10 pointer-events-none"
            style={{
              top: posicao.top + posicao.height / 2 - 140,
              left: posicao.left + posicao.width / 2 - 140,
              width: 280,
              height: 280,
              borderRadius: "50%",
              backgroundColor: "transparent",
              boxShadow: "0 0 0 9999px rgba(0,0,0,0.3)",
            }}
          />
        </>
      )}

      {mostrarBorda && posicao && (
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: posicao.top + posicao.height / 2 - 140,
            left: posicao.left + posicao.width / 2 - 140,
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "10px solid red",
          }}
        />
      )}
    </div>
  );
}