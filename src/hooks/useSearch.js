import searchNews from "../services/api.js";
import { useState } from "react";

export default function useSearch() {
  const [load, setLoad] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState("");

  async function handleSearch(word) {
    try {
      setLoad(true);
      setError("");

      const searchData = await searchNews(word);

      setResultados(searchData.articles ?? []);
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
