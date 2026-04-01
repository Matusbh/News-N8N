import Dashboard from "./Dashboard.jsx";
import { Search, Workflow, Earth } from "lucide-react";
import useSearch from "../hooks/useSearch.js";

export default function Hero() {
  const { resultados, load, error, handleSearch } = useSearch();

  return (
    <div className="mt-5">
      <h1 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter text-on-second-background/50  dark:text-background">
        Search News with{" "}
        <span class="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          AI
        </span>
      </h1>
      <p class="text-slate-400 text-lg md:text-2xl font-body max-w-3xl mx-auto leading-relaxed mt-5">
        Powered by n8n automation. Discover real-time insights across global
        sources with our neural processing engine.
      </p>
      <Dashboard
        resultados={resultados}
        load={load}
        error={error}
        handleSearch={handleSearch}
      />

      {!error && !load && (!resultados || resultados.length === 0) && (
        <div
          id="infoBars"
          class="flex gap-3.5 mt-10 p-2.5 flex-col md:flex-row"
        >
          <div
            id="infoBar--1"
            class="group rounded-2xl border border-white/10 bg-bars-color/70 dark:bg-on-background/70 p-8 backdrop-blur-xl shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(124,58,237,0.18)]"
          >
            <div class="flex flex-col items-start space-y-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Search size={24} className="text-primary" />
              </div>

              <div>
                <h2 class="mb-2 text-xl font-bold text-white">
                  Instant Search
                </h2>
                <p class="max-w-[320px] text-sm leading-relaxed text-slate-400">
                  Type any keyword and get the latest news articles from
                  hundreds of global sources in seconds.
                </p>
              </div>

              <div class="pt-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LEARN MORE
              </div>
            </div>
          </div>

          <div
            id="infoBar--2"
            class="group rounded-2xl border border-white/10 bg-bars-color/70 dark:bg-on-background/70 p-8 backdrop-blur-xl shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(124,58,237,0.18)]"
          >
            <div class="flex flex-col items-start space-y-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Workflow size={24} className="text-primary" />
              </div>

              <div>
                <h2 class="mb-2 text-xl font-bold text-white">
                  Powered by N8N
                </h2>
                <p class="max-w-[320px] text-sm leading-relaxed text-slate-400">
                  No custom backend. N8N handles the automation, cleans the data
                  and delivers it ready to display.
                </p>
              </div>

              <div class="pt-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LEARN MORE
              </div>
            </div>
          </div>

          <div
            id="infoBar--3"
            class="group rounded-2xl border border-white/10 bg-bars-color/70 dark:bg-on-background/70 p-8 backdrop-blur-xl shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(124,58,237,0.18)]"
          >
            <div class="flex flex-col items-start space-y-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Earth size={24} className="text-primary" />
              </div>

              <div>
                <h2 class="mb-2 text-xl font-bold text-white">
                  Real Global Sources
                </h2>
                <p class="max-w-[320px] text-sm leading-relaxed text-slate-400">
                  Articles from international media via NewsAPI. Always fresh,
                  always relevant.
                </p>
              </div>

              <div class="pt-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LEARN MORE
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
