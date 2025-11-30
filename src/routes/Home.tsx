import { Link } from "react-router";
import MarketCard from "@/features/markets/MarketCard";
import useGetSellers from "@/features/markets/useGetSellers";
import useAuth from "@/lib/useAuth";

export default function Home() {
  const { isAuthed } = useAuth();
  const { data } = useGetSellers(isAuthed);

  return (
    <div className="py-6 px-20 flex flex-col gap-6">
      <div className="flex items-center justify-between px-4">
        <div>
          <h4 className="text-[#126C9E] font-bold text-[24px] mb-3">أسواقي</h4>
          <p>تتبع بيانات الأسواق واضف أسواق جديدة بسهولة</p>
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
        {data?.data.map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </div>
    </div>
  );
}
