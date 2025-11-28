import { create } from "zustand";

interface SettingsState {
  lang: string;
  setLanguage: (lang: string) => void;
}

export const useSettingsStore = create<SettingsState>()((set) => ({
  lang: localStorage.getItem("i18nextLng") || "en",

  setLanguage: (lang: string) => {
    localStorage.setItem("i18nextLng", lang);
    set({ lang });
  },
}));
