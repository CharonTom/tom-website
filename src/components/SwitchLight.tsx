import Sun from "../assets/logos/Sun.svg?react";
import Moon from "../assets/logos/Moon.svg?react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/LightContext";

const LightMode = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { toggleTheme, theme } = themeContext;

  const checked = theme === "dark" ? true : false;

  return (
    <div className="dark_mode flex">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={checked}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Moon />
        <Sun />
      </label>
    </div>
  );
};

export default LightMode;
