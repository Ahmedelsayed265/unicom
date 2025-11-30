import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function ChooseAccountType() {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute top-[18%] md:start-20 flex items-start gap-4 start-4">
        <div className="w-[8px] h-[55px] bg-white rounded-sm"></div>

        <div className="px-2">
          <h1 className="text-[#126C9E] font-bold text-[20px] mb-3 leading-tight">
            {t("chooseAccount.title")}
          </h1>

          <p className="text-[#666874]">{t("chooseAccount.subtitle")}</p>
        </div>
      </div>

      <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
        <title>{t("chooseAccount.title")}</title>

        <div className="bg-white w-[min(600px,100%-16px)] py-8 md:px-14 px-6 md:custom_round rounded-lg">
          <div className="flex items-center gap-6">
            {/* Employee */}
            <Link
              to="/register"
              className="bg-[#EBEBEB] flex-1 flex flex-col gap-2 items-center justify-center p-4 rounded-[16px]"
            >
              <img src="/images/employee.svg" alt="" />
              <h5>{t("chooseAccount.employee")}</h5>
              <p>{t("chooseAccount.employeeRegister")}</p>
            </Link>

            {/* Seller */}
            <Link
              to="/create-seller-1"
              className="bg-[#EBEBEB] flex-1 flex flex-col gap-2 items-center justify-center p-4 rounded-[16px]"
            >
              <img src="/images/market.svg" alt="" />
              <h5>{t("chooseAccount.seller")}</h5>
              <p>{t("chooseAccount.sellerRegister")}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
