"use client";

import AppWindow from "@/components/app/components/app-windows";
import MacOSDock from "@/components/app/components/dock";
import React, { useState } from "react";

const sampleApps = [
  {
    id: "finder",
    name: "Finder",
    icon: "https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024",
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: "https://cdn.jim-nielsen.com/macos/1024/calculator-2021-04-29.png?rf=1024",
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: "https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024",
  },
  {
    id: "mail",
    name: "Mail",
    icon: "https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024",
  },
  {
    id: "notes",
    name: "Notes",
    icon: "https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024",
  },
  {
    id: "safari",
    name: "Safari",
    icon: "https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024",
  },
  {
    id: "photos",
    name: "Photos",
    icon: "https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024",
  },
  {
    id: "music",
    name: "Music",
    icon: "https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024",
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: "https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024",
  },
];

const Page: React.FC = () => {
  const [openApp, setOpenApp] = useState<string | null>(null);

  const handleAppClick = (appId: string) => {
    setOpenApp((prev) => (prev === appId ? null : appId));
  };

  const handleClose = () => {
    setOpenApp(null);
  };

  const app = sampleApps.find((a) => a.id === openApp);

  return (
    <div className="relative h-screen w-screen bg-neutral-900 overflow-hidden">
      {/* Ventana abierta */}
      {app && <AppWindow app={app} onClose={handleClose} />}

      {/* Dock anclado */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <MacOSDock
          apps={sampleApps}
          onAppClick={handleAppClick}
          openApps={openApp ? [openApp] : []} // Dock puede seguir mostrando el estado
        />
      </div>
    </div>
  );
};

export default Page;
