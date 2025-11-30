import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function ChooseAccountType() {
  const { t } = useTranslation();
  return (
    <>
      {/* <div className="flex p-6">
        <div className="w-[8px] h-[55px] bg-white rounded-sm"></div>

        <div className=" px-2">
          <h1 className="text-[#126C9E] font-bold">{t("createAccount.title")}</h1>
          <p>{t("createAccount.subtitle")}</p>
        </div>
      </div> */}
      <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
        <title>{t("create_account")}</title>
        <div className="absolute top-[15%] start-10 flex items-start gap-3">
          <div className="w-[8px] h-[55px] bg-white rounded-sm"></div>

          <div>
            <h1 className="text-[#126C9E] font-bold text-[20px] leading-tight">
              {t("createAccount.title")}{" "}
            </h1>
            <p className="text-[#666874] text-[15px] mt-1">
              {t("createAccount.subtitle")}{" "}
            </p>
          </div>
        </div>
        <div className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
          <div className="flex items-center gap-6">
            <Link
              to="/register"
              className="bg-[#EBEBEB] flex-1 flex flex-col gap-2 items-center justify-center p-4 rounded-[16px]"
            >
              <img src="/images/employee.svg" alt="" />
              <h5>{t("accountType.employee")}</h5>
              <p>{t("accountType.registerEmployee")}</p>
            </Link>

            <Link
              to="/create-seller-1"
              className="bg-[#EBEBEB] flex-1 flex flex-col gap-2 items-center justify-center p-4 rounded-[16px]"
            >
              <img src="/images/market.svg" alt="" />
              <h5>{t("accountType.marketOwner")}</h5>
              <p>{t("accountType.registerMarketOwner")}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
