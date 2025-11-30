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
import { step1Schema, type Step1FormData } from "@/features/auth/schema";
import { useSellerRegistration } from "./SellerRegistrationContextType";
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

      {/* Title + Description */}
      <div className="absolute top-[18%] md:start-20 flex items-start gap-4 start-4">
        <div className="w-[8px] h-[65px] bg-white rounded-sm"></div>

        <div>
          <h1 className="text-[#126C9E] font-bold text-[20px] mb-3 leading-tight">
            {t("createAccount.title")}
          </h1>

          <p className="text-[#666874] text-[15px] mt-1">
            {t("createAccount.subtitle")}
          </p>
        </div>
      </div>

      {/* Form Box */}
      <div className="bg-white w-[min(600px,100%-16px)] py-8 md:px-14 px-8 md:custom_round rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            {/* AREA */}
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#444]">
                {t("createAccount.area")}
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
                      <SelectValue
                        placeholder={t("createAccount.selectArea")}
                      />
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
                  {t(errors.area.message as string)}
                </p>
              )}
            </div>

            {/* MARKET */}
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#444]">
                {t("createAccount.market")}
              </label>

              <Controller
                name="market_id"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full h-[50px] rounded-lg border-[#d6d6d6] bg-[#f9fafb] text-[#444] focus:ring-2 focus:ring-[#232633]">
                      <SelectValue
                        placeholder={t("createAccount.selectMarket")}
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {markets?.data?.map((market) => (
                        <SelectItem
                          key={market.id}
                          value={market.id.toString()}
                        >
                          {market.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.market_id && (
                <p className="text-red-500 text-sm mt-1">
                 {t(errors.market_id.message as string)}
                </p>
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition"
          >
            {t("createAccount.next")}
          </button>
        </form>
      </div>
    </div>
  );
}
