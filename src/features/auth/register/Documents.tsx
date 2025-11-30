import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema, type Step2FormData } from "../schema";
import { useSellerRegistration } from "./SellerRegistrationContextType";
import InputField from "@/components/InputField";

export default function Documents() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { updateFormData } = useSellerRegistration();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      has_commercial_record: "yes",
      freelance_id: "",
      freelance_national_id: "",
    },
  });

  const commercialRecordImage = watch("commercial_record");
  const freelanceImage = watch("freelance_image");

  const onSubmit = (data: Step2FormData) => {
    console.log(errors);

    updateFormData(data);
    navigate("/create-seller-3");
  };

  return (
    <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
      <title>{t("create_account")}</title>
      <div className="absolute top-[15%] right-10 flex items-start gap-3">
        <div className="w-[8px] h-[55px] bg-white rounded-sm"></div>

        <div>
          <h1 className="text-[#126C9E] font-bold text-[20px] leading-tight">
            انشاء حسابك
          </h1>
          <p className="text-[#666874] text-[15px] mt-1">
            تتبع بيانات الأسواق واضف أسواق جديدة بسهولة
          </p>
        </div>
      </div>
      <div className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2 flex-col">
              هل يوجد سجل تجاري؟
              <Controller
                name="has_commercial_record"
                control={control}
                render={({ field }) => (
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => field.onChange("yes")}
                      className={`w-24 rounded-md py-2 flex-1 h-[48px] ${
                        field.value === "yes"
                          ? "bg-[#126C9E] text-white border-[#126C9E]"
                          : "bg-gray-200 text-gray-700 border-gray-300"
                      }`}
                    >
                      نعم
                    </button>

                    <button
                      type="button"
                      onClick={() => field.onChange("no")}
                      className={`w-24 rounded-md px-4 py-2 flex-1 h-[48px] ${
                        field.value === "no"
                          ? "bg-[#126C9E] text-white border-[#126C9E]"
                          : "bg-gray-200 text-gray-700 border-gray-300"
                      }`}
                    >
                      لا
                    </button>
                  </div>
                )}
              />
            </div>
            {watch("has_commercial_record") === "yes" && (
              <div className="flex flex-col gap-2">
                <label>إرفاق السجل التجاري</label>
                <Controller
                  name="commercial_record"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <>
                      <button
                        type="button"
                        className="bg-[#fafafa] border text-[14px] border-[#f4f4f4] rounded-[8px] px-3 py-1 h-[48px]"
                        onClick={() =>
                          document
                            .getElementById("commercialRecordInput")
                            ?.click()
                        }
                      >
                        {commercialRecordImage
                          ? commercialRecordImage.name
                          : "ارفق صورة"}
                      </button>

                      <input
                        {...field}
                        type="file"
                        id="commercialRecordInput"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(file);
                          }
                        }}
                      />
                    </>
                  )}
                />
                {errors.commercial_record && (
                  <p className="text-red-500 text-sm">
                    {errors.commercial_record.message}
                  </p>
                )}
              </div>
            )}

            {watch("has_commercial_record") === "no" && (
              <>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    <Controller
                      name="freelance_id"
                      control={control}
                      render={({ field }) => (
                        <InputField {...field} label="رقم الرخصة الحرة" />
                      )}
                    />

                    <Controller
                      name="freelance_national_id"
                      control={control}
                      render={({ field }) => (
                        <InputField {...field} label="رقم الهوية" />
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 col-span-2">
                  <label>إرفاق صورة</label>
                  <Controller
                    name="freelance_image"
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                      <>
                        <button
                          type="button"
                          className="bg-[#fafafa] border text-[14px] border-[#f4f4f4] rounded-[8px] px-3 py-1 h-[48px]"
                          onClick={() =>
                            document
                              .getElementById("freelanceImageInput")
                              ?.click()
                          }
                        >
                          {freelanceImage ? freelanceImage.name : "ارفق صور"}
                        </button>

                        <input
                          {...field}
                          type="file"
                          id="freelanceImageInput"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                        />
                      </>
                    )}
                  />
                  {errors.freelance_image && (
                    <p className="text-red-500 text-sm">
                      {errors.freelance_image.message}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          <button
            type="submit"
            className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition"
          >
            التالي
          </button>
        </form>
      </div>
    </div>
  );
}
