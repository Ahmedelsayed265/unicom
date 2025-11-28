import { RouterProvider } from "react-router";
import { router } from "./providers/router";
import { useEffect } from "react";
import { useSettingsStore } from "./utils/settingsStore";
import { DirectionProvider } from "@radix-ui/react-direction";
import i18n from "./utils/i18n";

function App() {
  const { lang } = useSettingsStore();

  useEffect(() => {
    localStorage.setItem("i18nextLng", lang);
    const html = document.documentElement;

    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <DirectionProvider dir={lang === "ar" ? "rtl" : "ltr"}>
      <RouterProvider router={router} />
    </DirectionProvider>
  );
}

export default App;
