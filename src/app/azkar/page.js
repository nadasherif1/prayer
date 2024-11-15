"use client";
import { useState } from "react";
import Head from "next/head";
import adhkarData from "../../../data/azkar.json";

const categories = [
  "أذكار الصباح",
  "أذكار المساء",
  "أذكار النوم",
  "أذكار الاستيقاظ",
];

const Adhkar = () => {
  const [selectedCategory, setSelectedCategory] = useState("أذكار الصباح");

  const filteredAdhkar = adhkarData.filter(
    (adhkar) => adhkar.category === selectedCategory
  );

  return (
    <>
      <div className="min-h-screen p-4 sm:p-6 mt-[150px] rtl text-right">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold p-5 text-center mb-4 sm:mb-8">
            الأذكار
          </h1>
          <h2 className="text-center text-base sm:text-lg mb-4 font-bold">
            قال الله تعالى: ” الَّذِينَ آمَنُواْ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ
            اللّهِ أَلاَ بِذِكْرِ اللّهِ تَطْمَئِنُّ الْقُلُوبُ “
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 sm:px-4 py-2 rounded-lg ${
                  category === selectedCategory
                    ? "bg-gray-600 text-white"
                    : "bg-white border border-gray-600 text-gray-600"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="shadow-md rounded-lg p-4 sm:p-6">
            {filteredAdhkar.map((adhkar, index) => (
              <div key={index} className="mb-4">
                <div className="text-base sm:text-lg font-semibold mb-2">
                  {adhkar.zikr}
                </div>
                <div className="text-sm sm:text-base">
                  عدد المرات: {adhkar.count}
                </div>
                <hr className="my-3 sm:my-4" />
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-center text-base sm:text-lg mb-4 font-bold pt-5">
          {`تم الانتهاء من ${selectedCategory}، أتمنى لك يومًا جميلًا مثل قلبك 😇`}
        </h2>
      </div>
    </>
  );
};

export default Adhkar;
