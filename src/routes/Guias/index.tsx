import { useRef, useState, useEffect } from "react";

export default function Guias() {
  const emojiRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [posicao, setPosicao] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [mostrarPing, setMostrarPing] = useState(false);

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
  }, [mostrarPing]);

  return (
    <div ref={containerRef} className="h-screen flex flex-col relative">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded w-40 text-center"
          onClick={() => setMostrarPing(true)}
        >
          Botão 1
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded w-40 text-center">Botão 2</button>
        <button className="px-4 py-2 bg-red-600 text-white rounded w-40 text-center">Botão 3</button>
        <button className="px-4 py-2 bg-yellow-500 text-black rounded w-40 text-center">Botão 4</button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded w-40 text-center">Botão 5</button>
      </div>

      <div className="grow flex justify-center items-center">
        <span
          ref={emojiRef}
          className="text-9xl cursor-pointer"
          onClick={() => setMostrarPing(false)}
        >
          🎯
        </span>
      </div>

      {mostrarPing && posicao && (
        <div
          className="absolute animate-ping rounded-full bg-blue-600 opacity-60 pointer-events-none"
          style={{
            top: posicao.top + posicao.height / 2 - 150,
            left: posicao.left + posicao.width / 2 - 150,
            width: 300,
            height: 300,
          }}
        />
      )}
    </div>
  );
}