import React from "react";
import styles from "./MealSchedule.module.css";
import CardForRecipie from "./CardForRecipie";

const MealSchedule = ({ weeklySchedule }) => {
  console.log(weeklySchedule?.weeklySchedule);
  let currentDate = new Date();
  // Gets current year, month
  let year = currentDate.getFullYear();
  let month = currentDate.toLocaleString("default", { month: "short" });

  // Calculate the date of Monday this week
  let dayOfWeek = currentDate.getDay(); // Sunday - 0, Monday - 1, etc.
  let diffToMonday =
    currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust for Sunday
  let monday = new Date(currentDate.setDate(diffToMonday));

  // Generate the rest of the week
  let weekDays = Array.from({ length: 7 }).map((_, i) => {
    let day = new Date(monday);
    day.setDate(monday.getDate() + i);
    return day;
  });

  return (
    <div className={styles.MealSchedule}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.monthYearDisplay}>
            <b className={styles.monthYear}>{`${month} ${year}`}</b>
            <h2 className={styles.frames}>{`<  >`}</h2>
          </div>
        </div>
      </div>
      <div className={styles.weekdaysContainer}>
        {weekDays.map((day, index) => (
          <div key={index} className={styles.dayContainer}>
            <div className={styles.sunday}>
              {day.toLocaleString("default", { weekday: "long" })}
            </div>
            <div className={styles.dayDate}>{day.getDate()}</div>
            <CardForRecipie
              items={
                weeklySchedule &&
                weeklySchedule?.weeklySchedule[
                  day.toLocaleString("default", { weekday: "short" })
                ]
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealSchedule;
