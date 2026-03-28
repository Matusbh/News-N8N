import SeaechBar from "./SearchBar";

export default function Hero() {
  return (
    <div className="mt-5">
      <h1 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter text-white">
        Search News with{" "}
        <span class="bg-linear-to-r from-primary-container to-secondary-container bg-clip-text text-transparent">
          AI
        </span>
      </h1>
      <p class="text-slate-400 text-lg md:text-2xl font-body max-w-3xl mx-auto leading-relaxed">
        Powered by n8n automation. Discover real-time insights across global
        sources with our neural processing engine.
      </p>
      <SeaechBar />
    </div>
  );
}
