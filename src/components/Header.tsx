import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import LangMenu from "./LangMenu";
import useAuth from "@/lib/useAuth";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { isAuthed } = useAuth();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#373C51] py-4 px-6 sticky top-0 shadow-md z-[50]">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex-1">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-[36px] md:h-[42px] transition-all"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center flex-2 gap-10">
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

        {/* Actions */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {!isAuthed && (
            <Link
              to="login"
              className="hidden md:block rounded-md bg-white p-2 px-4"
            >
              {t("login")}
            </Link>
          )}

          <LangMenu />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* FLOATING MENU */}
      {open && (
        <div
          className="
            absolute left-0 right-0
            mt-4
            md:hidden
            bg-[#2F3447]
            p-5
            shadow-lg
            flex flex-col gap-4
            animate-fade-in
            z-[999]
          "
          style={{ position: "absolute" }}
        >
          <NavLink to="/" className="text-white" onClick={() => setOpen(false)}>
            {t("home")}
          </NavLink>

          <NavLink
            to="/about"
            className="text-white"
            onClick={() => setOpen(false)}
          >
            {t("about")}
          </NavLink>

          <NavLink
            to="/terms"
            className="text-white"
            onClick={() => setOpen(false)}
          >
            {t("terms")}
          </NavLink>

          <NavLink
            to="/privacy"
            className="text-white"
            onClick={() => setOpen(false)}
          >
            {t("privacy")}
          </NavLink>

          {!isAuthed && (
            <Link
              to="login"
              className="rounded-md bg-white w-fit py-2 px-4"
              onClick={() => setOpen(false)}
            >
              {t("login")}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
