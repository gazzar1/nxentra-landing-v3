"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";

const dict: Record<Lang, Record<string, string>> = {
  en: {
    navModules: "Modules",
    navWhy: "Why Nxentra",
    navHow: "How it works",
    navContact: "Contact",
    ctaTry: "Start free",
    ctaDemo: "Watch demo",
    heroTag: "The ERP that ingests everything",
    heroH1a: "Your Shopify store deserves",
    heroH1b: "real accounting.",
    heroSub: "Nxentra connects your Shopify, Stripe, POS, and bank feeds into one financial truth. Auto-reconciled. Multi-currency. Audit-ready from day one.",
    modulesTitle: "One platform. Every module.",
    modulesSub: "Stop stitching together disconnected tools. Nxentra gives you a complete operating system for your business.",
    whyTitle: "Why teams switch to Nxentra",
    whySub: "Built different from legacy ERPs. Every transaction is an immutable event. Every report is derived, never manually fixed.",
    howTitle: "How it works",
    howSub: "Three engines. Zero guesswork.",
    videoTitle: "See Nxentra in action",
    videoSub: "Watch how Nxentra turns disconnected data into financial clarity.",
    contactTitle: "Ready to take control?",
    contactSub: "Get in touch and we will set you up in minutes.",
    footer: "Nxentra",
    quickLinks: "Quick links",
  },
  ar: {
    navModules: "\u0627\u0644\u0648\u062d\u062f\u0627\u062a",
    navWhy: "\u0644\u0645\u0627\u0630\u0627 Nxentra",
    navHow: "\u0643\u064a\u0641 \u064a\u0639\u0645\u0644",
    navContact: "\u062a\u0648\u0627\u0635\u0644",
    ctaTry: "\u0627\u0628\u062f\u0623 \u0645\u062c\u0627\u0646\u0627\u064b",
    ctaDemo: "\u0634\u0627\u0647\u062f \u0627\u0644\u0639\u0631\u0636",
    heroTag: "\u0646\u0638\u0627\u0645 ERP \u064a\u0633\u062a\u0648\u0639\u0628 \u0643\u0644 \u0634\u064a\u0621",
    heroH1a: "\u0645\u062a\u062c\u0631\u0643 \u0639\u0644\u0649 Shopify \u064a\u0633\u062a\u062d\u0642",
    heroH1b: "\u0645\u062d\u0627\u0633\u0628\u0629 \u062d\u0642\u064a\u0642\u064a\u0629.",
    heroSub: "Nxentra \u064a\u0631\u0628\u0637 Shopify \u0648Stripe \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064a\u0639 \u0648\u0627\u0644\u0628\u0646\u0648\u0643 \u0641\u064a \u062d\u0642\u064a\u0642\u0629 \u0645\u0627\u0644\u064a\u0629 \u0648\u0627\u062d\u062f\u0629. \u0645\u0637\u0627\u0628\u0642\u0629 \u062a\u0644\u0642\u0627\u0626\u064a\u0629. \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0639\u0645\u0644\u0627\u062a. \u062c\u0627\u0647\u0632 \u0644\u0644\u062a\u062f\u0642\u064a\u0642 \u0645\u0646 \u0627\u0644\u064a\u0648\u0645 \u0627\u0644\u0623\u0648\u0644.",
    modulesTitle: "\u0645\u0646\u0635\u0629 \u0648\u0627\u062d\u062f\u0629. \u0643\u0644 \u0627\u0644\u0648\u062d\u062f\u0627\u062a.",
    modulesSub: "\u062a\u0648\u0642\u0641 \u0639\u0646 \u0631\u0628\u0637 \u0623\u062f\u0648\u0627\u062a \u0645\u0646\u0641\u0635\u0644\u0629. Nxentra \u064a\u0639\u0637\u064a\u0643 \u0646\u0638\u0627\u0645 \u062a\u0634\u063a\u064a\u0644 \u0643\u0627\u0645\u0644 \u0644\u0639\u0645\u0644\u0643.",
    whyTitle: "\u0644\u0645\u0627\u0630\u0627 \u064a\u0646\u062a\u0642\u0644\u0648\u0646 \u0625\u0644\u0649 Nxentra",
    whySub: "\u0645\u0628\u0646\u064a \u0628\u0634\u0643\u0644 \u0645\u062e\u062a\u0644\u0641 \u0639\u0646 \u0623\u0646\u0638\u0645\u0629 ERP \u0627\u0644\u062a\u0642\u0644\u064a\u062f\u064a\u0629. \u0643\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u062d\u062f\u062b \u063a\u064a\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u0639\u062f\u064a\u0644. \u0643\u0644 \u062a\u0642\u0631\u064a\u0631 \u0645\u0634\u062a\u0642\u060c \u0644\u064a\u0633 \u0645\u0639\u062f\u0644\u0627\u064b \u064a\u062f\u0648\u064a\u0627\u064b.",
    howTitle: "\u0643\u064a\u0641 \u064a\u0639\u0645\u0644",
    howSub: "\u062b\u0644\u0627\u062b\u0629 \u0645\u062d\u0631\u0643\u0627\u062a. \u0635\u0641\u0631 \u062a\u062e\u0645\u064a\u0646.",
    videoTitle: "\u0634\u0627\u0647\u062f Nxentra \u0639\u0645\u0644\u064a\u0627\u064b",
    videoSub: "\u0634\u0627\u0647\u062f \u0643\u064a\u0641 \u064a\u062d\u0648\u0644 Nxentra \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062a\u0641\u0631\u0642\u0629 \u0625\u0644\u0649 \u0648\u0636\u0648\u062d \u0645\u0627\u0644\u064a.",
    contactTitle: "\u0645\u0633\u062a\u0639\u062f \u0644\u0644\u0633\u064a\u0637\u0631\u0629\u061f",
    contactSub: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0648\u0633\u0646\u0639\u062f\u0643 \u0641\u064a \u062f\u0642\u0627\u0626\u0642.",
    footer: "Nxentra",
    quickLinks: "\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629",
  },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  dir: "ltr",
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("nx_lang") as Lang | null;
    if (stored && (stored === "en" || stored === "ar")) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("nx_lang", l);
  };

  const t = (key: string) => dict[lang]?.[key] ?? dict.en?.[key] ?? key;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
