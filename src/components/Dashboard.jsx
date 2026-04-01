// Es el componente orquestador. Usa el hook useSearch, renderiza el SearchBar, y según el estado muestra: el spinner si está cargando, un mensaje de error si falló, o las tarjetas con los resultados.

// Usuario escribe → SearchBar llama a handleSearch → useSearch hace el fetch a n8n → Dashboard recibe los resultados → ResultsGrid los muestra

import SearchBar from "./SearchBar.jsx";
import Spinner from "./Spinner.jsx";
import Error from "./Error.jsx";

export default function Dashboard({ resultados, load, error, handleSearch }) {
  return (
    //Si esta cargadno ensenamos spiner
    <div>
      <SearchBar handleSearch={handleSearch} load={load} />

      <div className="mt-12 px-2.5">{load && <Spinner />}</div>
      {
        //Si hay error lo ensenamos
        error && (
          <div className="max-w-4xl mx-auto w-full mt-12 px-2.5">
            <Error message={error} />
          </div>
        )
      }
    </div>
  );
}
