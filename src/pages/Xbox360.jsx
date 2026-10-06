import { games } from "../data/games";
import GameCard from "../components/GameCard";

export default function Xbox360() {

  const consoleGames = games.filter(
    (game) => game.console === "Xbox 360"
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <p className="font-bold uppercase tracking-widest text-green-500">
        XBOX
      </p>

      <h1 className="mt-2 text-5xl font-black">
        Xbox 360
      </h1>

      <p className="mt-4 text-gray-400">
        Juegos disponibles para Xbox 360.
      </p>


      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {consoleGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}

      </div>

    </main>
  );
}