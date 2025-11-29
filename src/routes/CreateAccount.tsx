import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function CreateAccount() {
  const { t } = useTranslation();
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
            <Select>
              <SelectTrigger className="w-full h-[50px] rounded-lg border-[#d6d6d6] bg-[#f9fafb] text-[#444] focus:ring-2 focus:ring-[#232633]">
                <SelectValue placeholder="اختر المنطقة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">الرياض</SelectItem>
                <SelectItem value="2">القصيم</SelectItem>
                <SelectItem value="3">المدينة</SelectItem>
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
                <SelectItem value="1">سوق جدة</SelectItem>
                <SelectItem value="2">سوق الدمام</SelectItem>
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
