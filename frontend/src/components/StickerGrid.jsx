import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const STICKERS = Array.from(
  { length: 200 },
  (_, i) => `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${i + 1}`
);

const PAGE_SIZE = 40;

export default function StickerGrid() {
  const [items, setItems] = useState(STICKERS.slice(0, PAGE_SIZE));
  const [page, setPage] = useState(1);
  const loader = useRef();

  // Infinite scroll
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && items.length < STICKERS.length) {
        setTimeout(() => {
          setItems((prev) =>
            STICKERS.slice(
              0,
              Math.min(prev.length + PAGE_SIZE, STICKERS.length)
            )
          );
          setPage((p) => p + 1);
        }, 400);
      }
    },
    [items.length]
  );

  useEffect(() => {
    const option = { root: null, rootMargin: "20px", threshold: 0 };
    const observer = new window.IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="w-full max-w-6xl mx-auto px-2 py-8">
      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
          gap-4
        "
      >
        {items.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
            className="
              bg-white dark:bg-[#18181b] rounded-xl shadow
              flex items-center justify-center aspect-square overflow-hidden
              border border-[#e4e4e7] dark:border-[#27272a]
            "
          >
            <img
              src={src}
              alt={`Sticker ${i + 1}`}
              className="w-5/6 h-5/6 object-contain"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
      <div ref={loader} className="h-8" />
    </div>
  );
}
