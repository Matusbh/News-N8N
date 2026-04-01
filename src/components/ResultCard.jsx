export default function ResultCard({ results }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(124,58,237,0.18)]">
      <img
        src={results.image}
        alt={results.title}
        className="w-full h-full object-cover"
      />

      <div className="flex flex-col flex-1 p-6 space-y-3">
        <h3 className="text-white font-bold text-lg leading-snug line-clamp-2">
          {results.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {results.description}
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          {results.source}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <p className="text-xs text-slate-500 uppercase tracking-wide">
            {new Date(results.publishedAt).toLocaleDateString("es-ES")}
          </p>
          <a
            href={results.url}
            target="_blank"
            className="text-sm font-semibold text-cyan-400 hover:text-white transition-colors duration-200"
          >
            Read more →
          </a>
        </div>
      </div>
    </article>
  );
}
