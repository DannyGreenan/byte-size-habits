import { useEffect, useState, useContext } from "react";
import { patchUser } from "@/app/models/profile.model";
import { UserContext } from "../context/UserContext";

export default function progressDayFiller() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const dateSort = (a, b) => {
    const aDate = a.date.split("-");
    const bDate = b.date.split("-");
    const aYear = aDate[0];
    const bYear = bDate[0];
    const aMonth = aDate[1];
    const bMonth = bDate[1];
    const aDay = aDate[2];
    const bDay = bDate[2];
    if (aYear != bYear) return aYear - bYear;
    if (aMonth != bMonth) return aMonth - bMonth;
    if (aDay != bDay) return aDay - bDay;
  };

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 0) return;
    let earliestDate = new Date();
    if (loggedInUser.progress.length > 0)
      earliestDate = loggedInUser.progress[0].date;
    const today = new Date();
    const dateSrt = today.toISOString();
    const todaysDate = dateSrt.slice(0, 10);

    const msBetween = new Date(earliestDate) - new Date(todaysDate);
    // daysBetween = total micro seconds / 1000ms / 60s / 60m / 24h
    const oneDay = 1000 * 60 * 60 * 24;
    let daysBetween = msBetween / oneDay;

    const totalDates = [];
    for (daysBetween; daysBetween < 0; daysBetween++) {
      const dateToAddDate = new Date(today - -daysBetween * oneDay);
      const dateToAddStr = dateToAddDate.toISOString();
      const dateToAdd = dateToAddStr.slice(0, 10);
      totalDates.push(dateToAdd);
    }

    const mappedProgressDates = loggedInUser.progress.map(
      (progress) => progress.date
    );

    const newProgress = [...loggedInUser.progress];
    for (let index = 0; index < totalDates.length; index++) {
      const dateToCheck = totalDates[index];
      if (!mappedProgressDates.includes(dateToCheck)) {
        const missingDate = {
          date: dateToCheck,
          time: 0,
        };
        newProgress.push(missingDate);
      } else {
      }
    }

    newProgress.sort(dateSort);

    patchUser(loggedInUser.user_id, { progress: newProgress }).then((user) => {
      const userStringified = JSON.stringify(user);
      localStorage.setItem("user", userStringified);
      setLoggedInUser(user);
    });
  }, []);
}
