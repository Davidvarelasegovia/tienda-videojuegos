import {
FaWhatsapp,
FaFacebookF,
FaDiscord,
} from "react-icons/fa";


export default function Footer() {

  return (
    <footer className="mt-20 border-t border-white/10 bg-black">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">

        <div>

          <h2 className="text-2xl font-black">

            <span className="text-blue-500">
              GAMES
            </span>

            <span className="text-white">
              DEV-VAR
            </span>

          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-300">
            Tu tienda de Videojuegos. 
            Todos los derechos reservados
          </p>

        </div>


        <div>

          <h3 className="font-bold text-white">
            Plataformas
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

            <a
              href="/ps3"
              className="hover:text-blue-400"
            >
              PlayStation 3
            </a>

            <a
              href="/ps4"
              className="hover:text-blue-400"
            >
              PlayStation 4
            </a>

            <a
              href="/xbox360"
              className="hover:text-blue-400"
            >
              Xbox 360
            </a>

            <a
              href="/xboxone"
              className="hover:text-blue-400"
            >
              Xbox One
            </a>

          </div>

        </div>


        <div>

          <h3 className="font-bold text-white">
            Redes sociales
          </h3>

          <div className="mt-5 flex gap-3">

             {/* WhatsApp */}
            <a
              href="https://wa.me/56954091728"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
            >
              <FaWhatsapp />
            </a>
             
             {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/1CAi9N6Gzd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
            >
              <FaFacebookF />
            </a>
               
               {/* DISCORD */}
            <a
              href="https://discordapp.com/users/1518416011970347014"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              title="Discord"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white"
            >
              <FaDiscord />
            </a>

          </div>

        </div>

      </div>


      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-600">

        © {new Date().getFullYear()} GameStore

      </div>

    </footer>
  );
}