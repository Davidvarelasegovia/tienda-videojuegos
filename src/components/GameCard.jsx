import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-blue-500/10">

      {/* IMAGEN / CARÁTULA */}
      <Link
        to={`/juego/${game.id}`}
        className="block"
      >
        <div className="relative flex aspect-3/4 w-full items-center justify-center overflow-hidden bg-zinc-950">

          <img
            src={game.image}
            alt={`Carátula de ${game.title}`}
            loading="lazy"
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />

          {/* Efecto al pasar el mouse */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

          {/* Botón visual */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Ver juego
          </div>

        </div>
      </Link>


      {/* INFORMACIÓN */}
      <div className="p-5">

        {/* Consola */}
        <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
          {game.console}
        </p>


        {/* Título */}
        <h2 className="mt-2 line-clamp-2 text-xl font-black text-white">
          {game.title}
        </h2>

         {/* 🟢 AÑADE ESTA LÍNEA AQUÍ PARA EL PRECIO */}
     {game.price && (
  <p className="text-xl font-bold text-green-600 mt-2">
    CLP $ {game.price.toLocaleString('es-CL')}
  </p>
)}



        {/* Descripción */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
          {game.description}
        </p>


        {/* Información adicional */}
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">

          <span className="text-xs text-gray-500">
            {game.genre}
          </span>

          <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-gray-400">
            {game.year}
          </span>

        </div>


        {/* Botón */}
        <Link
          to={`/juego/${game.id}`}
          className="mt-5 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white transition hover:bg-blue-500"
        >
          Ver descripción
        </Link>

      </div>

    </article>
  );
}