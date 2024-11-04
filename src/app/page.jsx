"use client";
import PrayerTimes from "@/components/PrayerTimes";
import Prophet from "@/components/Prophet";
import Quran from "@/components/Quran";
import Link from "next/link";
import { motion } from "framer-motion";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";

export const animationVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    localStorage;
    window.location.reload();
  };

  return (
    <MantineProvider defaultColorScheme={dark ? "dark" : "light"}>
      <motion.div className="text-center py-8 bg-[url('/prayer-times-riga-2.jpg')] bg-center bg-cover w-full bg-no-repeat min-h-screen z-0 bg-[#333] relative">
        <div
          className={`px-10 py-2 cursor-pointer rounded-full absolute z-10 right-10 top-28 bg-[#ddd] `}
          onClick={toggleDarkMode}>
          Switch dark mode
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="text-white p-4 gap-10 flex items-center justify-center h-full mt-32">
          <motion.div
            variants={animationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="z-20 flex flex-col items-center justify-center gap-20">
            <h1 className="text-5xl font-bold text-white">
              مرحبا بك في موقع الفوز بالجنة
            </h1>
            <Link
              className="bg-transparent px-10 py-2 backdrop-blur-md border border-white text-white font-bold text-2xl rounded-full hover:bg-white hover:text-black transition duration-200"
              href="/prayer-times">
              ابدا التصفح
            </Link>
          </motion.div>
          <motion.div
            className="backdrop-blur-xl rounded-2xl"
            variants={animationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}>
            <PrayerTimes />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={animationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        transition={{ duration: 0.45, delay: 0.35 }}>
        <Quran />
      </motion.div>
      <motion.div
        variants={animationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        transition={{ duration: 0.45, delay: 0.35 }}>
        <Prophet />
      </motion.div>
    </MantineProvider>
  );
}
