export default function About() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[600px] bg-cover bg-center flex flex-col justify-center items-center text-center ">
        <div className="absolute inset-0">
          <img
            src="/images/auth.png"
            alt="background"
            className=" object-cover  opacity-50"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" /> */}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-8 py-24">
          <div className="w-fit mx-auto text-[24px] font-bold px-8 py-1 flex gap-2">
            من
            <p className="bg-[#B73238] text-white text-[24px] font-bold px-8 py-1">
              نحن
            </p>
          </div>
          {/* text-[#666874]  */}
          <h2 className="text-[#666874]  font-bold text-[34px] mt-6 leading-[58px]">
            نرفع سقف النجاح <br /> باستخدام عالم التكنولوجيا
          </h2>

          <p className="text-white max-w-[600px] mt-4 leading-[32px] ">
            نمتلك أفضل الحلول في مجالات تكنولوجيا المعلومات والاقتصاد الرقمي،
            وحلول الهندسة الحسبية السحابية لتلبية احتياجات العملاء.
          </p>
        </div>
      </section>

      <div className="relative">
        <h3 className="text-[#B73238] text-[36px] font-bold text-center pt-16 mb-14 tracking-[3px]">
          لماذا نحن ؟
        </h3>
        <div className="grid grid-cols-2 gap-4 px-20">
          <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
            <img src="/images/1.svg.svg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-[#1865AA] font-bold text-[18px] mb-2">
                الخــــــبــرة
              </h3>
              <p className="text-[#1865AA]">
                يتكون فريقنا من محترفين ذوي مهارات عالية وخبرة مع فهم عميق لأحدث
                تقنيات تكنولوجيا المعلومات
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
            <img src="/images/2.svg fill.svg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-[#1865AA] font-bold text-[18px] mb-2">
                الجودة
              </h3>
              <p className="text-[#1865AA]">
                ملتزمون بتقديم خدمات وحلول عالية الجودة لعملائنا
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
            <img src="/images/3.svg fill.svg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-[#1865AA] font-bold text-[18px] mb-2">
                الموثوقية
              </h3>
              <p className="text-[#1865AA]">
                يمكن لعملائنا الاعتماد علينا بالوفاء بالمواعيد النهائية بشكل
                مستمر و تسليم المشاريع في الوقت المحدد
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
            <img src="/images/4.svg.svg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-[#1865AA] font-bold text-[18px] mb-2">
                الابتكار
              </h3>
              <p className="text-[#1865AA]">
                نواكب أحدث التطورات في صناعة تكنولوجيا المعلومات و نستكشف دائما
                طرقا جديدة لتحسين خدماتنا
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 py-16">
        <h3 className="text-[#B73238] font-bold text-[32px] border-b-2 border-[#B73238] w-fit pb-1">
          فريقنا
        </h3>
        <p className="text-[#666874] max-w-[700px] mt-3">
          نحن نؤمن بفرقنا لأنها تمثل قوتنا الأساسية مع الموظفين الذين لديهم
          دوافع ذاتية مشاركة الهدف الرئيسي المتمثل في الاستفادة من مهاراتهم
          وخبراتهم لتحقيق أفضل النتائج على الإطلاق المشاريع والعمليات بينما
          يستمتعون بالعمل في بيئة عمل صحية ومجزية
        </p>
      </div>
    </div>
  );
}
