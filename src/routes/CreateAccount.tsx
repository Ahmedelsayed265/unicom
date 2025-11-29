import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetCities from "@/hooks/useGetCities";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router";
import useGetMarkets from "@/hooks/useGetMarkets";

export default function CreateAccount() {
  const { t } = useTranslation();
  const { data: cities } = useGetCities();
  const [selectedCity, setSelectedCity] = useState<string>("");
  const { data: markets } = useGetMarkets(selectedCity);
  const navigate = useNavigate();

  return (
    <div className="auth_page min-h-[665px] flex items-center justify-center py-20 px-4">
      <title>{t("create_account")}</title>

      <div className="bg-white w-[min(700px,100%-16px)] py-10 px-12 custom_round shadow-md ">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-semibold text-[#444]">
              المنطقة
            </label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full h-[50px] rounded-lg border-[#d6d6d6] bg-[#f9fafb] text-[#444] focus:ring-2 focus:ring-[#232633]">
                <SelectValue placeholder="اختر المنطقة" />
              </SelectTrigger>
              <SelectContent>
                {cities?.data?.map((city) => (
                  <SelectItem key={city.id} value={city.id.toString()}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#444]">
              السوق
            </label>
            <Select>
              <SelectTrigger className="w-full h-[50px] rounded-lg border-[#d6d6d6] bg-[#f9fafb] text-[#444] focus:ring-2 focus:ring-[#232633]">
                <SelectValue placeholder="اختر السوق" />
              </SelectTrigger>
              <SelectContent>
                {markets?.data?.map((market) => (
                  <SelectItem key={market.id} value={market.id.toString()}>
                    {market.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <button
          className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white  text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition"
          onClick={() => navigate("/register-step3")}
        >
          التالي
        </button>
      </div>
    </div>
  );
}
