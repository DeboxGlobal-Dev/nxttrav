import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ArcElement, ChartDataLabels);

const DestinationChart = () => {
  const data = {
    labels: ["Delhi", "Agra", "Noida", "Jaipur", "Ahmedabad"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 20, 15, 12],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      datalabels: {
        color: "black",
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (acc, val) => acc + val,
            0
          );
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}: ${percentage}`;
        },
        anchor: "center", // Center anchor to align with the pie slice
        align: "center", // Center the text inside the anchor
        font: {
          size: "11",
        },
        padding: 10,
        rotation: 90,
      },
    },
    animations: {
      tension: {
        duration: 100,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
      scale: {
        duration: 200,
        easing: "easeOutBounce",
        from: 1,
        to: 2, // Scale up
        loop: false,
      },
    },
  };

  return (
    <div
      style={{
        height: "185px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default DestinationChart;
