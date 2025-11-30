import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="w-fit mx-auto text-[24px] font-bold px-8 flex gap-2 pt-9">
        {t("from")}
        <p className="bg-[#B73238] text-white text-[24px] font-bold px-8 py-1">
          {t("us")}
        </p>
      </div>
      <section className="relative w-full h-[600px] bg-cover bg-center flex flex-col justify-start items-center text-center ">
        <div className="absolute inset-0">
          <img
            src="/images/auth.png"
            alt="background"
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-8 py-24">
          <h2 className="text-[#666874]  text-[34px] mt-6 leading-[58px]">
            {t("title1")} <br /> {t("title2")}
          </h2>
          <div className="flex flex-col text-white max-w-[600px] leading-[32px] ">
            <p className="text-white  mt-4 leading-[32px]  bg-[#666874] rounded-md py-0 px-7">
              {t("desc1")}
            </p>
            <p className="text-white  mt-0 leading-[32px]  bg-[#666874] custom_round_about pt-0 pb-2 mx-5 px-5">
              {t("desc2")}
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        <h3 className="text-[#B73238] text-[36px] font-bold text-center pt-16 mb-14 tracking-[3px]">
          {t("whyUs")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20">
          <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
            <img src="/images/1.svg.svg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-[#1865AA] font-bold text-[18px] mb-2">
                {t("experience.title")}
              </h3>
              <p className="text-[#1865AA]">{t("experience.text")}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
            <img src="/images/2.svg fill.svg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-[#1865AA] font-bold text-[18px] mb-2">
                {t("quality.title")}
              </h3>
              <p className="text-[#1865AA]">{t("quality.text")} </p>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
            <img src="/images/3.svg fill.svg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-[#1865AA] font-bold text-[18px] mb-2">
                {t("trust.title")}
              </h3>
              <p className="text-[#1865AA]">{t("trust.text")} </p>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
            <img src="/images/4.svg.svg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-[#1865AA] font-bold text-[18px] mb-2">
                {t("innovation.title")}
              </h3>
              <p className="text-[#1865AA]">{t("innovation.text")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 py-16">
        <h3 className="text-[#B73238] font-bold text-[32px] border-b-2 border-[#B73238] w-fit pb-1">
          {t("team")}
        </h3>
        <p className="text-[#666874] max-w-[700px] mt-3"> {t("teamDesc")}</p>
      </div>
    </div>
  );
}
