import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function ChooseAccountType() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex p-6">
        <div className="w-[8px] h-[55px] bg-white rounded-sm"></div>

        <div className=" px-2">
          <h1 className="text-[#126C9E] font-bold">انشاء حسابك</h1>
          <p>تتبع بيانات الأسواق واضف أسواق جديدة بسهولة</p>
        </div>
      </div>
      <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
        <title>{t("create_account")}</title>
        {/* <div className="absolute top-[15%] right-10 flex items-start gap-3">
        <div className="w-[8px] h-[55px] bg-white rounded-sm"></div>

        <div>
          <h1 className="text-[#126C9E] font-bold text-[20px] leading-tight">
            انشاء حسابك
          </h1>
          <p className="text-[#666874] text-[15px] mt-1">
            تتبع بيانات الأسواق واضف أسواق جديدة بسهولة
          </p>
        </div>
      </div> */}
        <div className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
          <div className="flex items-center gap-6">
            <Link
              to="/register"
              className="bg-[#EBEBEB] flex-1 flex flex-col gap-2 items-center justify-center p-4 rounded-[16px]"
            >
              <img src="/images/employee.svg" alt="" />
              <h5>موظف</h5>
              <p>التسجيل ك موظف</p>
            </Link>

            <Link
              to="/create-seller-1"
              className="bg-[#EBEBEB] flex-1 flex flex-col gap-2 items-center justify-center p-4 rounded-[16px]"
            >
              <img src="/images/market.svg" alt="" />
              <h5>صاحب سوق</h5>
              <p>التسجيل ك . صاحب سوق</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
