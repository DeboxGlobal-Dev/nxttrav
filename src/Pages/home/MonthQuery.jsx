// src/LineChart.js

import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            // Custom tooltip position logic
            position: 'nearest',
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
          mode: 'nearest',
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

export default LineChart;
