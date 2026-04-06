export default function Footer() {
  return (
    <footer className="fill top-0 w-full flex justify-between items-center px-6 py-4 mx-auto bg-bars-color dark:bg-on-background/70  transition-all duration-300  backdrop-blur-xl border-b rounded-b-xl border-white/10 shadow-[0_0_15px_rgba(124,58,237,0.1)] z-50 mt-5">
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r  dark:bg-linear-to-r from-primary to-secondary">
          AutoDash
        </h3>
      </div>

      <a
        href="https://github.com/Matusbh"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-150 opacity-80"
      >
        <button className="p-2 dark:text-slate-400 rounded-full transition-all duration-300 active:scale-200 opacity-80 ">
          <img src="/github.svg" alt="GitHub" className="w-7 h-7 dark:invert" />
        </button>
      </a>
    </footer>
  );
}
