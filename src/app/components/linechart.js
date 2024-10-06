"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";

import { Chart } from "chart.js";
import { useContext } from "react";

import { UserContext } from "@/app/UserContext";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

Chart.defaults.elements.line.lineWidth = 8;

function LineChart() {
  const days = [];
  const times = [];
  const { loggedInUser } = useContext(UserContext);
  if (Object.keys(loggedInUser).length === 0) return;
  const userProgress = loggedInUser.progress;
  for (let i = 0; i < userProgress.length; i++) {
    const dateStr = userProgress[i].date.slice(0, 10);
    days.push(dateStr);
    times.push(userProgress[i].time);
  }
  const data = {
    labels: days,
    datasets: [
      {
        label: "Weekly Progress",
        data: times,
        borderColor: "#88A2F2",
        tension: 0.4,
        pointStyle: "triangle",
      },
    ],
  };
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
  return (
    <>
      <canvas id="canvas"></canvas>
      <div style={{ width: "500px", height: "300px" }}>
        <h1>Weekly Progress</h1>
        <Line data={data} options={options} />
      </div>
    </>
  );
}

export default LineChart;
