"use client";
import { useState } from "react";
import forty from "../../../data/forty.json";

const hisnMuslimHadiths = [
  {
    arab: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.",
    reference: "الذكر عند الخروج من المنزل",
  },
  {
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ.",
    reference: "الدعاء عند الكرب",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنْ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَطَّهِرِينَ.",
    reference: "الدعاء بعد الوضوء",
  },
  {
    arab: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَاجْبُرْنِي وَعَافِنِي وَارْزُقْنِي.",
    reference: "الدعاء بين السجدتين",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْ قُبُورَنَا رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ.",
    reference: "الدعاء عند زيارة القبور",
  },
  {
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فَتْنَةِ الْمَسِيحِ الدَّجَّالِ.",
    reference: "الدعاء من فتنة الدجال",
  },
  {
    arab: "اللَّهُمَّ حَبِّبْ إِلَيَّ الْإِيمَانَ وَزَيِّنْهُ فِي قَلْبِي.",
    reference: "الدعاء بحب الإيمان",
  },
  {
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمُتَعَجِّلِ وَالْمُتَأَخِّرِ.",
    reference: "الدعاء عند الاستعاذة بالله",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنْ رَحْمَتِكَ وَمِنْ غَيْرِ مَشَقَّةٍ فِي دِينِي.",
    reference: "الدعاء للمغفرة",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي فِي رُفْقٍ وَعَفْوٍ فِي دِينِي.",
    reference: "الدعاء لرفع البلاء",
  },
  {
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الشِّرْكِ وَالشِّرْكِ الدَّجَّالِ.",
    reference: "الدعاء من الشرك والدجال",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنْ عِبَادِكَ الْمُؤْمِنِينَ وَقِيِّمِينَ لِأَمْرِكَ.",
    reference: "الدعاء للهداية والإيمان",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنْ أَسْبَابِ نَجَاتِكَ وَمِنْ فَاتِحَةِ رَحْمَتِكَ.",
    reference: "الدعاء للنجاة من النار",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنْ رَحْمَتِكَ الْوَاسِعَةِ.",
    reference: "الدعاء لرحمة الله",
  },
  {
    arab: "اللَّهُمَّ لَا تَجْعَلْنِي فِي فَتْنَةٍ تَقُودُ إِلَى حَزْنٍ وَجَزَعٍ.",
    reference: "الدعاء لعدم الوقوع في الفتن",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي فِي رَحْمَتِكَ وَمِنْ سَبَبٍ لِجَنَّتِكَ.",
    reference: "الدعاء للوصول إلى الجنة",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ جَنَّتِكَ الَّذِينَ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ.",
    reference: "الدعاء للنجاة من النار",
  },
  {
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَالْمُسْكَنَةِ وَالذُّلِّ وَالْجُوعِ.",
    reference: "الدعاء ضد الفقر",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِمَّنْ تَقَبَّلَ صَلَاتِي وَأَجْبَرَ عَثْرَتِي.",
    reference: "الدعاء لقبول الصلاة",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنَ الَّذِينَ يُسْرِفُونَ فِي طَاعَتِكَ وَلَا تَجْعَلْنِي مِنَ الْمُقَصِّرِينَ.",
    reference: "الدعاء للسعي في الطاعة",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنَ الَّذِينَ يَشْفَعُونَ فِي الْمُؤْمِنِينَ يَوْمَ الْقِيَامَةِ.",
    reference: "الدعاء للمغفرة",
  },
  {
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ غَضَبِكَ وَمِنْ سَخَطِكَ.",
    reference: "الدعاء للسلامة من غضب الله",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنَ الشَّاكِرِينَ لِفَضْلِكَ وَمِنَ السَّابِقِينَ فِي عِبَادَتِكَ.",
    reference: "الدعاء للشكر والعبادة",
  },
  {
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ حُبِّ الدُّنْيَا وَزِينَتِهَا.",
    reference: "الدعاء من حب الدنيا",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي فِي رَحْمَتِكَ الَّتِي تَحْتَوِي كُلَّ شَيْءٍ.",
    reference: "الدعاء لرحمة الله الواسعة",
  },
  {
    arab: "اللَّهُمَّ اجْعَلْنِي مِنَ الَّذِينَ يُؤْثِرُونَ وَيُحِبُّونَ جَمِيعَ عِبَادِكَ.",
    reference: "الدعاء للوحدة والمودة بين المسلمين",
  },
];


const Hadith = () => {
  const [categories] = useState([
    { id: "bukhari", name: "صحيح البخاري" },
    { id: "muslim", name: "صحيح مسلم" },
    { id: "hisnMuslimHadiths", name: "حصن المسلم " },
    { id: "fortyHadithofan-Nawawi", name: "الأربعون النووية" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHadiths = async (categoryId) => {
    setLoading(true);
    setHadiths([]);

    try {
      if (categoryId === "hisnMuslimHadiths") {
        setHadiths(hisnMuslimHadiths);
      } else if (categoryId === "fortyHadithofan-Nawawi") {
        const formattedHadiths = forty.map((item) => ({
          arab: item.hadith,
          reference: item.description,
        }));
        setHadiths(formattedHadiths);
      } else {
        const response = await fetch(
          `https://api.hadith.gading.dev/books/${categoryId}?range=1-300`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch hadiths");
        }

        const data = await response.json();

        const filteredHadiths = data.data.hadiths.filter(
          (hadith) => hadith.arab.length < 500
        );

        setHadiths(filteredHadiths);
      }
    } catch (error) {
      console.error("Error fetching hadiths:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchHadiths(categoryId);
  };

  return (
    <div className="mt-[80px] px-4 sm:px-6 lg:px-8" dir="rtl">
      <h1 className="text-2xl sm:text-3xl font-bold pt-6 pb-9 text-center">
        الأحاديث النبوية
      </h1>
<p className=" text-justify mb-7 ">
قال رسول الله ﷺ: "خيركم من تعلم القرآن وعلمه" (رواه البخاري).
الأحاديث النبوية هي نور وهداية للمسلمين، فهي تكمل رسالة القرآن الكريم وتوضحها لنا. من خلالها نتعلم الأخلاق الفاضلة، ونفهم كيفية تطبيق ديننا في حياتنا اليومية. اجعل لنفسك وقتًا يوميًا لقراءة حديث شريف، تأمل معانيه واعمل على تطبيقه، فكل عمل صغير يقرّبك إلى الله يُعظم في ميزان حسناتك.

ابدأ اليوم بحديث نبوي واحد، ولتكن خطوتك الأولى نحو حياة مليئة بالخير والبركة.
</p>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === category.id
                ? "bg-gray-600 text-white"
                : "bg-gray-100 text-gray-800"
            } hover:bg-gray-500 hover:text-white transition`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {loading && <p className="text-center text-gray-500">جاري تحميل الأحاديث...</p>}

      {!loading && hadiths.length > 0 ? (
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          {hadiths.map((hadith, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md border border-gray-200 transition-transform duration-200 hover:scale-105"
            >
              <p className="text-lg sm:text-xl font-bold text-center">
                {hadith.arab}
              </p>
              {hadith.reference && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  المرجع: {hadith.reference}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        !loading &&
        selectedCategory && (
          <p className="text-center text-gray-500">لا توجد أحاديث لعرضها.</p>
        )
      )}
    </div>
  );
};

export default Hadith;
