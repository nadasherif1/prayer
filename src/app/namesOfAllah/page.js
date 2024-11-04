"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { animationVairant } from "../page";
import namesOfAllah from "../../../data/namesOfAllah.json";

const NamesOfAllah = () => {
  // const [names, setNames] = useState([]);

  // useEffect(() => {
  //   fetch('../data/namesOfAllah.json')
  //     .then(response => response.json())
  //     .then(data => setNames(data))
  //     .catch(error => console.error("Error loading names:", error));
  // }, []);
  return (
    <div className=" min-h-screen flex flex-col items-center py-10 mt-[100px]">
      <h1 className="text-3xl font-bold  mb-8">
        أسماء الله الحسنى
      </h1>
      <p className=" text-center w-3/4 mb-8 ">
        هو الله الخالق مخترع كل شيء له الأسماء الحسنى. يسبح له ما في السموات
        والأرض. وهو العزيز الحكيم. (سورة الحشر 59:24) وعلى الرغم من أن هناك 99
        اسمًا منسوبًا إليه في التقاليد الإسلامية، إلا أن الله هو الاسم الصحيح
        الشامل. فالله غير موجود في مكان واحد، وهو بلا أبعاد، وكلي القدرة، وموجود
        في كل مكان. رواه أبو هريرة: قال حضرة محمد (صلى الله عليه وسلم): «إن لله
        تسعة وتسعين اسمًا، من أحصاها دخل الجنة». (صحيح البخاري 50:894)
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-3/4">
        {namesOfAllah.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center relative group hover:bg-gray-300 transition-all duration-250 overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 ">
              {item.name}
              <p className="text-gray-600 text-sm mt-2 hidden group-hover:block">
                {item.meaning}
              </p>
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NamesOfAllah;
