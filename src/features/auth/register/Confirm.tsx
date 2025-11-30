import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { step3Schema, type Step3FormData } from "../schema";
import { createSeller, updateSeller } from "../sellerApi";
import { useSellerRegistration } from "./SellerRegistrationContextType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputField from "@/components/InputField";
import useGetMarketTypes from "@/hooks/useGetMarketTypes";
import useGetProductsTypes from "@/hooks/useGetProductsTypes";
import useGetSellers from "@/features/markets/useGetSellers";

export default function Confirm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { refetch } = useGetSellers(true);
  const { formData, resetFormData } = useSellerRegistration();
  const { data: marketTypes } = useGetMarketTypes();
  const { data: productsTypes } = useGetProductsTypes();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      name: (formData as any).name ?? "",
      gender: (formData as any).gender ?? "male",
      market_type_id: (formData as any).market_type_id ?? "",
      product_type_id: (formData as any).product_type_id ?? "",
      area: (formData as any).area_store ?? "",
    },
  });

  const createSellerMutation = useMutation({
    mutationFn: async (payload: any) => {
      if ((formData as any).seller_id) {
        return updateSeller({
          ...(payload as any),
          seller_id: (formData as any).seller_id,
        });
      }
      return createSeller(payload as any);
    },
    onSuccess: (data) => {
      if ((formData as any).seller_id) {
        toast.success(t("toast.seller_updated_successfully"));
        resetFormData();
        navigate("/");
        return;
      }
      toast.success(t("account_created_successfully"));
      resetFormData();
      navigate("/create-seller-success", {
        state: { idName: data.data?.id_name || "STU0000" },
      });
      refetch();
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || t("error_occurred"));
    },
  });

  const onSubmit = async (data: Step3FormData) => {
    const finalData = {
      ...formData,
      ...data,
    };

    // Validate all required fields are present
    if (!finalData.market_id) {
      toast.error(t("complete_all_steps"));
      navigate("/create-seller-1");
      return;
    }

    createSellerMutation.mutate(finalData as any);
  };

  return (
    <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
      <title>{t("create_account")}</title>
      <div className="absolute top-[15%] start-10 flex items-start gap-3">
        <div className="w-[8px] h-[55px] bg-white rounded-sm"></div>

        <div>
          <h1 className="text-[#126C9E] font-bold text-[20px] leading-tight">
            {t("create_account")}
          </h1>
          <p className="text-[#666874] text-[15px] mt-1">{t("subtitle")}</p>
        </div>
      </div>
      <div className="bg-white w-[min(600px,100%-16px)] py-8 md:px-14 px-6 md:custom_round rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div>
                  <InputField
                    {...field}
                    label={t("seller_name")}
                    placeholder={t("seller_name_placeholder")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {t(errors.name.message as string)}
                    </p>
                  )}
                </div>
              )}
            />

            <div className="flex gap-3 flex-col">
              {t("gender")}
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => field.onChange("male")}
                      className={`w-24 rounded-md py-2 ${
                        field.value === "male"
                          ? "bg-[#126C9E] text-white border-[#126C9E]"
                          : "bg-gray-200 text-gray-700 border-gray-300"
                      }`}
                    >
                      {t("male")}
                    </button>
                    <button
                      type="button"
                      onClick={() => field.onChange("female")}
                      className={`w-24 rounded-md px-4 py-2 ${
                        field.value === "female"
                          ? "bg-[#126C9E] text-white border-[#126C9E]"
                          : "bg-gray-200 text-gray-700 border-gray-300"
                      }`}
                    >
                      {t("female")}
                    </button>
                  </div>
                )}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-[#444]">
                {t("market_type")}
              </label>
              <Controller
                name="market_type_id"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full h-[50px]">
                      <SelectValue placeholder={t("select_market_type")} />
                    </SelectTrigger>
                    <SelectContent>
                      {marketTypes?.data?.map((type) => (
                        <SelectItem key={type.id} value={String(type.id)}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.market_type_id && (
                <p className="text-red-500 text-sm mt-1">
                  {t(errors.market_type_id.message as string)}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-[#444]">
                {t("product_type")}
              </label>
              <Controller
                name="product_type_id"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full h-[50px]">
                      <SelectValue placeholder={t("select_product_type")} />
                    </SelectTrigger>
                    <SelectContent>
                      {productsTypes?.data?.map((type) => (
                        <SelectItem key={type.id} value={String(type.id)}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.product_type_id && (
                <p className="text-red-500 text-sm mt-1">
                  {t(errors.product_type_id.message as string)}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <Controller
                name="area"
                control={control}
                render={({ field }) => (
                  <div>
                    <InputField
                      {...field}
                      label={t("store_area")}
                      placeholder={t("store_area_placeholder")}
                    />
                    {errors.area && (
                      <p className="text-red-500 text-sm mt-1">
                        {t(errors.area.message as string)}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={createSellerMutation.isPending}
            className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {createSellerMutation.isPending
              ? t("creating_account")
              : t("create_account_button")}
          </button>
        </form>
      </div>
    </div>
  );
}
