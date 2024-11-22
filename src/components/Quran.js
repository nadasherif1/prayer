import Image from "next/image";
import Link from "next/link";

const Quran = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-center font-bold text-3xl sm:text-4xl my-5 mt-10">
        القرآن
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center justify-center p-4 md:w-1/2">
          <p className="text-base sm:text-lg md:text-xl text-center">
            القرآن الكريم هو آخر كلام الله المنزل، وخاتم الأنبياء محمد (صلى الله
            عليه وسلم) هو الذي نزل عليه. لقد أنزل الله القرآن على نبيه الحبيب
            حضرة محمد (عليه الصلاة والسلام) وليس هناك شك في ألوهيته. وحضرة محمد
            (عليه الصلاة والسلام) هو الذي نزل عليه القرآن، كما كان. القرآن نور
            العلم والإيمان، والرسول الكريم (صلى الله عليه وسلم) هو قدوته العملية
            والأسوة الحسنة. القرآن هو المصدر الرئيسي لعقيدة كل مسلم وممارسته.
            لقد قدم القرآن مبادئ توجيهية لمجتمع عادل وسلوك إنساني سليم ونظام
            اقتصادي عادل. ولا يقول هذا الادعاء إلا الله تعالى نفسه. القرآن هو
            الهدى والقيادة، وحضرة محمد (عليه الصلاة والسلام) هو الدليل والقائد.
            القرآن دعوة الحق ورسالة الحق، والنبي صلى الله عليه وسلم هو الداعي
            والرسول.
          </p>
        </div>
        <div className="p-4 md:w-1/2 flex justify-center">
          <Image
            src="/quran_image.webp"
            width={300}
            height={300}
            layout="intrinsic"
            alt="Quran"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72"
          />
        </div>
      </div>
      <div className="bg-gray-500 font-bold w-full sm:w-1/2 md:w-[20%] flex justify-center items-center mx-auto mt-8 p-3 rounded-lg">
        <Link href="/quran" className="text-white">
          القران الكريم
        </Link>
      </div>
    </div>
  );
};

export default Quran;
