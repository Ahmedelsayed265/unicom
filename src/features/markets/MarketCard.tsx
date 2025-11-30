import type { Seller } from "./useGetSellers";

export default function MarketCard({ market }: { market: Seller }) {
  return (
    <div className="bg-white p-6 rounded-[16px] flex flex-col">
      <div className="flex items-center justify-between border-b border-[#f4f4f4] py-3">
        <div className="flex items-center gap-2">
          <img
            src="/images/material-symbols_store.svg"
            className="w-6"
            alt=""
          />
          <h6>اسم السوق : {market.market.name}</h6>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/mdi_store-cog.svg" className="w-6" alt="" />
          <h6> اسم المخزن : {market.name}</h6>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-[#f4f4f4] py-3">
        <div className="flex items-center gap-2">
          <img src="/images/solar_box-broken.svg" className="w-6" alt="" />
          <h6> اسم المنتج : {market.product_type.name}</h6>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/duo-icons_id-card.svg" className="w-6" alt="" />
          <h6> رقم الهوية : {market.freelance_national_id || "غير متاح"}</h6>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-[#f4f4f4] py-3">
        <div className="flex items-center gap-2">
          <img
            src="/images/fluent_rename-16-filled.svg"
            className="w-6"
            alt=""
          />
          <h6> نوع السوق : {market.market_type.name}</h6>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/images/material-symbols-light_box-add.svg"
            className="w-6"
            alt=""
          />
          <h6> عدد المنتجات : {market.area}</h6>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-[#f4f4f4] py-3">
        <div className="flex items-center gap-2">
          <img src="/images/hugeicons_date-time.svg" className="w-6" alt="" />
          <h6> تاريخ الإنشاء : {new Date(market.created_at).toLocaleDateString("ar-EG")}</h6>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/images/duo-icons_location (1).svg"
            className="w-6"
            alt=""
          />
          <h6> الموقع : {market.market.city.name}،السعودية</h6>
        </div>
      </div>

      <div className="py-3 flex flex-col gap-2">
        <h6>الحالة</h6>
        <div className="h-[32px] rounded-full bg-gray-100">
          <span
            className={`w-full h-full rounded-full flex items-center justify-center text-white ${
              market.status === "active" ? "bg-[#0C6900]" : "bg-[#9E3012]"
            }`}
          >
            {market.status_name}
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button className="py-2 px-5 bg-[#40465C] rounded-[8px] flex items-center gap-2 text-white">
          <img
            src="/images/icon-park-outline_more-app.svg"
            className="w-[20px]"
            alt=""
          />{" "}
          تفاصيل
        </button>
        <button className="py-2 px-5 bg-[#000000] rounded-[8px] flex items-center gap-2 text-white">
          <img src="/images/tabler_edit.svg" className="w-[20px]" alt="" />{" "}
          تعديل
        </button>
        <button className="py-2 px-5 bg-[#9E3012] rounded-[8px] flex items-center gap-2 text-white">
          <img
            src="/images/material-symbols_delete.svg"
            className="w-[20px]"
            alt=""
          />{" "}
          حذف
        </button>
      </div>
    </div>
  );
}
