import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "PlayStation 3",
    path: "/ps3",
  },
  {
    name: "PlayStation 4",
    path: "/ps4",
  },
  {
    name: "Xbox 360",
    path: "/xbox360",
  },
  {
    name: "Xbox One",
    path: "/xboxone",
  },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <NavLink
          to="/"
          className="text-xl font-black tracking-tight"
        >
          <span className="text-blue-500">
            GAMES
          </span>

          <span className="text-white">
            DEV-VAR
          </span>
        </NavLink>


        {/* Desktop */}

        <div className="hidden items-center gap-6 lg:flex">

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>

          ))}

        </div>


        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 px-3 py-2 text-xl lg:hidden"
          aria-label="Abrir menú"
        >
          ☰
        </button>

      </nav>


      {open && (

        <div className="border-t border-white/10 bg-black px-5 py-5 lg:hidden">

          <div className="flex flex-col gap-4">

            {links.map((link) => (

              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 font-semibold ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>

            ))}

          </div>

        </div>

      )}

    </header>
  );
}