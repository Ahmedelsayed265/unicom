import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginData } from "@/features/auth/schema";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField";
import PasswordField from "@/components/PasswordField";
import SubmitBtn from "@/components/SubmitBtn";
import useLogin from "@/features/auth/useLogin";

export default function Login() {
  const { t } = useTranslation();
  const { loginAction, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  return (
    <div className="flex items-center justify-center py-20 auth_page">
      <title>{t("login")}</title>

      <form
        className="bg-white w-[min(600px,100%-16px)] py-8 md:px-14 px-6 md:custom_round rounded-lg"
        onSubmit={handleSubmit((data) => loginAction(data))}
      >
        <h4 className="text-center text-[20px] text-[#126C9E] font-bold mb-4">
          {t("loginTitle")}
        </h4>

        <p className="text-center text-[#4F4F4F] mb-8">{t("logindesc")}</p>

        <div className="flex flex-col justify-center gap-4">
          <InputField
            label={t("phone_number")}
            placeholder={t("enter_phone_number")}
            error={t(errors.phone?.message as string)}
            {...register("phone")}
          />

          <PasswordField
            label={t("password")}
            placeholder={t("enter_password")}
            error={t(errors.password?.message as string)}
            {...register("password")}
          />

          <SubmitBtn text={t("login")} loading={isPending} />

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
