"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";

import { Chart } from "chart.js";
import { useContext } from "react";

import { UserContext } from "@/app/UserContext";
import { FaGalacticSenate } from "react-icons/fa";

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
        pointStyle: "circle",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.5)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Time Coding",
        },
        display: true,
        min: 10,
        color: "gray-800",

        grid: {
          display: false,
        },
      },
      x: {
        title: {
          display: true,
          text: "Day",
        },
        display: true,
        color: "#88A2F2",

        grid: {
          display: false,
        },
      },
    },
    border: {
      display: true,
      borderWidth: 10,
    },
    fill: true,

    borderColor: "#88A2F2",
    backgroundColor: "rgb(190, 204, 250)",
    pointRadius: 8,
    pointBackgroundColor: "#7991D9",
    borderWidth: 6,
  };
  return (
    <>
      <div style={{ width: "600px", height: "400px" }}>
        <h1>Weekly Progress</h1>
        <Line data={data} options={options} />
      </div>
    </>
  );
}

export default LineChart;
