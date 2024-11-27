

"use client";
import React, { useState, useEffect } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Snackbar, Alert,
} from "@mui/material";
import { motion } from "framer-motion";

const motivationalMessages = [
  "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
  "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
  "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
  "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِنَ الْمُحْسِنِينَ",
  "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ",
];

const dailyDhikr = [
  "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
  "أَسْتَغْفِرُ اللَّهَ رَبِّي مِن كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ",
  "اللَّهُ أَكْبَرُ",
  "لَا إِلٰهَ إِلَّا اللَّهُ",
  "اللَّهُ أَكْبَرُ كَبِيرًا",
  "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
  "اللهم صَلِّ وَسَلِّم على نبينا محمد",
  "اللهم آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار",
];

const AchievementPage = () => {
  const [dayData, setDayData] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const initializeDayData = () => {
    const storedData = JSON.parse(localStorage.getItem("dayData"));
    if (storedData) {
      setDayData(storedData);
    } else {
      const initialData = Array.from({ length: 30 }, (_, index) => {
        return {
          date: new Date(2024, 10, index + 1).toLocaleDateString("ar-EG"),
          prayer: { fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
          dhikrMorning: false,
          dhikrEvening: false,
          dhikrToday: dailyDhikr[index % dailyDhikr.length],
          dhikrCompleted: false,
        };
      });
      setDayData(initialData);
      localStorage.setItem("dayData", JSON.stringify(initialData));
    }
  };

  const updateLocalStorage = (data) => {
    localStorage.setItem("dayData", JSON.stringify(data));
  };

  const handlePrayerComplete = (date, prayer) => {
    const updatedDayData = dayData.map((item) =>
      item.date === date
        ? {
          ...item,
          prayer: {
            ...item.prayer,
            [prayer]: !item.prayer[prayer],
          },
        }
        : item
    );
    setDayData(updatedDayData);
    updateLocalStorage(updatedDayData);

    const todayData = updatedDayData.find((item) => item.date === date);
    if (Object.values(todayData.prayer).every(Boolean)) {
      setOpenSnackbar(true);
      setSnackMessage(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);
    }
  };

  const handleDhikrComplete = (date, type) => {
    const updatedDayData = dayData.map((item) =>
      item.date === date
        ? {
          ...item,
          [type === "morning" ? "dhikrMorning" : "dhikrEvening"]: !item[
            type === "morning" ? "dhikrMorning" : "dhikrEvening"
          ],
        }
        : item
    );
    setDayData(updatedDayData);
    updateLocalStorage(updatedDayData);

    setSnackMessage(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);
    setOpenSnackbar(true);
  };

  const handleDhikrToday = (date) => {
    const updatedDayData = dayData.map((item) =>
      item.date === date
        ? { ...item, dhikrCompleted: !item.dhikrCompleted }
        : item
    );
    setDayData(updatedDayData);
    updateLocalStorage(updatedDayData);

    setSnackMessage(
      updatedDayData.find((item) => item.date === date).dhikrCompleted
        ? "تمت قراءة الورد اليومي"
        : "تم إلغاء الورد اليومي"
    );
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const pendingTasks = dayData.some((item) => !item.dhikrMorning || !item.dhikrEvening || !item.dhikrCompleted);
      if (pendingTasks) {
        setSnackMessage("لا تنسَ قراءة الأذكار اليومية وإتمام الصلوات.");
        setOpenSnackbar(true);
      }
    }, 3600000);
    return () => clearInterval(intervalId);
  }, [dayData]);

  useEffect(() => {
    initializeDayData();
  }, []);

  const weeks = [];
  for (let i = 0; i < 4; i++) {
    weeks.push(dayData.slice(i * 7, (i + 1) * 7));
  }

  return (
    <div className="mt-16 px-8 rounded-lg shadow-lg p-6">
      <motion.h1
        className="text-center text-4xl font-semibold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        إنجازاتك اليومية
      </motion.h1>
      {weeks.map((week, weekIndex) => (
        <motion.div
          key={weekIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: weekIndex * 0.3 }}
        >
          <TableContainer component={Paper} className="mb-8 w-full overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow className="bg-gray-300">
                  <TableCell className="text-center font-bold">اليوم</TableCell>
                  <TableCell className="text-center font-bold">الفجر</TableCell>
                  <TableCell className="text-center font-bold">الظهر</TableCell>
                  <TableCell className="text-center font-bold">العصر</TableCell>
                  <TableCell className="text-center font-bold">المغرب</TableCell>
                  <TableCell className="text-center font-bold">العشاء</TableCell>
                  <TableCell className="text-center font-bold ">أذكار الصباح</TableCell>
                  <TableCell className="text-center font-bold">أذكار المساء</TableCell>
                  <TableCell className="text-center font-bold">ورد اليوم</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {week.map((day) => (
                  <TableRow key={day.date} className="transition-all">
                    <TableCell className="text-center">{day.date}</TableCell>
                    {["fajr", "dhuhr", "asr", "maghrib", "isha"].map((prayer) => (
                      <TableCell key={prayer} className="text-center ">
                        <Checkbox
                          checked={day.prayer[prayer]}
                          onChange={() => handlePrayerComplete(day.date, prayer)}
                          color="default"
                        />
                      </TableCell>
                    ))}
                    <TableCell className="text-center">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: day.dhikrMorning ? "gray" : "darkred",
                          color: "white",
                        }}
                        onClick={() => handleDhikrComplete(day.date, "morning")}
                      >
                        {day.dhikrMorning ? "تم قراءة الأذكار الصباحية" : "قراءة الأذكار الصباحية"}
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: day.dhikrEvening ? "gray" : "darkred",
                          color: "white",
                        }}
                        onClick={() => handleDhikrComplete(day.date, "evening")}
                      >
                        {day.dhikrEvening ? "تم قراءة الأذكار المسائية" : "قراءة الأذكار المسائية"}
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: day.dhikrCompleted ? "gray" : "darkred",
                          color: "white",
                        }}
                        onClick={() => handleDhikrToday(day.date)}
                      >
                        {day.dhikrCompleted ? "تم قراءة الورد اليومي" : "قراءة الورد اليومي"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>
      ))}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity="success" sx={{ width: "100%" }}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AchievementPage;
