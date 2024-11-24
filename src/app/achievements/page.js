"use client";
import React, { useState, useEffect } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Snackbar, Alert,
  Radio,
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
      item.date === date ? { ...item, prayer: { ...item.prayer, [prayer]: true } } : item
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
        ? { ...item, [type === "morning" ? "dhikrMorning" : "dhikrEvening"]: true }
        : item
    );
    setDayData(updatedDayData);
    updateLocalStorage(updatedDayData);

    setSnackMessage(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);
    setOpenSnackbar(true);
  };

  const handleDhikrToday = (date) => {
    const updatedDayData = dayData.map((item) =>
      item.date === date ? { ...item, dhikrCompleted: true } : item
    );
    setDayData(updatedDayData);
    updateLocalStorage(updatedDayData);

    setSnackMessage("تمت قراءة الورد اليومي");
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
    <div className="mt-16 px-8 rounded-lg shadow-lg p-6" >
      <motion.h1
        className="text-center text-4xl font-semibold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        إنجازاتك اليومية
      </motion.h1>
      <motion.div
   className="mt-12 text-center text-lg mb-6"
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 1 }}
 >
   <p>
     إن الاستمرارية في أداء الصلوات والأذكار اليومية هي من أعظم العبادات التي تقربنا إلى الله سبحانه وتعالى. 
     إن كل صلاة وذكر نقوم به هو خطوة نحو طاعة الله وزيادة في حسناتنا. 
     بتقسيمنا لهذا الشهر إلى أسابيع، نستطيع أن نرى كيف ننمو روحياً مع مرور الأيام، وكيف أن المثابرة في العبادة تحقق لنا الراحة النفسية وتقربنا إلى الله.
     فلتكن هذه الإنجازات اليومية دافعاً لنا للاستمرار في طريق الخير، ونسأل الله أن يعيننا على إتمامها بإخلاص.
   </p>
 </motion.div>
      {weeks.map((week, weekIndex) => (
 <motion.div
 key={weekIndex}
 initial={{ opacity: 0, y: 50 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: weekIndex * 0.3 }}
>
        <TableContainer component={Paper} className="mb-8 w-full overflow-x-auto " key={weekIndex}>
          <Table
          
          >
            <TableHead>
              <TableRow className="bg-gray-300">
                <TableCell className="text-center font-bold">اليوم</TableCell>
                <TableCell className="text-center font-bold">الفجر</TableCell>
                <TableCell className="text-center font-bold">الظهر</TableCell>
                <TableCell className="text-center font-bold">العصر</TableCell>
                <TableCell className="text-center font-bold">المغرب</TableCell>
                <TableCell className="text-center font-bold">العشاء</TableCell>
                <TableCell className="text-center font-bold">أذكار الصباح</TableCell>
                <TableCell className="text-center font-bold">أذكار المساء</TableCell>
                <TableCell className="text-center font-bold">ورد اليوم</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {week.map((day) => (
                <TableRow key={day.date} className=" transition-all">
                  <TableCell className="text-center">{day.date}</TableCell>
                  {["fajr", "dhuhr", "asr", "maghrib", "isha"].map((prayer) => (
                    <TableCell key={prayer} className="text-center">
                      <Radio
                        checked={day.prayer[prayer]}
                        onChange={() => handlePrayerComplete(day.date, prayer)}
                        color="gray"
                      />
                    </TableCell>
                  ))}
                  <TableCell className="text-center">
                    <Button
                      variant="contained"
                      color={day.dhikrMorning ? "success" : "success"}
                      onClick={() => handleDhikrComplete(day.date, "morning")}
                      disabled={day.dhikrMorning}
                    >
                      {day.dhikrMorning ? "تم قراءة الأذكار الصباحية" : "قراءة الأذكار الصباحية"}
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="contained"
                      color={day.dhikrEvening ? "success" : "success"}
                      onClick={() => handleDhikrComplete(day.date, "evening")}
                      disabled={day.dhikrEvening}
                    >
                      {day.dhikrEvening ? "تم قراءة الأذكار المسائية" : "قراءة الأذكار المسائية"}
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="contained"
                      color={day.dhikrCompleted ? "success" : "success"}
                      onClick={() => handleDhikrToday(day.date)}
                      disabled={day.dhikrCompleted}
                    >
                      {day.dhikrCompleted ? "تم الورد اليومي" : "قراءة الورد اليومي"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </motion.div>
      ))}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert severity="info">{snackMessage}</Alert>
      </Snackbar>
    </div>
  );
};

export default AchievementPage;
