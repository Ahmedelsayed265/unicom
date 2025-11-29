import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../InputField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useNavigate } from "react-router";

export default function Confirm() {
  const { t } = useTranslation();
  const navigate = useNavigate(); 

  const [gender, setGender] = useState("male");

  return (
    <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
      <title>{t("create_account")}</title>

      <div className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
        <div className="grid grid-cols-2 gap-4">
          <InputField label="اسم البائع" placeholder="محمد  ابراهيم" />

          <div className="flex gap-3 flex-col">
            الجنس
            <div className="flex gap-4">
              <button
                onClick={() => setGender("male")}
                className={`w-24  rounded-md ${
                  gender === "male"
                    ? "bg-[#126C9E] text-white border-[#126C9E]"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                ذكر
              </button>
              <button
                onClick={() => setGender("female")}
                className={`w-24  rounded-md px-4 py-2 ${
                  gender === "female"
                    ? "bg-[#126C9E] text-white border-[#126C9E]"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                أنثى
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#444]">
              نوع المحل
            </label>
            <Select>
              <SelectTrigger className="w-full h-[50px] rounded-lg border-[#d6d6d6] bg-[#f9fafb] text-[#444] focus:ring-2 focus:ring-[#232633]">
                <SelectValue placeholder="اختر نوع المحل" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">اعشاب</SelectItem>
                <SelectItem value="2">القصيم</SelectItem>
                <SelectItem value="3">المدينة</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#444]">
              نوع المنتج
            </label>
            <Select>
              <SelectTrigger className="w-full h-[50px] rounded-lg border-[#d6d6d6] bg-[#f9fafb] text-[#444] focus:ring-2 focus:ring-[#232633]">
                <SelectValue placeholder="اختر المنتج" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">سوق جدة</SelectItem>
                <SelectItem value="2">سوق الدمام</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <InputField
              label="المساحة التقريبية للمحل"
              placeholder="100 متر مربع "
            />
          </div>
        </div>
        <button
          className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white  text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition"
        onClick={() => navigate("/register-step5")}>
         انشاء حساب
        </button>
      </div>
    </div>
  );
}
