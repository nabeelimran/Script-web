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
  labels: [],
  datasets: [
    {
      label: "Dataset",
      data: [],
      borderColor: "#FFEF00",
    },
  ],
};

function TransactionHistoryChart({
  analyticData
}) {

  if (analyticData && analyticData.length > 0) {
    let durationArr = []
    let videoIdArr = []
    analyticData.forEach(aData => {
      durationArr.push(aData.duration);
      videoIdArr.push(aData.videoId);
    });
    data.labels = [...videoIdArr];
    data.datasets[0].data = durationArr.sort();
  } 

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
