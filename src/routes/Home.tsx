import MarketCard from "@/features/markets/MarketCard";

export default function Home() {
  return (
    <div className="py-6 px-20 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-[#126C9E] font-bold text-[24px] mb-3">أسواقي</h4>
          <p>تتبع بيانات الأسواق واضف أسواق جديدة بسهولة</p>
        </div>

        <div className="flex items-center gap-2">
          <form className="flex items-center gap-2 min-w-[450px] bg-white py-3 px-4 rounded-[12px]">
            <img src="/images/Vector.svg" alt="" />
            <input type="text" placeholder="ابحث في الاسواق" />
          </form>

          <button className="bg-[#126C9E] py-2 px-4 rounded-[12px]">
            <img src="/images/ic_round-plus.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {Array.from({ length: 4 }, (_, i) => (
          <MarketCard key={i} />
        ))}
      </div>
    </div>
  );
}
