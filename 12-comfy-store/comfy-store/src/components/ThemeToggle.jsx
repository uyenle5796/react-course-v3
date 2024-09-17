import { useState, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  const themes = {
    winter: "winter",
    dracula: "dracula",
  };

  const getThemeFromLocalStorage = () => {
    return localStorage.getItem("theme") || themes.winter;
  };

  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate ">
      <input type="checkbox" onChange={handleTheme} />
      <BsSunFill className="swap-on h-4 w-4" />
      <BsMoonFill className="swap-off h-4 w-4" />
    </label>
  );
}
