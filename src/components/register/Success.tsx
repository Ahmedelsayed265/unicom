import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function Success() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
      <title>{t("create_account")}</title>

      <div className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
        <div className="flex items-center justify-center gap-6 flex-col">
          <h1 className="text-[#126C9E] text-2xl font-bold ">
            تم إنشاء حسابك بنجاح! 🎉
          </h1>
          <p className="text-[#666] text-lg">شكرًا لانضمامك إلينا</p>
        </div>

        <div className="m-10 text-center">
          <p className="text-[#444]  mb-4 font-bold">
            هذا هو رقم المتجر الخاص بك
          </p>

          <div className="relative max-w-xs mx-auto">
            <input
              value="STU0000"
              readOnly
              className="h-14 text-2xl font-bold text-center tracking-widest text-[#232633]
                           bg-[#126C9E33] border-[#d6d6d6] rounded-xl focus:ring-4 focus:ring-[#232633]/20
                           shadow-inner"
            />
          </div>
        </div>
        <button
          className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white  text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition"
          onClick={() => navigate("/login")}
        >
          ابدا الان
        </button>
      </div>
    </div>
  );
}
