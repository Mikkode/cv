"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { dictionaries, Locale } from "@/i18n/dictionaries";

type LanguageContextType = {
  locale: Locale;
  dictionary: typeof dictionaries.fr;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  const dictionary = dictionaries[locale];

  return (
    <LanguageContext.Provider value={{ locale, dictionary, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
