"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";

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
      fill: false,
      borderColor: "rgb(75, 192, 50)",
      backgroundColor: "#9BD0F5",
      tension: 0.4,
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
    },
    x: {
      title: {
        display: true,
        text: "Day",
      },
      display: true,
    },
  },
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
