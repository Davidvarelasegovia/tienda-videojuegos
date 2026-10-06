import { Link, useParams } from "react-router-dom";
import { games } from "../data/games";
import RequestForm from "../components/RequestForm";

export default function GameDetail() {

  const { id } = useParams();

  const game = games.find(
    (item) => item.id === id
  );


  if (!game) {

    return (
      <main className="mx-auto max-w-4xl px-6 py-20 text-center">

        <h1 className="text-4xl font-black">
          Juego no encontrado
        </h1>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold"
        >
          Volver al inicio
        </Link>

      </main>
    );

  }


  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <Link
        to={`/${game.slug}`}
        className="text-sm font-bold text-blue-400"
      >
        ← Volver a la consola
      </Link>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        <div className="w-full max-h-[620px] bg-neutral-900/30 rounded-2xl flex items-center justify-center p-4 shadow-lg border border-neutral-800">
    <img
      src={game.image}
      alt={game.title}
      // 3. 'object-contain' evita que se deforme, y 'max-h-full' respeta el contenedor
      className="max-w-full max-h-[580px] object-contain rounded-xl"
    />
  </div>


        <div>

          <p className="font-bold uppercase tracking-widest text-blue-500">
            {game.console}
          </p>

          <h1 className="mt-3 text-5xl font-black">
            {game.title}
          </h1>

          {/* 🟢 SECCIÓN DEL PRECIO EN PESOS CHILENOS AUTOMÁTICO */}
            {game.price && (
            <div className="bg-neutral-900 mt-3 border border-neutral-800 p-4 rounded-xl inline-block max-w-xs">
            <span className="text-xs text-neutral-400 block mb-1">Precio:</span>
            <span className="text-2xl font-black text-cyan-400">
              CLP $ {Number(game.price).toLocaleString('es-CL')}
            </span>
            </div>
             )}

           <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              {game.genre}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300">
              {game.year}
            </span>

          </div>


          <div className="mt-8">

            <h2 className="text-2xl font-black">
              Descripción
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              {game.description}
            </p>

          </div>


          <RequestForm game={game} />

        </div>

      </div>

    </main>
  );
}