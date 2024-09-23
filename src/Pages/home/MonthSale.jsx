import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MonthSale = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [ "SALE", "GROSS MARGIN"],
        datasets: [
          {
            label: "My First Dataset",
            data: [10000, 2400],
            backgroundColor: [
              "rgb(255, 206, 86)",
              "rgb(75, 192, 192)",
            ],
            hoverOffset: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
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
      <canvas
        ref={chartRef}
        style={{ height: "100%", width: "100%", display: "block" }}
      />
    </div>
  );
};

export default MonthSale;
