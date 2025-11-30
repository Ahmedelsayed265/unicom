import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import MarketCard from "@/features/markets/MarketCard";
import useGetSellers from "@/features/markets/useGetSellers";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetSellers();

  return (
    <div className="py-6 md:px-20 px-3 flex flex-col gap-6">
      <div className="flex items-center justify-between px-4">
        <div>
          <h4 className="text-[#126C9E] font-bold text-[24px] mb-3">
            {t("title")}
          </h4>
          <p>{t("subtitle")}</p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/create-seller-1"
            className="bg-[#126C9E] py-2 px-4 rounded-[12px]"
          >
            <img src="/images/ic_round-plus.svg" alt="" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <Skeleton key={index} className="h-96 rounded-xl bg-white" />
            ))
          : data?.data.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
      </div>
    </div>
  );
}
