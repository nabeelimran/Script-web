import React from "react";

function CollectRewardCard({ data }) {
  const { active, score, title } = data;
  return (
    <div
      className={`space-y-3 flex flex-col items-center text-center rounded py-3 px-2 ${
        active ? "bg-primary" : "bg-[#161616]"
      }`}
    >
      <p className={`fs-16px ${active ? "text-black" : "text-white"}`}>
        {title}
      </p>

      <img src="images/trophy.png" className="h-[36px] lg:h-[50px]" alt="" />

      <p className={`fs-16px ${active ? "text-black" : "text-white"}`}>
        {score}
      </p>
    </div>
  );
}

export default CollectRewardCard;
