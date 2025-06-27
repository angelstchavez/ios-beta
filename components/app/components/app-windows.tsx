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
    <div className="absolute top-4 left-4 right-4 bottom-26 bg-white shadow-xl rounded-xl border border-gray-300 flex flex-col z-20 overflow-hidden">
      {/* Barra superior */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <img src={app.icon} alt={app.name} className="w-5 h-5" />
          <span className="font-medium text-gray-800">{app.name}</span>
        </div>
        <button
          onClick={() => onClose(app.id)}
          className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 hover:bg-red-600 text-white text-sm flex items-center justify-center rounded-full"
        >
          ×
        </button>
      </div>

      {/* Contenido */}
      <div className="flex-1 p-4 overflow-auto text-gray-700">
        <p>
          Esto simula una ventana abierta de <strong>{app.name}</strong>.
        </p>
      </div>
    </div>
  );
};

export default AppWindow;
