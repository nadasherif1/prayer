import Image from "next/image";

const Prophet = () => {
  return (
    <div className="p-4 md:p-8 my-20">
      <h1 className="text-center pl-[100px] font-bold text-4xl  mb-8">
        من هو النبي محمد (ﷺ)؟
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div className="p-4 md:w-1/2 flex justify-center">
          <Image src="/Muhammad_(s.webp" width={300} height={300} alt="Quran" />
        </div>

        <div className="flex flex-col items-center justify-center p-4 md:w-1/2">
          <p className="text-xl text-center">
            ولد حضرة محمد (صلى الله عليه وسلم) في مكة، في التاسع من ربيع الأول
            الموافق 20 أبريل 571. كان ذلك الصباح صباحًا ميمونًا لمدينة، لا تنعم
            بالمرافق المدنية، وخالية من الخضرة وغير صالحة للزراعة. وكان من
            قبائلها الكرام بني هاشم المنعمين بالبركة. آمنة بنت وهيب زوجة عبد
            الله بن عبد المطلب أنجبت نور المرسلين حضرة محمد (صلى الله عليه
            وسلم). بالله! ويا له من صباح مُبشر يُبشر للعالم أجمع بظهور الهدى!
            ويا لها من لحظة طيبة، عندما سمع بشرى وصول النبي من كل ذرة في الأرض
            وفي الكون. وكأن كل صغيرة تغني بأن زمن الشدة قد ذهب، وأن ظلمة الشرك
            والكفر قد حلت بنور الهدى هذا. تم نفي عبادة الأصنام وأصبحت عبادة الله
            الواحد هدف الحياة.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prophet;
