import SearchBar from "./SearchBar.jsx";
import Spinner from "./Spinner.jsx";
import Error from "./Error.jsx";
import ResultGrid from "./ResultGrid.jsx";
import Hero from "./Hero.jsx";

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

      {
        //Si no hay error y no esta cargando, mostramos los resultados
        !error && !load && <ResultGrid articulos={resultados} />
      }
    </div>
  );
}
