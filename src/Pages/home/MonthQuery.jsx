// src/BarChart.js

import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MonthQuery = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Confirmed",
          "Followup",
          "Option Sent",
          "Assigned",
          "Reverted",
          "Created",
        ],
        datasets: [
          {
            label: "Sales",
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
              },
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "240px",
      }}
    >
      <canvas ref={chartRef} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default MonthQuery;
