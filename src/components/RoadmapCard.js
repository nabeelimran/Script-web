import React from "react";

function RoadmapCard({ point, title, year }) {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-7">
        <h1 className="text-3xl xl:text-4xl text-primary font-bold">{title}</h1>
        <p className="fs-24px text-white font-medium">{year}</p>
      </div>

      <div className="space-y-3">
        {point &&
          point.map((point, i) => (
            <p key={i} className="fs-18px font-medium opacity-70">
              {point}
            </p>
          ))}
      </div>
    </div>
  );
}

export default RoadmapCard;
