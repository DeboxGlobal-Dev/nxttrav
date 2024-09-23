import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const YearlyQuery = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "QUERY",
            data: [0, 1, 0, 2, 3, 4, 6, 0, 3, 2, 8, 10],
            fill: false,
            borderColor: "orange",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            // Custom tooltip position logic
            position: "nearest",
            callbacks: {
              title: (tooltipItems) => {
                return `Custom Tooltip for ${tooltipItems[0].label}`;
              },
              label: (tooltipItem) => {
                return `Value: ${tooltipItem.raw}`;
              },
            },
          },
        },
        interaction: {
          mode: "nearest",
          intersect: true,
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default YearlyQuery;
