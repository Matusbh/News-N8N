import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  function handleClick() {
    //el prev es el valor anterior del estado, lo usamos para cambiarlo al contrario
    setDark((prev) => !prev);
  }

  return (
    <>
      <nav className="fill top-0 w-full flex justify-between items-center px-6 py-4 mx-auto bg-[#131318]/70 backdrop-blur-xl border-b rounded-b-xl border-white/10 shadow-[0_0_15px_rgba(124,58,237,0.1)] z-50">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-primary-container to-secondary-container">
            AutoDash
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="p-2 text-slate-400 hover:bg-white/5 rounded-full transition-all duration-300 active:scale-95 opacity-80"
            onClick={handleClick}
          >
            <img
              src={dark ? "../public/svg/sun.svg" : "../public/svg/moon.svg"}
              alt={dark ? "sun icon" : "moon icon"}
              className="w-5 h-5 invert"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
