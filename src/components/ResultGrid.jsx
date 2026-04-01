import ResultCard from "./ResultCard.jsx";

export default function ResultGrid({ articulos }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {articulos.map((articulo) => (
        <ResultCard key={articulo.url} results={articulo} />
      ))}
    </section>
  );
}
