import BulletPoint from "components/BulletPoint";
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

function ScriptNodes() {
  const chartData = {
    datasets: [
      {
        label: "Users Gained",
        data: [100, 23],
        backgroundColor: ["#FFEF00", "white"],
        borderColor: "transparent",
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-[157px] relative flex">
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

        <p className="fs-16px font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          97.04%
        </p>
      </div>

      <div className="flex-1 relative overflow-hidden space-y-6">
        <BulletPoint
          textClassName="break-all"
          point={
            <>
              99.49% <br />
              0x98fd878cd2267577ea6ac47bcb5ff4dd97d2f9e5
            </>
          }
        />

        <BulletPoint
          textClassName="break-all"
          point={
            <>
              0.50% <br />
              0x5606a0ed29d4a22488cd6204ced773f0c250c08
            </>
          }
        />

        <BulletPoint
          textClassName="break-all"
          point={
            <>
              0.01% <br /> 0xca9fcb8cb86715cf779bbbcce3113c10c25b2166
            </>
          }
        />
      </div>
    </div>
  );
}

export default ScriptNodes;
