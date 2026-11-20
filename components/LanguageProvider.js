'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { content } from '../data/i18n';

const LangContext = createContext({ lang: 'en', setLang: () => {}, t: content.en });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('porto-lang');
      if (saved === 'id' || saved === 'en') setLang(saved);
    } catch (e) {
      /* abaikan — tetap bahasa Inggris */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const change = (next) => {
    setLang(next);
    try {
      window.localStorage.setItem('porto-lang', next);
    } catch (e) {
      /* abaikan */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang: change, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
