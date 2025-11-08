export default function Guias() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex justify-center items-center gap-4 pt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Botão 1</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded">Botão 2</button>
        <button className="px-4 py-2 bg-red-600 text-white rounded">Botão 3</button>
        <button className="px-4 py-2 bg-yellow-500 text-black rounded">Botão 4</button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded">Botão 5</button>
      </div>

      <div className="flex-grow flex justify-center items-center">
        <span className="text-9xl">🎯</span>
      </div>
    </div>
  );
}
