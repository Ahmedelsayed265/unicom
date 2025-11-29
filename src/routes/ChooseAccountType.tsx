import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function ChooseAccountType() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
      <title>{t("create_account")}</title>

      <div className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
        <div className="flex items-center gap-6">
          <Link to="/register-step2" className="bg-[#EBEBEB] flex-1 flex flex-col gap-2 items-center justify-center p-4 rounded-[16px]">
            <img src="/images/employee.svg" alt="" />
            <h5>موظف</h5>
            <p>التسجيل ك موظف</p>
          </Link>

          <Link to="/register-step2" className="bg-[#EBEBEB] flex-1 flex flex-col gap-2 items-center justify-center p-4 rounded-[16px]">
            <img src="/images/market.svg" alt="" />
            <h5>صاحب سوق</h5>
            <p>التسجيل ك . صاحب سوق</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
