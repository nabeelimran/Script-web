import React from "react";
import { Doughnut } from "react-chartjs-2";

export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

function NodesChart({ className = "w-[157px]", value = "97.04%", holders, percentage }) {
  const chartData = {
    datasets: [
      // {
      //   label: "Users Gained",
      //   data: [100, 23],
      //   backgroundColor: ["#FFEF00", "white"],
      //   borderColor: "transparent",
      //   borderWidth: 0,
      // },
    ],
  };

  if(holders && holders.length > 0) {
    for (let index = 0; index < holders.length; index++) {
      chartData.datasets.push({
        label: `${percentage[index]}% ${holders[index]}`,
        data: [percentage[index]],
        backgroundColor: ["#FFEF00", "white"],
        borderColor: "transparent",
        borderWidth: 0,
      });
    }
  }

  return (
    <div className={`${className} relative flex`}>
      <Doughnut
        data={chartData}
        // style={{ width: "100%" }}
        options={{
          // responsive: true,
          cutout: "76%",

          plugins: {
            legend: false,
            title: {
              display: false,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />

      {/* <p className="fs-16px font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {value}
      </p> */}
    </div>
  );
}

export default NodesChart;
