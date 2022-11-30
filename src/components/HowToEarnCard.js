import React from "react";
import Title from "./Title";

function HowToEarnCard({ img, title, desc }) {
  return (
    <div className="bg-shade-grayis rounded-2xl py-6 px-8">
      <div className="mx-auto w-20 h-20 rounded-full overflow-hidden mb-4">
        <img src={img} alt="" className="w-full h-full" />
      </div>

      <Title
        className="text-center text-primary font-semibold mb-3"
        variant="20"
      >
        {title}
      </Title>

      <p className="text-center text-base">{desc}</p>
    </div>
  );
}

export default HowToEarnCard;
