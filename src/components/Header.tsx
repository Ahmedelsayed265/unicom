import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";
import LangMenu from "./LangMenu";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between bg-[#373C51] py-4 px-8 sticky top-0 shadow-md">
      <Link to="/" className="flex-1">
        <img src="/images/logo.png" alt="logo" className="h-[42px]" />
      </Link>

      <div className="flex items-center justify-center flex-2 gap-12">
        <NavLink to="/" className="text-white">
          {t("home")}
        </NavLink>

        <NavLink to="/about" className="text-white">
          {t("about")}
        </NavLink>

        <NavLink to="/terms" className="text-white">
          {t("terms")}
        </NavLink>

        <NavLink to="/privacy" className="text-white">
          {t("privacy")}
        </NavLink>
      </div>

      <div className="flex-1 flex justify-end">
        <LangMenu/>
      </div>
    </header>
  );
}
