import DeleteModal from "@/components/DeleteModal";
import type { Seller } from "./useGetSellers";
import { useTranslation } from "react-i18next";
import useDeleteSeller from "@/hooks/useDeleteSeller";

export default function MarketCard({ market }: { market: Seller }) {
  const { t } = useTranslation();
  const { deleteSellerAction, isPending } = useDeleteSeller();

  return (
    <div className="bg-white p-6 rounded-[16px] flex flex-col">
      <div className="flex items-center flex-wrap justify-between border-b border-[#f4f4f4] py-3 gap-2">
        <div className="flex items-center gap-2">
          <img
            src="/images/material-symbols_store.svg"
            className="w-6"
            alt=""
          />
          <h6>
            {t("marketCard.marketName")} : {market.market.name}
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <img src="/images/mdi_store-cog.svg" className="w-6" alt="" />
          <h6>
            {t("marketCard.storeName")} : {market.name}
          </h6>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-between border-b border-[#f4f4f4] py-3 gap-2">
        <div className="flex items-center gap-2">
          <img src="/images/solar_box-broken.svg" className="w-6" alt="" />
          <h6>
            {t("marketCard.productName")} : {market.product_type.name}
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <img src="/images/duo-icons_id-card.svg" className="w-6" alt="" />
          <h6>
            {t("marketCard.nationalId")} :{" "}
            {market.freelance_national_id || t("marketCard.notAvailable")}
          </h6>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-between border-b border-[#f4f4f4] py-3 gap-2">
        <div className="flex items-center gap-2">
          <img
            src="/images/fluent_rename-16-filled.svg"
            className="w-6"
            alt=""
          />
          <h6>
            {t("marketCard.marketType")} : {market.market_type.name}
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="/images/material-symbols-light_box-add.svg"
            className="w-6"
            alt=""
          />
          <h6>
            {t("marketCard.productsCount")} : {market.area}
          </h6>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-between border-b border-[#f4f4f4] py-3 gap-2">
        <div className="flex items-center gap-2">
          <img src="/images/hugeicons_date-time.svg" className="w-6" alt="" />
          <h6>
            {t("marketCard.createdAt")} :
            {new Date(market.created_at).toLocaleDateString("ar-EG")}
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="/images/duo-icons_location (1).svg"
            className="w-6"
            alt=""
          />
          <h6>
            {t("marketCard.location")} :{market.market.city.name}،{" "}
            {t("marketCard.saudiArabia")}
          </h6>
        </div>
      </div>

      <div className="py-3 flex flex-col gap-2">
        <h6>{t("marketCard.status")}</h6>
        <div className="h-[32px] rounded-full bg-gray-100">
          <span
            className={`w-full h-full rounded-full flex items-center justify-center text-white ${
              market.status === "pending"
                ? "bg-[#F59E0B]"
                : market.status === "accepted"
                ? "bg-[#0C6900]"
                : "bg-[#9E3012]"
            }`}
          >
            {t(`marketCard.statuses.${market.status}`)}
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        {/* <button className="py-2 px-5 bg-[#40465C] rounded-[8px] flex items-center gap-2 text-white">
          <img
            src="/images/icon-park-outline_more-app.svg"
            className="w-[20px]"
            alt=""
          />
          {t("marketCard.details")}
        </button> */}

        <button className="py-2 px-5 bg-[#000000] rounded-[8px] flex items-center gap-2 text-white">
          <img src="/images/tabler_edit.svg" className="w-[20px]" alt="" />
          {t("marketCard.edit")}
        </button>

        <DeleteModal
          onConfirm={() => deleteSellerAction(market.id)}
          triggerElement={
            <button
              className="py-2 px-5 bg-[#9E3012] rounded-[8px] flex items-center gap-2 text-white"
              disabled={isPending}
            >
              {isPending ? (
                <div className="w-[20px] h-[20px] border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <img
                  src="/images/material-symbols_delete.svg"
                  className="w-[20px]"
                  alt=""
                />
              )}
              {t("marketCard.delete")}
            </button>
          }
        />
      </div>
    </div>
  );
}
