"use client";
import { useEffect, useState } from "react";
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  addDays,
} from "date-fns";

const PrayerTimes = () => {
  const prayerTimes = {
    الفجر: "4:53 AM",
    الشروق: "6:24 AM",
    الظهر: "11:41 PM",
    العصر: "3:37 PM",
    المغرب: "4:58 PM",
    العشاء: "6:19 PM",
  };

  const [nextPrayer, setNextPrayer] = useState("");
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeRemaining = () => {
    const now = new Date();
    let closestTime = null;
    let closestPrayer = "";

    for (const [prayer, time] of Object.entries(prayerTimes)) {
      let prayerDate = new Date(`${format(now, "yyyy-MM-dd")} ${time}`);

      if (prayer === "العشاء" && now >= prayerDate) {
        prayerDate = addDays(prayerDate, 1);
        closestPrayer = "الفجر";
        closestTime = new Date(
          `${format(prayerDate, "yyyy-MM-dd")} ${prayerTimes.الفجر}`
        );
        break;
      }

      if (prayerDate > now && (!closestTime || prayerDate < closestTime)) {
        closestTime = prayerDate;
        closestPrayer = prayer;
      }
    }

    if (closestTime) {
      setNextPrayer(closestPrayer);
      const hours = differenceInHours(closestTime, now);
      const minutes = differenceInMinutes(closestTime, now) % 60;
      const seconds = differenceInSeconds(closestTime, now) % 60;
      setTimeRemaining({ hours, minutes, seconds });
    }
  };

  useEffect(() => {
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#404040]/[0.1] text-white rounded-2xl py-10">
      <h2 className="text-center font-semibold text-xl">
       باقي علي: {nextPrayer}
      </h2>
      <div className="flex justify-center text-4xl font-bold py-4 space-x-4 ">
        <div>
          <span>{String(timeRemaining.hours).padStart(2, "0")}</span>
          <span className="block text-sm">ساعات</span>
        </div>
        <span>:</span>
        <div>
          <span>{String(timeRemaining.minutes).padStart(2, "0")}</span>
          <span className="block text-sm">دقائق</span>
        </div>
        <span>:</span>
        <div>
          <span>{String(timeRemaining.seconds).padStart(2, "0")}</span>
          <span className="block text-sm">ثواني</span>
        </div>
      </div>

      <table className="w-full text-center mt-4">
        <tbody>
          {Object.entries(prayerTimes).map(([prayer, time]) => (
            <tr
              key={prayer}
              className={`${
                prayer === nextPrayer ? "bg-[#292524] text-white font-bold" : ""
              }`}>
              <td className="py-2">{prayer}</td>
              <td>{time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-center mt-6 text-sm px-10  ">
        {`"يا أيها الناس اعبدوا ربكم الذي خلقكم والذين من قبلكم لعلكم تتقون"`}
        <br />
        [القرآن - 2:21]
      </p>
    </div>
  );
};

export default PrayerTimes;
