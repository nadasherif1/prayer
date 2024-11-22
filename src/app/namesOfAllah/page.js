"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import namesOfAllah from "../../../data/namesOfAllah.json";

const NamesOfAllah = () => {
  const [showNames, setShowNames] = useState(false);

  const handleShowNames = () => {
    setShowNames(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 mt-[150px]">
      <h1 className="text-3xl font-bold mb-8">أسماء الله الحسنى</h1>
      <p className="text-center w-3/4 mb-8">
        هو الله الخالق مخترع كل شيء له الأسماء الحسنى. يسبح له ما في السموات
        والأرض. وهو العزيز الحكيم. (سورة الحشر 59:24) وعلى الرغم من أن هناك 99
        اسمًا منسوبًا إليه في التقاليد الإسلامية، إلا أن الله هو الاسم الصحيح
        الشامل. فالله غير موجود في مكان واحد، وهو بلا أبعاد، وكلي القدرة، وموجود
        في كل مكان. رواه أبو هريرة: قال حضرة محمد (صلى الله عليه وسلم): «إن لله
        تسعة وتسعين اسمًا، من أحصاها دخل الجنة». (صحيح البخاري 50:894)
      </p>

      {!showNames && (
        <button
          onClick={handleShowNames}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all">
          عرض الأسماء
        </button>
      )}

      {showNames && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-3/4 mt-8">
          {namesOfAllah.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 * index }} 
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center relative group hover:bg-gray-300 transition-all duration-600 overflow-hidden">
              <h2 className="text-2xl font-semibold text-gray-800">
                {item.name}
                <p className="text-gray-600 text-sm mt-2 hidden group-hover:block">
                  {item.meaning}
                </p>
              </h2>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NamesOfAllah;
