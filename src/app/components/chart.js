// components/ChartComponent.js
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  if (chartInstance.current) {
    chartInstance.current.destroy();
  }
  useEffect(() => {
    const img = new Image();
    img.src = "/happy.png"; // Path to your image
    img.width = 40;
    img.height = 40;
    img.onload = () => {
      chartInstance.current = new Chart(chartRef.current, {
        type: "line", // or 'bar', 'pie', etc.
        data: data,
        options: {
          responsive: true,
          scales: {
            y: {
              title: {
                display: true,
                text: "Time Coding",
              },
              display: true,
              min: 25,
              max: 130,
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
            borderWidth: 11,
          },
          fill: true,

          borderColor: "#88A2F2",
          backgroundColor: "rgb(190, 204, 250)",
          pointRadius: 0.1,
          pointBackgroundColor: "#7991D9",
          borderWidth: 7,
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0.5, // Adjust the size of the point
              pointStyle: img, // Use the image as the point style
            },
          },
        },
      });
    };

    return () => {
      chartInstance.current.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
