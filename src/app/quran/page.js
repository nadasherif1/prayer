"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Quran = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get("https://api.alquran.cloud/v1/surah");
        setSurahs(response.data.data);
      } catch (error) {
        console.error("Error fetching Surah data:", error);
      }
    };
    fetchSurahs();
  }, []);

  return (
    <div className="container mx-auto p-6 mt-[150px]">
      <h1 className="text-3xl font-bold mb-4 text-center">القرآن الكريم</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {surahs.map((surah) => (
          <Link href={`/quran/surah/${surah.number}`} key={surah.number}>
            <div className="p-4  rounded-lg shadow  transition duration-200 cursor-pointer">
              <div className="text-center text-lg font-bold">{surah.name}</div>
              <div className="text-sm text-gray-500 text-center">
                {surah.englishName}
              </div>
              <div className="text-md mt-2 text-center">
                {surah.numberOfAyahs} آية
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Quran;
