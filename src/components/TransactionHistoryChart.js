import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as T,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  T
);

const data = {
  labels: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  datasets: [
    {
      label: "Dataset",
      data: [
        14394, 14200, 14322, 14123, 143120, 14489, 14348, 14123, 143120, 14489,
        14348,
      ],
      borderColor: "#FFEF00",
    },
  ],
};

function TransactionHistoryChart() {
  return (
    <Line
      data={data}
      className="line-chart"
      options={{
        // responsive: true,
        elements: {
          line: {
            backgroundColor: "green",
            borderCapStyle: "round",
          },
        },
        plugins: {
          legend: false,
          title: {
            display: false,
            text: (ctx) =>
              "Step " + ctx.chart.data.datasets[0].stepped + " Interpolation",
          },
        },
      }}
    />
  );
}

export default TransactionHistoryChart;
