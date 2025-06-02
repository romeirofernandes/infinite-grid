import React from "react";
import StickerGrid from "./components/StickerGrid";

const App = () => (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="fixed top-0 left-0 w-full z-20 flex justify-center pointer-events-none">
        <div className="flex items-center gap-4 bg-white/80 rounded-b-xl px-6 py-3 mt-2 shadow-lg pointer-events-auto">
          <h1 className="text-2xl font-bold font-dm-sans tracking-tight text-center">
            Infinite Sticker Grid
          </h1>
        </div>
      </header>
      <main>
        <StickerGrid />
      </main>
    </div>
  );

export default App;
