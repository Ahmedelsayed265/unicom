import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { step3Schema, type Step3FormData } from "../schema";
import { createSeller } from "../sellerApi";
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

export default function Confirm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
      name: "",
      gender: "male",
      market_type_id: "",
      product_type_id: "",
      area: "",
    },
  });

  const createSellerMutation = useMutation({
    mutationFn: createSeller,
    onSuccess: (data) => {
      toast.success("تم إنشاء الحساب بنجاح!");
      resetFormData();
      navigate("/create-seller-success", {
        state: { storeNumber: data.data?.store_number || "STU0000" },
      });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "حدث خطأ ما");
    },
  });

  const onSubmit = async (data: Step3FormData) => {
    const finalData = {
      ...formData,
      ...data,
    };

    // Validate all required fields are present
    if (!finalData.market_id) {
      toast.error("الرجاء إكمال جميع الخطوات");
      navigate("/create-seller-1");
      return;
    }

    createSellerMutation.mutate(finalData as any);
  };

  return (
    <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
      <title>{t("create_account")}</title>

      <div className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div>
                  <InputField
                    {...field}
                    label="اسم البائع"
                    placeholder="محمد ابراهيم"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              )}
            />

            <div className="flex gap-3 flex-col">
              الجنس
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
                      ذكر
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
                      أنثى
                    </button>
                  </div>
                )}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-[#444]">
                نوع المحل
              </label>
              <Controller
                name="market_type_id"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full h-[50px] rounded-lg border-[#d6d6d6] bg-[#f9fafb] text-[#444] focus:ring-2 focus:ring-[#232633]">
                      <SelectValue placeholder="اختر نوع المحل" />
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
                  {errors.market_type_id.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-[#444]">
                نوع المنتج
              </label>
              <Controller
                name="product_type_id"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full h-[50px] rounded-lg border-[#d6d6d6] bg-[#f9fafb] text-[#444] focus:ring-2 focus:ring-[#232633]">
                      <SelectValue placeholder="اختر المنتج" />
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
                  {errors.product_type_id.message}
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
                      label="المساحة التقريبية للمحل"
                      placeholder="100 متر مربع"
                    />
                    {errors.area && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.area.message}
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
            {createSellerMutation.isPending ? "جاري الإنشاء..." : "انشاء حساب"}
          </button>
        </form>
      </div>
    </div>
  );
}
