/* eslint-disable @next/next/no-img-element */
import React from "react";

interface AppWindowProps {
  app: {
    id: string;
    name: string;
    icon: string;
  };
  onClose: (id: string) => void;
}

const AppWindow: React.FC<AppWindowProps> = ({ app, onClose }) => {
  return (
    <div className="absolute top-4 left-4 right-4 bottom-24 bg-neutral-800 shadow-xl rounded-xl border border-neutral-700 flex flex-col z-20 overflow-hidden">
      {/* Barra superior */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-700 border-b border-neutral-700">
        <div className="flex items-center gap-2">
          <img src={app.icon} alt={app.name} className="w-5 h-5" />
          <span className="font-medium text-white">{app.name}</span>
        </div>
        <button
          onClick={() => onClose(app.id)}
          className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 hover:bg-red-600 text-neutral-100 text-sm flex items-center justify-center rounded-full"
        >
          ×
        </button>
      </div>

      {/* Contenido */}
      <div className="flex-1 p-4 overflow-auto text-neutral-300">
        <p>
          Esto simula una ventana abierta de <strong>{app.name}</strong>.
        </p>
      </div>
    </div>
  );
};

export default AppWindow;
