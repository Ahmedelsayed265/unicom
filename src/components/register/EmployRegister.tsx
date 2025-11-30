import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField";
import PasswordField from "@/components/PasswordField";
import useRegester from "./auth/useRegester";
import { registerSchema, type RegisterData } from "./auth/schema";

export default function EmployRegister() {
  const { t } = useTranslation();
  const { registerAction } = useRegester();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  return (
    <div className="flex items-center justify-center py-20 auth_page">
      <title>{t("register")}</title>

      <form
        className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round"
        onSubmit={handleSubmit((data) => registerAction(data))}
      >
        <h4 className="text-center text-[20px] text-[#126C9E] font-bold mb-4">
          {t("loginTitle")}
        </h4>

        <div className="flex flex-col justify-center gap-4">
          <InputField
            label={t("name")}
            placeholder={t("enter_your_name")}
            error={t(errors.name?.message as string)}
            {...register("name")}
          />
          <InputField
            label={t("email")}
            placeholder={t("enter_your_email")}
            error={t(errors.email?.message as string)}
            {...register("email")}
          />
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

          <button className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white  text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition">
            {t("register")}
          </button>
        </div>
      </form>
    </div>
  );
}
