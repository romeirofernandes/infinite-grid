import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import StickerGrid from "./components/StickerGrid";

const App = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] transition-colors">
      <header className="flex justify-between items-center px-4 py-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold font-dm-sans tracking-tight">
          Infinite Sticker Grid
        </h1>
        <ThemeToggle />
      </header>
      <main>
        <StickerGrid />
      </main>
    </div>
  </ThemeProvider>
);

export default App;
