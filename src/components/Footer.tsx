import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#40465C] py-5 flex justify-center">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} {t("companyName")}. {t("rights")}
      </p>
    </div>
  );
}
