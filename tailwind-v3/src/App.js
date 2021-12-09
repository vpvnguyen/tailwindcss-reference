import { useEffect, useState } from "react";
import { applyTheme, LIGHT_THEME, DARK_THEME } from "./theme";

export default function App() {
  const [theme, setTheme] = useState(LIGHT_THEME);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="bg-primary-background flex flex-col h-screen">
      <h1>Tailwind V3</h1>
      <button
        className="border border-black rounded-lg p-1"
        onClick={() => {
          setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
        }}
      >
        Switch Theme
      </button>
    </div>
  );
}
