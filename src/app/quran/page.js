"use client";
import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Quran = () => {
    const [surahs,setSurahs] =useState([])
    useEffect(()=>{
        const fethSurahs=async()=>{
            try{
                const response = await axios.get("https://api.alquran.cloud/v1/surah");
            setSurahs(response.data.data);
            }
            catch{
                console.error("Error fetching Surah data:", error);
            }
        }
        fethSurahs();
    },[])
  return (
    <div className=" container mx-auto p-6 mt-[100px] ">
        <h1 className="text-3xl font-bold mb-4 text-center">القرآن الكريم</h1>
        <div className="grid grid-cols-3 gap-4 ">
            {surahs.map((surah)=>(
<Link href= {`/quran/surah/${surah.number}`} key={surah.number}>
<div className="p-4 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-200 cursor-pointer ">
    <div className=" text-center text-lg font-bold  ">{surah.name}</div>
    <div className="text-sm text-gray-500 text-center">{surah.englishName}</div>
              <div className="text-md mt-2 text-center" >{surah.numberOfAyahs} آية</div>

</div>
</Link>
            ))}
        </div>
    </div>
  )
}

export default Quran