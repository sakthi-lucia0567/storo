"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./Icons";
const DarkModeToggler = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex lg:flex-1">
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="text-lg font-semibold leading-6 dark:text-white"
        aria-label="theme_btn"
      >
        {theme === "dark" ? (
          <SunIcon strokeWidth={1.5} size={20} />
        ) : (
          <MoonIcon strokeWidth={1.5} size={20} />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggler;
