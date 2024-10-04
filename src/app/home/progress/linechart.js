"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
// import { Chart } from "react-chartjs-2";
import { Chart } from "chart.js";
import { useContext, useEffect } from "react";
import { fetchUser } from "@/app/models/profile.model";
import { UserContext } from "@/app/UserContext";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Weekly Progress",
      data: [65, 59, 80, 81, 56, 79, 45],

      borderColor: "#88A2F2",
      tension: 0.4,
      //   borderWidth: 5,
    },
  ],
};
Chart.defaults.elements.line.lineWidth = 8;

const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: "Time Spent on Coding",
      },
      display: true,
      min: 10,
      color: "gray-800",
    },
    x: {
      title: {
        display: true,
        text: "Day",
      },
      display: true,
      color: "#88A2F2",
    },
  },
  fill: "byteBackground",
  borderColor: "#88A2F2",
  pointBorderColor: "#A7C0F2",
  pointRadius: 6,
  pointBackgroundColor: "#7991D9",
};
function LineChart() {
  return (
    <div style={{ width: "500px", height: "300px" }}>
      <h1>Weekly Progress</h1>
      <Line data={data} options={options} />
    </div>
  );
}
export default LineChart;
