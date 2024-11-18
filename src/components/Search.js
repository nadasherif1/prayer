"use client";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value); 
  };

  const handleClear = () => {
    setSearch(""); 
    onSearch(""); 
  };

  return (
    <div className="flex justify-center flex-wrap items-center mt-4 space-x-4">
      <input
        type="text"
        placeholder="ابحث عن الاذاعه المفضله لديك"
        value={search}
        onChange={handleInputChange}
        className="text-right border border-gray-300 rounded-md p-2 w-full md:w-1/2 lg:w-1/3"
      />
      <button
        onClick={() => onSearch(search)}
        className="bg-blue-500 text-white rounded-md p-2 ml-2 sm: mb-5 mt-5 w-[40%] sm:w-1/3 md:w-1/4 lg:w-1/5 text-sm md:text-base lg:text-lg"
      >
        Search
      </button>
      <button
        onClick={handleClear}
        className="bg-red-400 text-white rounded-md p-2 ml-2  sm: mb-5  mt-[20px] w-[40%] sm:w-1/3 md:w-1/4 lg:w-1/5 text-sm md:text-base lg:text-lg"
      >
        Clear
      </button>
    </div>
  );
}
