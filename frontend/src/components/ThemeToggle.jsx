import React from "react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`
        flex w-16 h-8 p-1 rounded-full border transition-all duration-300
        ${
          isDark
            ? "bg-[#18181b] border-[#27272a]"
            : "bg-[#fafafa] border-[#e4e4e7]"
        }
        ${className}
      `}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span
        className={`
          flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300
          ${
            isDark
              ? "translate-x-8 bg-[#27272a] text-[#fafafa]"
              : "translate-x-0 bg-[#e4e4e7] text-[#18181b]"
          }
        `}
      >
        {isDark ? (
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </span>
    </button>
  );
}
