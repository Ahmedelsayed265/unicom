import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSellerRegistration } from "@/features/auth/SellerRegistrationContextType";
import { step1Schema, type Step1FormData } from "@/features/auth/schema";
import useGetCities from "@/hooks/useGetCities";
import useGetMarkets from "@/hooks/useGetMarkets";

export default function CreateAccount() {
  const { t } = useTranslation();
  const { data: cities } = useGetCities();
  const [selectedCity, setSelectedCity] = useState<string>("");
  const { data: markets } = useGetMarkets(selectedCity);
  const navigate = useNavigate();
  const { updateFormData } = useSellerRegistration();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      area: "",
      market_id: "",
    },
  });

  const onSubmit = (data: Step1FormData) => {
    updateFormData(data);
    navigate("/create-seller-2");
  };

  return (
    <div className="auth_page min-h-[665px] flex items-center justify-center py-20 px-4">
      <title>{t("create_account")}</title>

      <div className="bg-white w-[min(700px,100%-16px)] py-10 px-12 custom_round shadow-md ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#444]">
                المنطقة
              </label>
              <Controller
                name="area"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedCity(value);
                    }}
                  >
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
                )}
              />
              {errors.area && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.area.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-[#444]">
                السوق
              </label>
              <Controller
                name="market_id"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
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
                )}
              />
              {errors.market_id && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.market_id.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white  text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition"
          >
            التالي
          </button>
        </form>
      </div>
    </div>
  );
}