// Este hook tiene que gestionar tres cosas:
// El estado de los resultados que devuelve n8n
// El estado de carga (para mostrar el spinner mientras espera)
// El estado de error (para mostrar un mensaje si algo falla)

// Y tiene que exportar una función que llame a searchNews de api.js, actualice esos estados según lo que pase, y devuelva todo al componente que lo use.
import searchNews from "../services/api.js";
import { useState } from "react";

export default function useSearch() {
  const [load, setLoad] = useState(false);
  const [resultados, setresultados] = useState([]);
  const [error, setError] = useState("");

  async function handleSearch(word) {
    try {
      setLoad(true);
      setError("");

      const searchData = await searchNews(word);
      setresultados(searchData);
    } catch (err) {
      setError("Error al buscar noticias: " + err.message);
    } finally {
      setLoad(false);
    }
  }

  // Devolvemos todo lo que el componente que use este hook va a necesitar
  return {
    load,
    resultados,
    error,
    handleSearch,
  };
}
