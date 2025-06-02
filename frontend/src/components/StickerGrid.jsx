import React, { useRef, useEffect, useState } from "react";

const IMAGES = [
  "WhatsApp Image 2025-06-02 at 16.20.28.jpeg",
  "WhatsApp Image 2025-06-02 at 16.20.35.jpeg",
  "WhatsApp Image 2025-06-02 at 16.20.45.jpeg",
  "WhatsApp Image 2025-06-02 at 16.20.50.jpeg",
  "WhatsApp Image 2025-06-02 at 16.20.56.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.03.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.09.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.14.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.21.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.26.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.30.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.36.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.48.jpeg",
  "WhatsApp Image 2025-06-02 at 16.21.58.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.03.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.09.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.14.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.20.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.25.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.31.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.36.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.43.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.49.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.54.jpeg",
  "WhatsApp Image 2025-06-02 at 16.22.59.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.05.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.10.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.15.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.20.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.26.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.31.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.36.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.41.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.47.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.53.jpeg",
  "WhatsApp Image 2025-06-02 at 16.23.58.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.03.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.07.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.12.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.17.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.21.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.27.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.31.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.35.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.40.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.45.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.50.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.54.jpeg",
  "WhatsApp Image 2025-06-02 at 16.24.59.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.04.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.09.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.13.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.18.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.23.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.27.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.31.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.36.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.40.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.44.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.49.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.53.jpeg",
  "WhatsApp Image 2025-06-02 at 16.25.57.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.02.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.07.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.12.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.17.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.21.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.27.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.32.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.37.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.42.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.46.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.51.jpeg",
  "WhatsApp Image 2025-06-02 at 16.26.55.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.00.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.04.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.09.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.13.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.17.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.22.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.26.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.30.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.34.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.39.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.43.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.48.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.51.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.55.jpeg",
  "WhatsApp Image 2025-06-02 at 16.27.59.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.03.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.07.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.16.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.20.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.25.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.32.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.37.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.40.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.44.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.48.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.52.jpeg",
  "WhatsApp Image 2025-06-02 at 16.28.57.jpeg",
  "WhatsApp Image 2025-06-02 at 16.29.02.jpeg",
  "WhatsApp Image 2025-06-02 at 16.29.06.jpeg",
  "WhatsApp Image 2025-06-02 at 16.29.11.jpeg",
  "WhatsApp Image 2025-06-02 at 16.29.15.jpeg",
];

const GRID_SIZE = 100000;
const GAP = 32; // px, space between images

function pseudoRandom(x, y) {
  const seed = (x * 73856093) ^ (y * 19349663);
  return Math.abs(seed) % IMAGES.length;
}

export default function StickerGrid() {
  const gridRef = useRef(null);
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollLeft = GRID_SIZE / 2 - viewport.width / 2;
      gridRef.current.scrollTop = GRID_SIZE / 2 - viewport.height / 2;
    }
  }, [viewport.width, viewport.height]);

  useEffect(() => {
    const onResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [scroll, setScroll] = useState({
    left: GRID_SIZE / 2 - viewport.width / 2,
    top: GRID_SIZE / 2 - viewport.height / 2,
  });

  const handleScroll = (e) => {
    setScroll({
      left: e.target.scrollLeft,
      top: e.target.scrollTop,
    });
  };

  // Grid settings
  const CELL_SIZE = 250; // px, cell size (image + gap)
  const cols = Math.ceil(viewport.width / CELL_SIZE) + 6;
  const rows = Math.ceil(viewport.height / CELL_SIZE) + 6;
  const startCol = Math.floor(scroll.left / CELL_SIZE) - 3;
  const startRow = Math.floor(scroll.top / CELL_SIZE) - 3;

  // Generate positions for visible images in a grid
  const images = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const gridX = startCol + col;
      const gridY = startRow + row;
      const idx = pseudoRandom(gridX, gridY);
      images.push({
        x: gridX * CELL_SIZE + GAP / 2,
        y: gridY * CELL_SIZE + GAP / 2,
        src: "/" + IMAGES[idx],
        key: `${gridX}-${gridY}`,
      });
    }
  }

  const handleCopy = (src) => {
    navigator.clipboard.writeText(window.location.origin + src);
  };

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 overflow-scroll bg-[#fafafa] dark:bg-[#09090b] select-none"
      style={{
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      onScroll={handleScroll}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      <div
        className="relative"
        style={{
          width: GRID_SIZE,
          height: GRID_SIZE,
        }}
      >
        {images.map((img) => (
          <img
            key={img.key}
            src={img.src}
            alt=""
            draggable={false}
            className="pointer-events-auto transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              position: "absolute",
              left: img.x,
              top: img.y,
              userSelect: "none",
              background: "transparent",
              maxWidth: CELL_SIZE - GAP,
              maxHeight: CELL_SIZE - GAP,
              objectFit: "contain",
            }}
            onClick={() => handleCopy(img.src)}
            title="Click to copy image URL"
          />
        ))}
      </div>
    </div>
  );
}
