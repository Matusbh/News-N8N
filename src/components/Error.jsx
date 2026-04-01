import { TriangleAlert } from "lucide-react";

export default function Error({ message }) {
  return (
    <div className="flex items-start justify-center ">
      <div className="flex flex-col items-center gap-5 px-8 py-10 rounded-2xl bg-gray-900 border border-gray-800 max-w-md w-full mx-4 text-center">
        <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
          <TriangleAlert size={28} className="text-orange-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-white text-xl font-semibold tracking-tight">
            Error en la petición
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
}
