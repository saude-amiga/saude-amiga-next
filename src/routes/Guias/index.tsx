export default function Guias() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded w-40 text-center">Botão 1</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded w-40 text-center">Botão 2</button>
        <button className="px-4 py-2 bg-red-600 text-white rounded w-40 text-center">Botão 3</button>
        <button className="px-4 py-2 bg-yellow-500 text-black rounded w-40 text-center">Botão 4</button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded w-40 text-center">Botão 5</button>
      </div>
      <div className="grow flex justify-center items-center">
        <span className="text-9xl">🎯</span>
      </div>
    </div>
  );
}