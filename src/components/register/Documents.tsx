import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../InputField";
import { useNavigate } from "react-router";

export default function Documents() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [record, setRecord] = useState<"yes" | "no">("yes");
  const [license, setLicense] = useState<"yes" | "no">("no");
  const [recordFile, setRecordFile] = useState<File | null>(null);
  const [licenseFile, setLicenseFile] = useState<File | null>(null);

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className="flex items-center justify-center py-20 auth_page min-h-[665px]">
      <title>{t("create_account")}</title>

      <div className="bg-white w-[min(600px,100%-16px)] py-8 px-14 custom_round">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-3 flex-col">
            هل يوجد سجل تجاري؟
            <div className="flex gap-4">
              <button
                onClick={() => setRecord("yes")}
                className={`w-24  rounded-md ${
                  record === "yes"
                    ? "bg-[#126C9E] text-white border-[#126C9E]"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                نعم
              </button>
              <button
                onClick={() => setRecord("no")}
                className={`w-24  rounded-md px-4 py-2 ${
                  record === "no"
                    ? "bg-[#126C9E] text-white border-[#126C9E]"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                لا
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>إرفاق السجل التجاري</label>
            <button
              className="bg-[#fafafa] border text-[14px] border-[#f4f4f4] rounded-[8px] px-3 py-1 h-[48px]"
              onClick={() =>
                document.getElementById("recordFileInput")?.click()
              }
            >
              {recordFile ? recordFile.name : "ارفق صورة"}
            </button>

            <input
              type="file"
              id="recordFileInput"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, setRecordFile)}
            />
          </div>

          <div className="flex gap-3 flex-col">
            هل يوجد رخصة حرة؟
            <div className="flex gap-4">
              <button
                onClick={() => setLicense("yes")}
                className={`w-24  rounded-md ${
                  license === "yes"
                    ? "bg-[#126C9E] text-white border-[#126C9E]"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                نعم
              </button>
              <button
                onClick={() => setLicense("no")}
                className={`w-24  rounded-md px-4 py-2 ${
                  license === "no"
                    ? "bg-[#126C9E] text-white border-[#126C9E]"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                لا
              </button>
            </div>
          </div>

          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <InputField label="رقم الرخصة الحرة" />
              <InputField label="رقم الهوية" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>إرفاق صورة</label>
            <button
              className="bg-[#fafafa] border text-[14px] border-[#f4f4f4] rounded-[8px] px-3 py-1 h-[48px]"
              onClick={() => document.getElementById("licenseFileInput")?.click()}
            >
              ارفق صور
            </button>

            <input
              type="file"
              id="licenseFileInput"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, setLicenseFile)}
            />
          </div>
        </div>
        <button
          className="w-[70%] mx-auto mt-10 bg-[#40465C] flex items-center justify-center text-white  text-lg font-semibold py-3 rounded-lg hover:bg-[#2e3140] transition"
          onClick={() => navigate("/register-step4")}
        >
          التالي
        </button>
      </div>
    </div>
  );
}
