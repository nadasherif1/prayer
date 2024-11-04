"use client";

import { useState, useEffect } from "react";

const Hadith = () => {
  const [hadith, setHadith] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHadiths = async () => {
      try {
        const response = await fetch("https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$EhOBQubaytO2zayidmAzOPfFReUtsaKZPpGdubuMGxYywzTllme");
        
       
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
    <div className="mt-[100px] container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">الأحاديث النبوية</h1>
      {loading ? (
        <p className="text-lg font-bold text-center">جاري تحميل الأحاديث...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {hadith.map((item, index) => (
            <div
              key={index}
              className="p-4  text-center rounded-lg shadow-md  transition duration-200 cursor-pointer"
            >
              <p className="text-lg font-bold">{item.hadithArabic}</p>
              <p className="text-sm text-gray-500 mt-2">المصدر: {item.book.bookName}</p>
              <p className="text-sm text-gray-500 mt-2">الراوي: {item.englishNarrator}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hadith;
