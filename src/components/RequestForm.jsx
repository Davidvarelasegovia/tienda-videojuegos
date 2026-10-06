import { useState } from "react";

export default function RequestForm({ game }) {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    celular: "",
    ciudad: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

      <h2 className="text-2xl font-black">
        Solicitar este juego
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Completa tus datos para realizar una solicitud.
      </p>

      {/* 
        Quitamos 'onSubmit={handleSubmit}' para que la petición viaje directo a Formspree.
        Mantenemos el method="POST" y tu action verificado.
      */}
      <form 
        action="https://formspree.io/f/mljdabpy" 
        method="POST"
        className="mt-6 grid gap-4"
      >
        
       

        {/* 📥 CAMPOS INVISIBLES: Envían los datos específicos del juego a tu bandeja de correo */}
        <input type="hidden" name="Juego Solicitado" value={game.title} />
        <input type="hidden" name="Consola" value={game.console} />
        <input type="hidden" name="Precio Unitario" value={game.price ? `CLP $ ${game.price.toLocaleString('es-CL')}` : "No especificado"} />

        {/* INPUTS DEL CLIENTE */}
        <input
          required
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />

        <input
          required
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />

        <input
          required
          type="tel"
          name="celular"
          placeholder="Número celular"
          value={form.celular}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />

         <input
          required
          type="ciudad"
          name="ciudad"
          placeholder="ingresa dirección completa"
          value={form.ciudad}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500"
        >
          Enviar solicitud
        </button>

      </form>

    </section>
  );
}
