import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSettingsStore } from "@/utils/settingsStore";
import { ChevronDown } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import i18next from "i18next";

export default function LangMenu() {
  const { setLanguage } = useSettingsStore();
  const queryClient = useQueryClient();

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
    queryClient.clear();

    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("en", selectedLanguage === "en");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-md bg-white flex items-center justify-center gap-3 p-2">
          <img src="/images/lang.svg" alt="lang" /> اللغة <ChevronDown width={16} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col gap-1">
        <DropdownMenuRadioItem
          value="العربيه"
          className="ps-4 cursor-pointer"
          onClick={() => handleLanguageChange("ar")}
        >
          العربية
        </DropdownMenuRadioItem>

        <DropdownMenuRadioItem
          value="english"
          className="ps-4 cursor-pointer"
          onClick={() => handleLanguageChange("en")}
        >
          English
        </DropdownMenuRadioItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
