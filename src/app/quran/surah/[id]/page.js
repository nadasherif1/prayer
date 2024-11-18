
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Surah = ({ params }) => {
  const [unwrappedParams, setUnwrappedParams] = useState(null);
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    params.then((resolvedParams) => setUnwrappedParams(resolvedParams));
  }, [params]);

  useEffect(() => {
    if (unwrappedParams?.id) {
      const fetchSurah = async () => {
        try {
          const response = await axios.get(`https://api.alquran.cloud/v1/surah/${unwrappedParams.id}`);
          setSurah(response.data.data);
        } catch (error) {
          console.error("Error fetching Surah data:", error);
        }
      };
      fetchSurah();
    }
  }, [unwrappedParams]);

  return (
    <div className="container mx-auto mt-[100px] p-6">
        <Link href="/quran" className="text-lg font-bold mb-4 bg-[#404040] rounded-lg p-2 relative top-0 right-0 "> العوده الي السور</Link>
      {surah ? (
        <>
          <h1 className="text-3xl p-5 font-bold mb-4 text-center">
            {surah.name} - {surah.englishName}
          </h1>
          <p className="text-lg mb-4 text-center">
            عدد الآيات: {surah.numberOfAyahs}
          </p>
          <div>
            {surah.ayahs.map((ayah) => (
              <div key ={ayah.number} 
              
                className="p-4  text-center rounded-lg shadow  transition duration-200 cursor-pointer"
              >
                <p className="text-lg  font-bold">{ayah.text}</p>
                <p className="text-sm  mt-2">رقم الآية: {ayah.numberInSurah}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-lg text-center">Loading...</p>
      )}
    </div>
  );
};

export default Surah;
