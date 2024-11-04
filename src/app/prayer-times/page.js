"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {motion} from "framer-motion"
export const animationVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get("https://api.aladhan.com/v1/timingsByCity", {
          params: {
            city: "Cairo",
            country: "Egypt",
            method: 5,
          },
        });
        setPrayerTimes(response.data.data.timings);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };
    fetchPrayerTimes();
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-EG', options); 
  };

  return (
    <motion.div 
    variants={animationVariant}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.3 }} className="text-center mt-[120px]">
      <div className="flex justify-between items-center mx-auto container p-4 max-w-7xl">
        <div className="text-xl md:text-2xl font-bold">{formatDate(today)}</div>
        <div className="text-xl md:text-2xl font-bold">{today.toLocaleDateString('ar-EG-u-ca-islamic')}</div>
        <div className="text-xl md:text-2xl font-bold">أوقات الصلاة</div>
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 px-4 sm:px-8 md:px-12 lg:px-20 pt-10 max-w-7xl mx-auto">
        {prayerTimes && (
          <>
            <PrayerTimeCard label="الفجر" time={prayerTimes.Fajr} />
            <PrayerTimeCard label="المغرب" time={prayerTimes.Maghrib} />
            <PrayerTimeCard label="الشروق" time={prayerTimes.Sunrise} />
            <PrayerTimeCard label="الظهر" time={prayerTimes.Dhuhr} />
            <PrayerTimeCard label="الإمساك" time={prayerTimes.Imsak} />
            <PrayerTimeCard label="الثلث الأخير" time="02:47" />
            <PrayerTimeCard label="العشاء" time={prayerTimes.Isha} />
            <PrayerTimeCard label="العصر" time={prayerTimes.Asr} />
          </>
        )}
      </div>
     
    </motion.div>
  );
};

const PrayerTimeCard = ({ label, time }) => (
  <div className="border bg-gray-50 border-gray-500 rounded-full p-4 flex flex-col justify-center items-center text-center text-lg sm:text-xl font-bold w-[45vw] h-[45vw] sm:w-[200px] sm:h-[200px] lg:w-[180px] lg:h-[180px]">
    <div>{time}</div>
    <div className="text-gray-500 mt-2">{label}</div>
  </div>
);

export default PrayerTimes;
