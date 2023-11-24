import { ChangeEvent, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function SwitchLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  const switchLang = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <select
      value={language}
      onChange={switchLang}
      aria-label="Sélection de la langue"
      className="bg-dark-switch dark:bg-bgLightMode font-primary text-sm dark:text-secondary rounded-2xl h-[26px] w-[50px] input {
        focus:outline-none pl-1
      } "
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <option className="text-sm">FR</option>
      <option className="text-sm">EN</option>
    </select>
  );
}
