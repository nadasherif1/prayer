import Image from "next/image";

const Prophet = () => {
  return (
    <div className="p-4 md:p-8 my-20">
      <h1 className="text-center font-bold text-3xl sm:text-4xl mb-8">
        من هو النبي محمد (ﷺ)؟
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="p-4 flex justify-center md:w-1/2">
          <Image
            src="/Muhammad_(s.webp"
            width={300}
            height={300}
            alt="Prophet Muhammad"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72"
          />
        </div>

        <div className="flex flex-col items-center justify-center p-4 md:w-1/2">
          <p className="text-base sm:text-lg md:text-xl text-center md:text-right leading-relaxed">
            ولد حضرة محمد (صلى الله عليه وسلم) في مكة، في التاسع من ربيع الأول
            الموافق 20 أبريل 571. كان ذلك الصباح صباحًا ميمونًا لمدينة، لا تنعم
            بالمرافق المدنية، وخالية من الخضرة وغير صالحة للزراعة. وكان من
            قبائلها الكرام بني هاشم المنعمين بالبركة. آمنة بنت وهيب زوجة عبد
            الله بن عبد المطلب أنجبت نور المرسلين حضرة محمد (صلى الله عليه
            وسلم). بالله! ويا له من صباح مُبشر يُبشر للعالم أجمع بظهور الهدى!
            ويا لها من لحظة طيبة، عندما سمع بشرى وصول النبي من كل ذرة في الأرض
            وفي الكون. وكأن كل صغيرة تغني بأن زمن الشدة قد ذهب، وأن ظلمة الشرك
            والكفر قد حلت بنور الهدى هذا. تم نفي عبادة الأصنام وأصبحت عبادة الله
            الواحد هدف الحياة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prophet;
