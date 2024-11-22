"use client";

import { useState, useEffect } from "react";

const Hadith = () => {
  const [hadith, setHadith] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHadiths = async () => {
      try {
        const response = await fetch(
          "https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$EhOBQubaytO2zayidmAzOPfFReUtsaKZPpGdubuMGxYywzTllme"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        if (data.hadiths && data.hadiths.data) {
          setHadith(data.hadiths.data);
        } else {
          console.error("No hadiths found in the response");
        }
      } catch (error) {
        console.error("Error fetching hadiths:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHadiths();
  }, []);

  return (
    <div className="mt-[150px] px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-2xl sm:text-3xl font-bold pt-6 p-5 text-center">
        الأحاديث النبوية
      </h1>
      {loading ? (
        <p className="text-base sm:text-lg font-bold text-center">
          جاري تحميل الأحاديث...
        </p>
      ) : (
        <div className="flex flex-col gap-6 items-center mb-[30px] lg:items-stretch lg:w-[80%] lg:mx-auto">
          {hadith.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md border border-gray-200 transition-transform duration-200 hover:scale-105 w-full"
            >
              <p className="text-lg sm:text-xl font-bold text-center">
                {item.hadithArabic}
              </p>
              <p className="text-sm text-gray-500 mt-2 text-center">
                المصدر: {item.book.bookName}
              </p>
              <p className="text-sm text-gray-500 mt-2 text-center">
                الراوي: {item.englishNarrator}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hadith;
