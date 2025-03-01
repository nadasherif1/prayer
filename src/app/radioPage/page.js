"use client";

import Search from "@/components/Search";
import { useEffect, useState } from "react";

const QuranRadio = () => {
  const [playingUrl, setPlayingUrl] = useState(null);
  const [radio, setRadio] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]); 

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(radio);
    } else {
      setFilteredPosts(
        radio.filter((station) =>
          station.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  const togglePlay = (url) => {
    if (playingUrl === url) {
      setPlayingUrl(null);
    } else {
      setPlayingUrl(url);
    }
  };

  useEffect(() => {
    const getRadio = async () => {
      try {
        const res = await fetch(
          "https://mp3quran.net/api/v3/radios?language=ar"
        );
        const data = await res.json();

        if (data && data.radios) {
          setRadio(data.radios); 
          setFilteredPosts(data.radios); 
        } else {
          console.error("Unexpected data structure:", data);
        }
      } catch (err) {
        console.error("Failed to fetch radio stations:", err);
      }
    };

    getRadio();
  }, []);

  return (
    <div className="container mx-auto p-6 mt-[150px]">
      <Search onSearch={handleSearch} />
      <h1 className="text-3xl font-bold text-center m-[40px]">
        إذاعات القرآن الكريم في جميع البلدان
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-10 transition-all duration-300   ">
        {filteredPosts.map((station, index) => (
          <div
            key={index}
            className={` transition-transform duration-200 hover:scale-105 text-center rounded-2xl py-10 border-2 border-[#ddd] p-3 cursor-pointer grow basis-[300px]  transition-all  duration-200 ${
              playingUrl === station.url ? "bg-gray-500 text-white" : ""
            }`}
            onClick={() => togglePlay(station.url)}>
            <h2 className="text-xl font-semibold mb-2">{station.name}</h2>
            <p className="text-gray-700 mb-4">{station.country}</p>
            {playingUrl === station.url && (
              <p className="text-black font-bold">جاري التشغيل...</p>
            )}
          </div>
        ))}
      </div>

      {playingUrl && (
        <audio src={playingUrl} autoPlay controls className="w-full mt-4">
          المتصفح الخاص بك لا يدعم عنصر الصوت
        </audio>
      )}
    </div>
  );
};

export default QuranRadio;
