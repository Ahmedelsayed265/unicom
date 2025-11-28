import InputField from "@/components/InputField";
import PasswordField from "@/components/PasswordField";
import SubmitBtn from "@/components/SubmitBtn";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Login() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center py-20 auth_page">
      <title>{t("login")}</title>

      <form className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
        <h4 className="text-center text-[20px] text-[#126C9E] font-bold mb-4">
          {t("loginTitle")}
        </h4>

        <p className="text-center text-[#4F4F4F] mb-8">{t("logindesc")}</p>

        <div className="flex flex-col justify-center gap-4">
          <InputField
            label={t("user_name")}
            placeholder={t("enter_user_name")}
          />
          <PasswordField
            label={t("password")}
            placeholder={t("enter_password")}
          />

          <Link to="/forget-password" className="text-end">
            {t("forget")}
          </Link>

          <SubmitBtn text={t("login")} />

          <Link
            to="/choose-account"
            className=" flex justify-center p-3 border border-dashed border-[#373C51] rounded-[8px]"
          >
            {t("register")}
          </Link>
        </div>
      </form>
    </div>
  );
}
