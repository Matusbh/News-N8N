// Un input de texto y un botón. Tiene que:

// Guardar lo que escribe el usuario en un estado local
// Cuando el usuario pulse el botón (o Enter), llamar a la función de búsqueda que le llega por props
// Mientras está cargando, deshabilitar el botón para que no haga múltiples llamadas

import { useState } from "react";
import useSearch from "../hooks/useSearch.js";

export default function SeaechBar() {
  // Guardammos el input en un estado local
  const [keyword, setKeyword] = useState("");
  const { load, handleSearch } = useSearch();

  function onSubmit(e) {
    //Eviamos que el formurmulario se recargue
    e.preventDefault();
    // LLamamos a la funcion para que busque las noticias con la palabra clave
    handleSearch(keyword);
  }

  return (
    <section className="mt-12">
      <div className="max-w-4xl mx-auto w-full relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-primary-container to-secondary-container rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <form
          onSubmit={onSubmit}
          className="relative flex items-center bg-[#0e0e13] rounded-2xl p-2.5 border border-white/5 shadow-2xl"
        >
          <span className="ml-6 text-slate-500 text-xl">
            <img
              src="../public/svg/search.svg"
              alt="Buscar"
              className="w-fit invert"
            />
          </span>

          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Busca noticias, temas o tendencias..."
            className="w-full bg-transparent border-none outline-none focus:ring-0 text-white placeholder-slate-500 px-6 py-4 text-lg"
          />

          <button
            type="submit"
            disabled={load}
            className={`px-10 py-4 rounded-xl font-bold text-base tracking-tight transition-all active:scale-95 ${
              load
                ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                : "bg-primary-container text-white hover:shadow-lg hover:shadow-violet-600/20"
            }`}
          >
            {load ? "Buscando..." : "Buscar"}
          </button>
        </form>
      </div>
    </section>
  );
}
