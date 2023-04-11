import React, { useEffect } from "react";
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



function TransactionHistoryChart({
  analyticData
}) {


  return (
    
    <Line
      data={analyticData}
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
