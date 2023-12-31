import { createContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (newTheme: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "",
  setLanguage: () => {},
});

const langData = localStorage.getItem("selectedLang") || "FR";

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState(langData);

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    window.localStorage.setItem("selectedLang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
