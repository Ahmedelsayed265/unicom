export default function About() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-12 px-20">
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
              يمكن لعملائنا الاعتماد علينا بالوفاء بالمواعيد النهائية بشكل مستمر
              و تسليم المشاريع في الوقت المحدد
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 bg-white p-4 py-5 rounded-[16px]">
          <img src="/images/1.svg.svg" alt="" />

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

      <div className="py-12 px-20">
        <div className="flex flex-col gap-4 py-5">
          <h3 className="text-[#B73238] font-bold text-[32px] border-b-2 border-[#B73238] w-fit pb-1">
            فـر يـقـنا
          </h3>

          <p className="text-[#666874] max-w-[700px] mt-3">
            نحن نؤمن بفرقنا لأنها تمثل قوتنا الأساسية مع الموظفين الذين لديهم
            دوافع ذاتية مشاركة الهدف الرئيسي المتمثل في الاستفادة من مهاراتهم
            وخبراتهم لتحقيق أفضل النتائج على الإطلاق المشاريع والعمليات بينما
            يستمتعون بالعمل في بيئة عمل صحية ومجزية
          </p>
        </div>
      </div>
    </>
  );
}
