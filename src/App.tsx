import { RouterProvider } from "react-router";
import { router } from "./providers/router";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { useSettingsStore } from "./utils/settingsStore";
import { DirectionProvider } from "@radix-ui/react-direction";
import { SellerRegistrationProvider } from "@/features/auth/SellerRegistrationContextType";
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
      <SellerRegistrationProvider>
        <RouterProvider router={router} />
      </SellerRegistrationProvider>
      <Toaster position="top-center" richColors />
    </DirectionProvider>
  );
}

export default App;
