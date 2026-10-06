import { Link } from "react-router-dom";

import ps3 from "../assets/consolas/ps3.webp";
import ps4 from "../assets/consolas/ps4.webp";
import xbox360 from "../assets/consolas/xbox360.png";
import xboxone from "../assets/consolas/xboxone.webp";
import portada from "../assets/consolas/portada.jpeg";

export default function Home() {

  return (
    <main>

      <section className="relative overflow-hidden">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">

          <div>

            <p className="font-bold uppercase tracking-[0.3em] text-blue-500">
              GAMES DeV VaR
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">

              Tu colección.
              <br />

              <span className="text-blue-500">
                Tu consola.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Explora nuestro catálogo de videojuegos
              para PlayStation 3, PlayStation 4, Xbox 360
              y Xbox One.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              {/* <Link
                to="/ps4"
                className="rounded-xl bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500"
              >
                Ver PlayStation
              </Link>

              <Link
                to="/xboxone"
                className="rounded-xl border border-white/20 px-6 py-3 font-bold hover:border-blue-500"
              >
                Ver Xbox
              </Link> */}

            </div>

          </div>


          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10">

              <img
                src={portada}
                alt="Videojuegos"
                className="h-112.5 w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <p className="font-bold uppercase tracking-widest text-blue-500">
            PLATAFORMAS
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Elige tu consola
          </h2>

        </div>


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <Link
         to="/ps3"
          className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
           >

           <div className="flex h-32 items-center justify-center">

          <img
          src={ps3}
          alt="Consola PlayStation 3"
          className="h-full w-auto object-contain transition duration-300 group-hover:scale-110"
          />

         </div>

        <h3 className="mt-5 text-xl font-black text-white">
         PlayStation 3
        </h3>

        </Link>

      <Link
        to="/ps4"
        className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
>

         <div className="flex h-32 items-center justify-center">

       <img
        src={ps4}
        alt="Consola PlayStation 4"
        className="h-full w-auto object-contain transition duration-300 group-hover:scale-110"
       />

       </div>

      <h3 className="mt-5 text-xl font-black text-white">
       PlayStation 4
      </h3>

     </Link>
          


           <Link
           to="/xbox360"
           className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

            <div className="flex h-32 items-center justify-center">

           <img
            src={xbox360}
           alt="Consola xbox360"
           className="h-full w-auto object-contain transition duration-300 group-hover:scale-110"
           />

           </div>

           <h3 className="mt-5 text-xl font-black text-white">
            Xbox 360
           </h3>

           </Link>


          <Link
          to="/xboxone"
           className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-green-500"
           >
           <div className="flex h-32 items-center justify-center">

          <img
         src={xboxone}
         alt="Consola Xbox One"
         className="h-full w-auto object-contain transition duration-300 group-hover:scale-110"
        />

       </div>

       <h3 className="mt-5 text-xl font-black text-white">
       Xbox One
       </h3>

      </Link>

        </div>

      </section>

    </main>
  );
}