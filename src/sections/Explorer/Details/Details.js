import Title from "components/Title";
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
import ScriptNodes from "./ScriptNodes";
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

function Details() {
  return (
    <section className="container grid lg:grid-cols-2 gap-10">
      <div className="rounded-3xl py-5 px-8 bg-blue-1">
        <Title className="text-left mb-6" variant="24">
          Script Nodes
        </Title>

        <ScriptNodes />
      </div>

      <div className="border-2 border-primary rounded-2xl py-5 px-8">
        <Title className="text-left mb-6" variant="24">
          Script Transaction History (14 Days)
        </Title>

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
                  "Step " +
                  ctx.chart.data.datasets[0].stepped +
                  " Interpolation",
              },
            },
          }}
        />
      </div>
    </section>
  );
}

export default Details;
